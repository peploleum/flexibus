import {
    Component,
    AfterViewInit,
    Renderer,
    ComponentRef,
    ViewChildren,
    QueryList,
    Input,
    OnInit,
    ViewChild,
    ElementRef
} from "@angular/core";
import {SimplePanelComponent, SizeEvent, Size} from "./simple-panel.component";
import {GuiContextService} from "./gui-context.service";
import {GuiItem} from "../gui-api/gui-item";

@Component({
    moduleId:module.id,
    selector: 'gui-view',
    templateUrl: 'gui-view.component.html',
    styleUrls: ['gui-view.component.css'],
    providers: [GuiContextService]
    // directives: [NgStyle]
})
export class GuiView implements AfterViewInit, OnInit {
    @ViewChildren(SimplePanelComponent) panels:QueryList<SimplePanelComponent>;

    @Input('main')
    mainComponentDescriptor:GuiItem;
    @Input('left')
    leftComponentsDescriptors:Array<GuiItem> = new Array();
    @Input('right')
    rightComponentsDescriptors:Array<GuiItem> = new Array();

    @ViewChild('mainPanel')
    mainPanel:ComponentRef<SimplePanelComponent>;
    @ViewChildren('leftPanels')
    leftPanels:QueryList<SimplePanelComponent>;
    @ViewChildren('rightPanels')
    rightPanels:QueryList<SimplePanelComponent>;

    leftWidth:number;
    rightWidth:number;
    mainWidth:number;
    leftStyleWidth:string;
    rightStyleWidth:string;
    mainStyleWidth:string;

    stopMouseMoveListener:Function;
    stopMouseUpListener:Function;

    leftCollapsed:boolean = false;
    rightCollapsed:boolean = false;

    sides = Side;

    constructor(private renderer:Renderer, private element:ElementRef) {
    }

    ngOnInit() {
        this.processSizes();
    }

    ngAfterViewInit() {
    }

    processResize(event:SizeEvent, side:Side) {
        let panels = side == Side.Left ? this.leftPanels : this.rightPanels;

        switch (event.size) {
            case Size.Full:
                if (side == null) {
                    // Affichage plein écran de l'espace principal
                    this.leftCollapsed = true;
                    this.rightCollapsed = true;

                    this.processSizes();
                } else {
                    // Display only current panel
                    panels.map((panel) => {
                        panel.display(panel.id == event.panelAskingFullSizeId)
                    });
                }
                break;
            case Size.Normal:
                // Display all panels
                panels.map((panel) => {
                    panel.display(true)
                });
                break;
            case Size.None:
                // Collapse panel side
                switch (side) {
                    case Side.Left:
                        this.leftCollapsed = true;
                        break;
                    case Side.Right:
                        this.rightCollapsed = true;
                        break;
                    default:
                        throw new Error('Droite ou gauche uniquement... Le centre est mort !');
                }
                this.processSizes();
                break;
            default:
                break;
        }
    }


    private processSizes(leftWidth?:number, rightWidth?:number) {
        let leftEnabled = this.leftComponentsDescriptors.length != 0;
        let rightEnabled = this.rightComponentsDescriptors.length != 0;

        // If no component registered => 0
        // Else if parameter not null => parameter (for ex. during a resize event : new panel size)
        // Else => current size
        this.leftWidth = leftEnabled ? (leftWidth ? leftWidth : (this.leftWidth ? this.leftWidth : 20)) : 0;
        this.rightWidth = rightEnabled ? (rightWidth ? rightWidth : (this.rightWidth ? this.rightWidth : 20)) : 0;


        this.mainWidth = 100 - this.leftWidth - this.rightWidth;

        this.leftStyleWidth = this.leftWidth == 0 ? '0%' : (this.leftCollapsed ? '30px' : this.leftWidth + '%');
        this.rightStyleWidth = this.rightWidth == 0 ? '0%' : (this.rightCollapsed ? '30px' : this.rightWidth + '%');

        let toRemoveFromLeft = this.leftCollapsed ? (this.leftWidth == 0 ? '0%' : '30px') : this.leftWidth + '%';
        let toRemoveFromRight = this.rightCollapsed ? (this.rightWidth == 0 ? '0%' : '30px') : this.rightWidth + '%';

        this.mainStyleWidth = 'calc(100% - ' + toRemoveFromLeft + ' - ' + toRemoveFromRight + ')';

        this.sendResizeEvent(this.element.nativeElement.ownerDocument.defaultView || this.element.nativeElement.ownerDocument.parentWindow);
    }

    getDisplay(side:Side):string {
        switch (side) {
            case Side.Left:
                return this.leftWidth == 0 ? 'none' : 'flex';
            case Side.Right:
                return this.rightWidth == 0 ? 'none' : 'flex';
            default:
                throw new Error('Droite ou gauche uniquement... Le centre est mort !');
        }
    }

    startResize(resizeSide:Side) {
        // On ajoute les listeners sur document et on dit de quel côté on travaille
        this.stopMouseMoveListener = this.renderer.listenGlobal('document', 'mousemove', (event:any) => {
            let leftWidth:number;
            let rightWidth:number;
            switch (resizeSide) {
                case Side.Left:
                    leftWidth = ((event.pageX / event.view.window.document.documentElement.clientWidth) * 100);
                    break;
                case Side.Right:
                    rightWidth = (((event.view.window.document.documentElement.clientWidth - event.pageX) / event.view.window.document.documentElement.clientWidth) * 100);
                    break;
                default:
                    break;
            }

            this.processSizes(leftWidth, rightWidth)
        });
        this.stopMouseUpListener = this.renderer.listenGlobal('document', 'mouseup', (event:any) => {
            // On supprime les listeners sur le document
            this.stopMouseMoveListener();
            this.stopMouseUpListener();

            this.sendResizeEvent(event.view.window);
        });
    }

    private sendResizeEvent(window:any) {
        // On émet un évènement de fin de redimensionnement pour que tous les composants ayant besoin d'une
        // taille fixe (OpenLayers, D3...) puissent se redimensionner correctement simplement en écoutant l'evt
        // de redimensionnement de la window.
        setTimeout(() => {
            this.renderer.invokeElementMethod(window, 'dispatchEvent', [new Event('resize', {
                bubbles: true,
                cancelable: false
            })]);
        });
    }
}

export enum Side
{
    Left,
    Right
}