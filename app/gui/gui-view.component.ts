/**
 * Created by tbonavia on 18/08/2016.
 */
import {
    Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, OnInit, AfterViewInit,
    Renderer, ComponentRef
} from "@angular/core";
import {IGuiComponent} from "./gui-component";

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
    private mainComponent:IGuiComponent;
    private leftComponents:Array<IGuiComponent> = new Array();
    private rightComponents:Array<IGuiComponent> = new Array();

    private mainComponentRef: ComponentRef<any>;
    private leftComponentsRefs: Array<ComponentRef<any>> = new Array();
    private rightComponentsRefs: Array<ComponentRef<any>> = new Array();

    constructor(private cfr:ComponentFactoryResolver, private renderer: Renderer) {
        console.log("constructing GuiView");
    }

    ngOnInit() {
        console.log("initializing GuiView");
        this.viewInitialized = true;
        this.initMainView();
        this.initLeftViews();
        this.initRightViews();
    }

    ngAfterViewInit() {
        if(this.mainComponentRef){
            console.log(this.mainComponentRef.instance);
            this.renderer.setElementStyle(this.mainComponentRef.location.nativeElement, 'flex-grow', '1');
        }
        if(this.leftComponentsRefs.length > 0){
            for(var ref of this.leftComponentsRefs){
                this.renderer.setElementStyle(ref.location.nativeElement, 'flex-grow', '1');
            }
        }
        if(this.rightComponentsRefs.length > 0){
            for(var ref of this.rightComponentsRefs){
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

    initMainView() {
        if (this.mainComponent) {
            let componentFactory = this.cfr.resolveComponentFactory(this.mainComponent);
            this.mainComponentRef = this.mainAnchor.createComponent(componentFactory);
            //this.mainComponentRef.titre = titre;
        }
    }

    addLeft(component:IGuiComponent) {
        this.leftComponents.push(component);
        if (this.viewInitialized) {
            this.initLeftView(component);
        }
    }

    initLeftViews() {
        if (this.leftComponents.length > 0) {
            for (var comp of this.leftComponents)
                this.initLeftView(comp);
        }
    }

    initLeftView(component:IGuiComponent) {
        let componentFactory = this.cfr.resolveComponentFactory(component);
        this.leftComponentsRefs.push(this.leftAnchor.createComponent(componentFactory));
    }

    addRight(component:IGuiComponent) {
        this.rightComponents.push(component);
        if (this.viewInitialized) {
            this.initRightView(component);
        }
    }

    initRightViews() {
        if (this.rightComponents.length > 0) {
            for (var comp of this.rightComponents)
                this.initRightView(comp);
        }
    }

    initRightView(component:IGuiComponent) {
        let componentFactory = this.cfr.resolveComponentFactory(component);
        this.rightComponentsRefs.push(this.rightAnchor.createComponent(componentFactory));
    }
}