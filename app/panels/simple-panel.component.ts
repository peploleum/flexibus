/**
 * Created by tbonavia on 17/08/2016.
 */
import {
    Component, OnInit, Input, ViewContainerRef, ViewChild, ComponentFactoryResolver,
    KeyValueDiffers, KeyValueDiffer, ChangeDetectionStrategy, AfterViewInit, AfterContentInit, ElementRef, Injector,
    ReflectiveInjector, ComponentRef
} from "@angular/core";
import {IGuiComponent, GuiComponent} from "../gui/gui-component";

@Component({
    selector: 'simple-panel',
    templateUrl: 'app/panels/simpel-panel.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimplePanelComponent implements OnInit {
    @Input()
    titre:string;
    @Input()
    type:PanelType = 'normal';

    displayContent = true;
    initialized = false;

    @ViewChild('panelContent', {read: ViewContainerRef}) contentAnchor:ViewContainerRef;
    panelContentType:IGuiComponent;

    // La fonction qui permet de renvoyer le contenu du panneau lorsque celui-ci a été implémenté via le ComponentFactoryResolver
    private promiseResolver:Function;

    constructor(private cfr:ComponentFactoryResolver, private elementRef: ElementRef) {
    }

    ngOnInit() {
        this.initialized = true;
        this.instantiateContent();
    }

    setContent(contentType:IGuiComponent):Promise<ComponentRef<GuiComponent>> {
        this.panelContentType = contentType;
        if (this.initialized) {
            this.instantiateContent();
        }

        return new Promise((resolve) => {
            this.promiseResolver = resolve
        });
    }

    instantiateContent():void {
        if (this.panelContentType) {
            var factory = this.cfr.resolveComponentFactory(this.panelContentType);
            var contentComponent = this.contentAnchor.createComponent(factory);

            this.promiseResolver(contentComponent);
        }
    }
}

type PanelType = "normal" | "warning" | "error";