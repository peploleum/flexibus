/**
 * Created by tbonavia on 17/08/2016.
 */
import {
    Component,
    Input,
    ComponentFactoryResolver,
    ComponentRef,
    QueryList,
    AfterViewInit, ViewChild
} from "@angular/core";
import {IGuiComponent, GuiComponent} from "../gui/gui-component";
import {ContentLoader} from "./content-loader.directive";

@Component({
    selector: 'simple-panel',
    templateUrl: 'app/panels/simple-panel.component.html',
    styleUrls: ['app/panels/simple-panel.component.css'],
    directives: [ContentLoader]
})
export class SimplePanelComponent implements AfterViewInit {
    @Input()
    titre:string;
    @Input()
    type:PanelType = 'normal';

    displayContent = true;
    initialized = false;

    @Input('content')
    panelContentType:IGuiComponent;
    private _panelContent: GuiComponent;

    @ViewChild(ContentLoader) loader: ContentLoader;

    // La fonction qui permet de renvoyer le contenu du panneau lorsque celui-ci a été implémenté via le ComponentFactoryResolver
    private promiseResolver:Function;

    constructor(private cfr:ComponentFactoryResolver) {
    }

    ngAfterViewInit (){
        if(!this.loader)
            throw new Error('SimplePanelComponent avec un loader null après initialisation !');

        this._panelContent = this.loader.component.instance;
    }
    
    get panelContent(){
        return this._panelContent;
    }

    setContent(contentType:IGuiComponent):Promise<ComponentRef<GuiComponent>> {
        // this.panelContentType = contentType;
        // if (this.initialized) {
        //     this.instantiateContent();
        // }
        //
        // // Lorsque le composant aura été instancié... il sera renvoyé au demandeur
        return new Promise((resolve) => {
            this.promiseResolver = resolve
        });
    }

    // instantiateContent():void {
    //     if (this.panelContentType) {
    //         var factory = this.cfr.resolveComponentFactory(this.panelContentType);
    //         var contentComponent = this.contentAnchor.createComponent(factory);
    //
    //         // On renvoie le Component à celui qui a demandé l'instantiation... il en fera ce qu'il veut
    //         this.promiseResolver(contentComponent);
    //     }
    // }
}

type PanelType = "normal" | "warning" | "error";