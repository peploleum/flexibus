/**
 * Created by tbonavia on 17/08/2016.
 */
import {Component, Input, ComponentFactoryResolver, AfterViewInit, ViewChild, HostBinding} from "@angular/core";
import {IGuiComponent, GuiComponent} from "./gui-component";
import {ContentLoader} from "./content-loader.directive";
import {GuiItemType} from "../gui-api/gui-item";

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
    type:GuiItemType;
    @Input('content')
    panelContentType:IGuiComponent;


    @HostBinding('class.active')
    displayContent = true;
    private _panelContent:GuiComponent;

    @ViewChild(ContentLoader) loader:ContentLoader;


    constructor(private cfr:ComponentFactoryResolver) {
    }

    ngAfterViewInit() {
        if (!this.loader)
            throw new Error('SimplePanelComponent avec un loader null après initialisation !');

        this._panelContent = this.loader.component.instance;
    }

    private getPanelClass(): string{
        switch(this.type){
            case GuiItemType.error:
                return 'error';
            case GuiItemType.normal:
                return 'normal';
            case GuiItemType.warning:
                return 'warning';
            default:
                throw new Error('Le type ' + this.type + 'n\'est pas pris en charge par le SimplePanel.');
        }
    }

    get panelContent() {
        return this._panelContent;
    }
}

