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

    constructor(ids:Array<String>) {
        this._ids = ids;
    }

    get ids():Array<String> {
        return this._ids;
    }

    set ids(value:Array<String>) {
        this._ids = value;
    }
}