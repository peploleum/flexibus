/**
 * Created by tbonavia on 18/08/2016.
 */
import {Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, OnInit, AfterViewInit} from '@angular/core';
import {IGuiComponent} from "./gui-component";
import * as d3 from 'd3';
@Component({
    selector: 'gui-view',
    templateUrl: 'app/gui/gui-view.component.html'
})
export class GuiView implements OnInit {
    @ViewChild('left', {read: ViewContainerRef}) leftAnchor:ViewContainerRef;
    @ViewChild('main', {read: ViewContainerRef}) mainAnchor:ViewContainerRef;
    @ViewChild('right', {read: ViewContainerRef}) rightAnchor:ViewContainerRef;

    private viewInitialized:boolean = false;
    private mainComponent:IGuiComponent;
    private leftComponents:Array<IGuiComponent> = new Array();
    private rightComponents:Array<IGuiComponent> = new Array();

    constructor(private cfr:ComponentFactoryResolver) {
        console.log("constructing GuiView");
    }

    ngOnInit() {
        console.log("initializing GuiView");
        this.viewInitialized = true;
        this.initMainView();
        this.initLeftViews();
        this.initRightViews();
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
            this.mainAnchor.createComponent(componentFactory);

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
        this.leftAnchor.createComponent(componentFactory);
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
        this.rightAnchor.createComponent(componentFactory);
    }
}