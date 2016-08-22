/**
 * Created by tbonavia on 18/08/2016.
 */
import {
    Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, OnInit, AfterViewInit,
    Renderer, ComponentRef, ComponentFactory
} from "@angular/core";
import {IGuiComponent, GuiComponent} from "./gui-component";
import {SimplePanelComponent} from "../panels/simple-panel.component";

@Component({
    selector: 'gui-view',
    templateUrl: 'app/gui/gui-view.component.html',
    styleUrls: ['app/gui/gui-view.component.css']
})
export class GuiView implements OnInit, AfterViewInit {
    @ViewChild('left', {read: ViewContainerRef}) leftAnchor:ViewContainerRef;
    @ViewChild('main', {read: ViewContainerRef}) mainAnchor:ViewContainerRef;
    @ViewChild('right', {read: ViewContainerRef}) rightAnchor:ViewContainerRef;

    private viewInitialized:boolean = false;

    // A priori il faut garder ces variable - au moins le temps que le composant soit initialisé, pour pouvoir
    // instancier ensuite correctement les composants eux-même.
    private mainComponent:IGuiComponent;
    private leftComponents:Array<IGuiComponent> = new Array();
    private rightComponents:Array<IGuiComponent> = new Array();

    private mainComponentRef:ComponentRef<GuiComponent>;
    private leftComponentsRefs:Array<ComponentRef<GuiComponent>> = new Array();
    private rightComponentsRefs:Array<ComponentRef<GuiComponent>> = new Array();

    constructor(private cfr:ComponentFactoryResolver, private renderer:Renderer) {
    }

    ngOnInit() {
        this.viewInitialized = true;
        this.initMainView();
        this.initLeftViews();
        this.initRightViews();
    }

    ngAfterViewInit() {
        if (this.mainComponentRef) {
            this.renderer.setElementStyle(this.mainComponentRef.location.nativeElement, 'flex-grow', '1');
        }
        if (this.leftComponentsRefs.length > 0) {
            for (var ref of this.leftComponentsRefs) {
                this.renderer.setElementStyle(ref.location.nativeElement, 'flex-grow', '1');
            }
        }
        if (this.rightComponentsRefs.length > 0) {
            for (var ref of this.rightComponentsRefs) {
                this.renderer.setElementStyle(ref.location.nativeElement, 'flex-grow', '1');
            }
        }
    }

    setMain(component:IGuiComponent) {
        this.mainComponent = component;
        if (this.viewInitialized) {
            this.initMainView();
        }
    }

    private createSimplePanel():ComponentFactory<SimplePanelComponent> {
        return this.cfr.resolveComponentFactory(SimplePanelComponent);
    }

    private initMainView() {
        if (this.mainComponent) {
            let panelFactory = this.createSimplePanel();
            let panelComponentRef = this.mainAnchor.createComponent(panelFactory);

            panelComponentRef.instance.setContent(this.mainComponent).then((res) => {
                this.mainComponentRef = res;
            });
        }
    }

    addLeft(component:IGuiComponent) {
        this.leftComponents.push(component);
        if (this.viewInitialized) {
            this.initLeftView(component);
        }
    }

    private initLeftViews() {
        if (this.leftComponents.length > 0) {
            for (var comp of this.leftComponents)
                this.initLeftView(comp);
        }
    }

    private initLeftView(component:IGuiComponent) {
        let panelFactory = this.createSimplePanel();
        let panelComponentRef = this.leftAnchor.createComponent(panelFactory);

        panelComponentRef.instance.setContent(component).then((res) => {
            this.leftComponentsRefs.push(res);
        });
    }

    addRight(component:IGuiComponent) {
        this.rightComponents.push(component);
        if (this.viewInitialized) {
            this.initRightView(component);
        }
    }

    private initRightViews() {
        if (this.rightComponents.length > 0) {
            for (var comp of this.rightComponents)
                this.initRightView(comp);
        }
    }

    private initRightView(component:IGuiComponent) {
        let panelFactory = this.createSimplePanel();
        let panelComponentRef = this.rightAnchor.createComponent(panelFactory);

        panelComponentRef.instance.setContent(component).then((res) => {
            this.rightComponentsRefs.push(res);
        });
    }
}