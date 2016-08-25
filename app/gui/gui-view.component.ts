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

@Component({
    selector: 'gui-view',
    templateUrl: 'app/gui/gui-view.component.html',
    styleUrls: ['app/gui/gui-view.component.css'],
    providers: [GuiContextService],
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

    private left:number;
    private right:number;
    private main:number;

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
                // Display only current panel
                panels.map((panel) => {
                    panel.display(panel.id == event.panelAskingFullSizeId)
                });
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


    private processSizes() {
        this.left = this.leftCollapsed ? 1 : (this.leftComponentsDescriptors.length == 0 ? 0 : 20);
        this.right = this.rightCollapsed ? 1 : (this.rightComponentsDescriptors.length == 0 ? 0 : 20);
        this.main = 100 - this.left - this.right;

        this.sendResizeEvent(this.element.nativeElement.ownerDocument.defaultView || this.element.nativeElement.ownerDocument.parentWindow);
    }

    getDisplay(side:Side):string {
        switch (side) {
            case Side.Left:
                return this.left == 0 ? 'none' : 'flex';
            case Side.Right:
                return this.right == 0 ? 'none' : 'flex';
            default:
                throw new Error('Droite ou gauche uniquement... Le centre est mort !');
        }
    }

    getSize(size:number):string {
        return size + '%';
    }

    startResize(resizeSide:Side) {
        // On ajoute les listeners sur document et on dit de quel côté on travaille
        this.stopMouseMoveListener = this.renderer.listenGlobal('document', 'mousemove', (event) => {
            switch (resizeSide) {
                case Side.Left:
                    this.left = ((event.pageX / event.view.window.document.documentElement.clientWidth) * 100);
                    break;
                case Side.Right:
                    this.right = (((event.view.window.document.documentElement.clientWidth - event.pageX) / event.view.window.document.documentElement.clientWidth) * 100);
                    break;
                default:
                    break;
            }
            this.main = (100 - this.left - this.right);
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