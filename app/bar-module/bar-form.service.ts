import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/toPromise";
@Injectable()
export class BarFormService {

    constructor(private http : Http){
    }

}