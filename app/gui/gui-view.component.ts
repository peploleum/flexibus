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
    providers: [GuiContextService]
})
export class GuiView implements AfterViewInit {
    @ViewChildren(SimplePanelComponent) panels: QueryList<SimplePanelComponent>;

    // A priori il faut garder ces variable - au moins le temps que le composant soit initialisé, pour pouvoir
    // instancier ensuite correctement les composants eux-même.
    private mainComponent:IGuiComponent;
    private leftComponents:Array<IGuiComponent> = new Array();
    private rightComponents:Array<IGuiComponent> = new Array();

    private mainComponentRef:ComponentRef<GuiComponent>;
    private leftComponentsRefs:Array<ComponentRef<GuiComponent>> = new Array();
    private rightComponentsRefs:Array<ComponentRef<GuiComponent>> = new Array();

    constructor(private renderer:Renderer) {
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