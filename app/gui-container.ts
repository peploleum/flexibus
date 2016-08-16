import {GuiPartContext} from './gui-part-context';
export abstract class GuiContainer {
    protected _leaf:boolean; //can have child components

    protected _multiple:boolean; //can open multiple times
    protected _minimized:boolean;
    protected _context:GuiPartContext;

    protected _refreshed:boolean //needs refresh
    protected _id:string;
    protected _title:any;

    constructor(id:string, title:any) {
        this._id = id;
        this._title = title;
    }

    get id():string {
        return this._id;
    }

    set id(value:string) {
        this._id = value;
    }

    get title():any {
        return this._title;
    }

    set title(value:any) {
        this._title = value;
    }

    get multiple():boolean {
        return this._multiple;
    }

    set multiple(value:boolean) {
        this._multiple = value;
    }

    get leaf():boolean {
        return this._leaf;
    }

    set leaf(value:boolean) {
        this._leaf = value;
    }

    get refreshed():boolean {
        return this._refreshed;
    }

    set refreshed(value:boolean) {
        this._refreshed = value;
    }

    get minimized():boolean {
        return this._minimized;
    }
    set minimized(value:boolean) {
        this._minimized = value;
    }

    get context():GuiPartContext {
        return this._context;
    }

    set context(value:GuiPartContext) {
        this._context = value;
    }
}