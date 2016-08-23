/**
 * Created by tbonavia on 18/08/2016.
 */
import {Component, AfterViewInit, Renderer, ComponentRef, ViewChildren, QueryList} from "@angular/core";
import {IGuiComponent, GuiComponent} from "./gui-component";
import {SimplePanelComponent} from "./simple-panel.component";
import {GuiContextService} from "./gui-context.service";

@Component({
    selector: 'gui-view',
    templateUrl: 'app/gui/gui-view.component.html',
    styleUrls: ['app/gui/gui-view.component.css'],
    providers: [GuiContextService],
})
export class GuiView implements AfterViewInit {
    @ViewChildren(SimplePanelComponent) panels:QueryList<SimplePanelComponent>;

    // A priori il faut garder ces variable - au moins le temps que le composant soit initialisé, pour pouvoir
    // instancier ensuite correctement les composants eux-même.
    private mainComponent:IGuiComponent;
    private leftComponents:Array<IGuiComponent> = new Array();
    private rightComponents:Array<IGuiComponent> = new Array();

    private mainComponentRef:ComponentRef<GuiComponent>;
    private leftComponentsRefs:Array<ComponentRef<GuiComponent>> = new Array();
    private rightComponentsRefs:Array<ComponentRef<GuiComponent>> = new Array();

    left:number = 20;
    main:number = 60;
    right:number = 20;

    leftSize:string = this.left + '%';
    mainSize:string = this.main + '%';
    rightSize:string = this.right + '%';

    private stopMouseMoveListener:Function;
    private stopMouseUpListener:Function;
    private resizeSide:Side;
    
    private sides = Side;

    constructor(private renderer:Renderer) {

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

            this.leftSize = this.left + "%";
            this.mainSize = this.main + '%';
            this.rightSize = this.right + '%';
        });
        this.stopMouseUpListener = this.renderer.listenGlobal('document', 'mouseup', (event) => {
            // On supprime les listeners sur le document
            this.stopMouseMoveListener();
            this.stopMouseUpListener();
            this.resizeSide = null;
        });
    }

    ngAfterViewInit() {

    }

    setMain(component:IGuiComponent) {
        this.mainComponent = component;
    }

    addLeft(component:IGuiComponent) {
        this.leftComponents.push(component);
    }

    addRight(component:IGuiComponent) {
        this.rightComponents.push(component);
    }
}

enum Side
{
    Left,
    Right
}