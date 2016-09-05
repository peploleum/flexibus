import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

@Injectable()
export class ClassExplorerService  {

    private _classExplorerServiceUrl = 'http://localhost:8080/jeecdi/rest/entity';

    constructor(private http:Http) {

    }
}