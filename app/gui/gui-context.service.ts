import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Rx";
@Injectable()
export class GuiContextService {

    //Observable GuiContext source
    private guiContextSource = new Subject<GuiContext>();

    //Observable GuiContext streams
    guiContext$ = this.guiContextSource.asObservable();

    broadcastContext(guiContext:GuiContext){
        this.guiContextSource.next(guiContext);
    }
}

export class GuiContext {
    private _ids:Array<String>;
    private _freeContent:string;
    private target:string;

    constructor(ids:Array<String>, freeContent:string, target:string) {
        this._ids = ids;
        this._freeContent = freeContent;
        this.target = target;
    }

    get ids():Array<String> {
        return this._ids;
    }

    set ids(value:Array<String>) {
        this._ids = value;
    }

    get freeContent():string {
        return this._freeContent;
    }

    set freeContent(value:string) {
        this._freeContent = value;
    }
}