/**
 * Created by tbonavia on 17/08/2016.
 */
import {Component, Input, ComponentFactoryResolver, AfterViewInit, ViewChild, HostBinding} from "@angular/core";
import {IGuiComponent, GuiComponent} from "./gui-component";
import {ContentLoader} from "./content-loader.directive";

@Component({
    moduleId: module.id,
    selector: 'simple-panel',
    templateUrl: 'simple-panel.component.html',
    styleUrls: ['simple-panel.component.css'],
    directives: [ContentLoader]
})
export class SimplePanelComponent implements AfterViewInit {
    @Input()
    titre:string;
    @Input()
    type:PanelType = 'normal';

    @HostBinding('class.active')
    displayContent = true;

    @Input('content')
    panelContentType:IGuiComponent;
    private _panelContent:GuiComponent;

    @ViewChild(ContentLoader) loader:ContentLoader;


    constructor(private cfr:ComponentFactoryResolver) {
    }

    ngAfterViewInit() {
        if (!this.loader)
            throw new Error('SimplePanelComponent avec un loader null après initialisation !');

        this._panelContent = this.loader.component.instance;
    }

    get panelContent() {
        return this._panelContent;
    }
}

type PanelType = "normal" | "warning" | "error";