import {
    Component, Input, ComponentFactoryResolver, AfterViewInit, ViewChild, HostBinding, EventEmitter,
    Output
} from "@angular/core";
import {IGuiComponent, GuiComponent} from "./gui-component";
import {ContentLoader} from "./content-loader.directive";
import {UUID} from "angular2-uuid";
import {Side} from "./gui-view.component";

@Component({
    moduleId: module.id,
    selector: 'simple-panel',
    templateUrl: 'simple-panel.component.html',
    styleUrls: ['simple-panel.component.css']
    // directives: [ContentLoader]
})
export class SimplePanelComponent implements AfterViewInit {
    @Input()
    titre:string;
    @Input('content')
    panelContentType:IGuiComponent;
    @Input()
    side:Side;
    @Input()
    index:number;

    sides = Side;

    @Output()
    resizeEmitter:EventEmitter<SizeEvent> = new EventEmitter<SizeEvent>();

    @HostBinding('class.active')
    displayContent = true;
    _panelContent:GuiComponent;

    _id:UUID = UUID.UUID();

    @ViewChild(ContentLoader) loader:ContentLoader;

    ngAfterViewInit() {
        if (!this.loader)
            throw new Error('SimplePanelComponent avec un loader null après initialisation !');

        this._panelContent = this.loader.component.instance;
    }

    equilibrateSizes():void {
        this.resizeEmitter.emit(new SizeEvent(this.id, Size.Normal));
    }

    maximizeSize():void {
        this.resizeEmitter.emit(new SizeEvent(this.id, Size.Full));
    }

    maskPanelSide():void {
        this.resizeEmitter.emit(new SizeEvent(this.id, Size.None));
    }

    display(display:boolean):void {
        this.displayContent = display;
    }

    get id():UUID {
        return this._id;
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
