import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {FlexibusEntityDescriptor} from "../core/flexibus-entity-descriptor";
import {Observable} from "rxjs/Rx";

@Injectable()
export class ClassExplorerService {

    private _classExplorerServiceUrl = 'http://localhost:8080/jeecdi/rest/entity';

    constructor(private http:Http) {

    }

    getRoot():Observable<FlexibusEntityDescriptor> {
        return this.http.get(this._classExplorerServiceUrl).map((r:Response) => r.json() as FlexibusEntityDescriptor).catch(this.handleError);
    }

    getRoot2():Observable<FlexibusEntityDescriptor> {
        return this.http.get(this._classExplorerServiceUrl).map((r:Response) => r.json() as FlexibusEntityDescriptor).catch(this.handleError);
    }

    private handleError (error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console 
        return Observable.throw(errMsg);
    }
}