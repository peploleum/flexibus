/**
 * Created by tbonavia on 17/08/2016.
 */
import {
    Component, Input, ComponentFactoryResolver, AfterViewInit, ViewChild, HostBinding, EventEmitter,
    Output
} from "@angular/core";
import {IGuiComponent, GuiComponent} from "./gui-component";
import {ContentLoader} from "./content-loader.directive";
import {GuiItemType} from "../gui-api/gui-item";
import {UUID} from "angular2-uuid";
import {Side} from "./gui-view.component";

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
    @Input()
    private side:Side;
    @Input()
    private index:number;

    private sides = Side;

    @Output()
    resizeEmitter:EventEmitter<SizeEvent> = new EventEmitter<SizeEvent>();

    @HostBinding('class.active')
    displayContent = true;
    private _panelContent:GuiComponent;

    private _id:UUID = UUID.UUID();

    @ViewChild(ContentLoader) loader:ContentLoader;

    ngAfterViewInit() {
        if (!this.loader)
            throw new Error('SimplePanelComponent avec un loader null après initialisation !');

        this._panelContent = this.loader.component.instance;
    }

    private equilibrateSizes():void {
        this.resizeEmitter.emit(new SizeEvent(this.id, Size.Normal));
    }

    private maximizeSize():void {
        this.resizeEmitter.emit(new SizeEvent(this.id, Size.Full));
    }

    private maskPanelSide():void {
        this.resizeEmitter.emit(new SizeEvent(this.id, Size.None));
    }

    display(display:boolean):void {
        this.displayContent = display;
    }

    get id():UUID {
        return this._id;
    }

    private getPanelClass():string {
        switch (this.type) {
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

export class SizeEvent {
    panelAskingFullSizeId:UUID;
    size:Size;

    constructor(paneAskingFullSizeId:UUID, size:Size) {
        this.panelAskingFullSizeId = paneAskingFullSizeId;
        this.size = size;
    }
}

export enum Size {
    /** Le panneau émetteur prend tout l'espace. */
    Full,
    /** L'espace est réparti de façon équitable entre tous les panneaux. */
    Normal,
    /** L'ensemble du panneau contenant est collapsé. */
    None
}
