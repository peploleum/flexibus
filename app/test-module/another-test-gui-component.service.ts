import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {Observable} from "rxjs/observable";
@Injectable()
export class AnotherTestGuiComponentService {

    private _searchUrl = 'http://localhost:8080/jeecdi/rest/search';

    constructor(private http:Http) {
    }

    getResults():Promise<SearchResultDto[]> {
        return this.http.get(this._searchUrl)
            .toPromise()
            .then(response => response.json() as SearchResultDto[])
            .catch(this.handleError);
    }

    search(item:string):Observable<SearchResultDto[]> {
        let finalUrl = this._searchUrl + '/substring/' + item;
        console.log("searching @ " + finalUrl);
        return this.http.get(finalUrl).map((r:Response) => r.json() as SearchResultDto[]);
    }

    private handleError(error:any):Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}

export class SearchResultDto {
    _id:string;
    _value:string;

    constructor(id:string, value:string) {
        this._id = id;
        this._value = value;
    }

    get id():string {
        return this._id;
    }

    set id(value:string) {
        this._id = value;
    }

    get value():string {
        return this._value;
    }

    set value(value:string) {
        this._value = value;
    }
}
