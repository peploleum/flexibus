import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';
@Injectable()
export class TestGuiComponentService {
    private _userContext =  new UserContextDto("fooUserName", ["foo", "bar"]);

    private _userContextUrl = 'http://localhost:8080/jeecdi/rest';

    constructor(private http : Http){
    }

    getUserContextMock():Promise<UserContextDto>{
        return new Promise<UserContextDto>(resolve =>
            setTimeout(() => resolve(this._userContext), 2000) // 2 seconds
        );
    }

    getUserContext():Promise<UserContextDto>{
        function extracted() {
            let newVar = response => response.json() as UserContextDto;
            return newVar;
        }
        return this.http.get(this._userContextUrl).toPromise().then(extracted()).catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}

export class UserContextDto {
    private _userName:string;
    private _userRights:Array<String>;

    constructor(userName:string, userRights:string[]) {
        this._userName = userName;
        this._userRights = userRights;
    }

    get userName():string {
        return this._userName;
    }

    set userName(value:string) {
        this._userName = value;
    }

    get userRights():Array<String> {
        return this._userRights;
    }

    set userRights(value:Array<String>) {
        this._userRights = value;
    }
}