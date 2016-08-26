/**
 * Created by tbonavia on 18/08/2016.
 */
import {
    Component,
    AfterViewInit,
    Renderer,
    ComponentRef,
    ViewChildren,
    QueryList,
    Input,
    OnInit,
    ViewChild, ElementRef
} from "@angular/core";
import {SimplePanelComponent, SizeEvent, Size} from "./simple-panel.component";
import {GuiContextService} from "./gui-context.service";
import {GuiItem} from "../gui-api/gui-item";
import {NgStyle} from "@angular/common";

@Component({
    selector: 'gui-view',
    templateUrl: 'app/gui/gui-view.component.html',
    styleUrls: ['app/gui/gui-view.component.css'],
    providers: [GuiContextService],
    directives: [NgStyle]
})
export class GuiView implements AfterViewInit, OnInit {
    @ViewChildren(SimplePanelComponent) panels:QueryList<SimplePanelComponent>;

    @Input('main')
    private mainComponentDescriptor:GuiItem;
    @Input('left')
    private leftComponentsDescriptors:Array<GuiItem> = new Array();
    @Input('right')
    private rightComponentsDescriptors:Array<GuiItem> = new Array();

    @ViewChild('mainPanel')
    private mainPanel:ComponentRef<SimplePanelComponent>;
    @ViewChildren('leftPanels')
    private leftPanels:QueryList<SimplePanelComponent>;
    @ViewChildren('rightPanels')
    private rightPanels:QueryList<SimplePanelComponent>;

    private leftWidth:number;
    private rightWidth:number;
    private mainWidth:number;
    private leftStyleWidth:string;
    private rightStyleWidth:string;
    private mainStyleWidth:string;

    private stopMouseMoveListener:Function;
    private stopMouseUpListener:Function;

    private leftCollapsed:boolean = false;
    private rightCollapsed:boolean = false;

    private sides = Side;

    constructor(private renderer:Renderer, private element:ElementRef) {
    }

    ngOnInit() {
        this.processSizes();
    }

    ngAfterViewInit() {
    }

    private processResize(event:SizeEvent, side:Side) {
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
        this.leftWidth = this.leftComponentsDescriptors.length == 0 ? 0 : (leftWidth ? leftWidth : (this.leftWidth ? this.leftWidth : 20));
        this.rightWidth = this.rightComponentsDescriptors.length == 0 ? 0 : (rightWidth ? rightWidth : (this.rightWidth ? this.rightWidth : 20));
        this.mainWidth = 100 - this.leftWidth - this.rightWidth;

        this.leftStyleWidth = this.leftCollapsed ? '30px' : this.leftWidth + '%';
        this.rightStyleWidth = this.rightCollapsed ? '30px' : this.rightWidth + '%';
        this.mainStyleWidth = (this.rightCollapsed && this.leftCollapsed) ? 'calc(100% - 60px)' :
            (this.rightCollapsed ? 'calc(100% - 30px - ' + this.leftStyleWidth + ')' :
                (this.leftCollapsed ? 'calc(100% - 30px - ' + this.rightStyleWidth + ')' : this.mainWidth + '%'));

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
        this.stopMouseMoveListener = this.renderer.listenGlobal('document', 'mousemove', (event) => {
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
        this.stopMouseUpListener = this.renderer.listenGlobal('document', 'mouseup', (event) => {
            // On supprime les listeners sur le document
            this.stopMouseMoveListener();
            this.stopMouseUpListener();

            this.sendResizeEvent(event.view.window);
        });
    }

    private sendResizeEvent(window) {
        // On émet un évènement de fin de redimensionnement pour que tous les composants ayant besoin d'une
        // taille fixe (OpenLayers, D3...) puissent se redimensionner correctement simplement en écoutant l'evt
        // de redimensionnement de la window.
        setTimeout(() => {
            this.renderer.invokeElementMethod(window, 'dispatchEvent', [new Event('resize', {
                bubbles: true,
                cancelable: false
            })]);
        })
    }
}

export enum Side
{
    Left,
    Right
}