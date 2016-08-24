/**
 * Created by tbonavia on 18/08/2016.
 */
import {Component, AfterViewInit, Renderer, ComponentRef, ViewChildren, QueryList} from "@angular/core";
import {IGuiComponent, GuiComponent} from "./gui-component";
import {SimplePanelComponent} from "./simple-panel.component";
import {GuiContextService} from "./gui-context.service";
import {GuiItemDescriptor} from "../gui-api/gui-item";

@Component({
    selector: 'gui-view',
    templateUrl: 'app/gui/gui-view.component.html',
    styleUrls: ['app/gui/gui-view.component.css'],
    providers: [GuiContextService],
})
export class GuiView implements AfterViewInit {
    @ViewChildren(SimplePanelComponent) panels:QueryList<SimplePanelComponent>;

    private mainComponentDescriptor:GuiItemDescriptor;
    private leftComponentsDescriptors:Array<GuiItemDescriptor> = new Array();
    private rightComponentsDescriptors:Array<GuiItemDescriptor> = new Array();

    private mainComponentRef:ComponentRef<GuiComponent>;
    private leftComponentsRefs:Array<ComponentRef<GuiComponent>> = new Array();
    private rightComponentsRefs:Array<ComponentRef<GuiComponent>> = new Array();

    private left:number;
    private right:number;
    private main:number;

    private stopMouseMoveListener:Function;
    private stopMouseUpListener:Function;
    private resizeSide:Side;

    private sides = Side;

    constructor(private renderer:Renderer) {
        this.processSizes();
    }

    private processSizes(){
        this.left = this.leftComponentsDescriptors.length == 0 ? 0 : 20;
        this.right = this.rightComponentsDescriptors.length == 0 ? 0 : 20;
        this.main = 100 - this.left - this.right;
    }

    getSize(size:number):string {
        return size + '%';
    }

    startResize(resizeSide:Side) {
        // On ajoute les listeners sur document et on dit de quel côté on travaille
        this.resizeSide = resizeSide;
        this.stopMouseMoveListener = this.renderer.listenGlobal('document', 'mousemove', (event) => {
            switch (this.resizeSide) {
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
            this.resizeSide = null;

            // On émet un évènement de fin de redimensionnement pour que tous les composants ayant besoin d'une
            // taille fixe (OpenLayers, D3...) puissent se redimensionner correctement simplement en écoutant l'evt
            // de redimensionnement de la window.
            this.renderer.invokeElementMethod(event.view.window, 'dispatchEvent', [new Event('resize', {
                bubbles: true,
                cancelable: false
            })]);
        });
    }

    ngAfterViewInit() {

    }

    setMain(mainDescriptor:GuiItemDescriptor) {
        this.mainComponentDescriptor = mainDescriptor;
    }

    addLeft(descriptor:GuiItemDescriptor) {
        this.leftComponentsDescriptors.push(descriptor);
        this.processSizes();
    }

    addRight(descriptor:GuiItemDescriptor) {
        this.rightComponentsDescriptors.push(descriptor);
        this.processSizes();
    }
}

enum Side
{
    Left,
    Right
}