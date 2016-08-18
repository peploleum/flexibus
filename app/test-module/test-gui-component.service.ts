import {Injectable} from "@angular/core";
@Injectable()
export class TestGuiComponentService {
    private _userContext =  new UserContextDto("fooUserName", ["foo", "bar"]);

    get userContext():UserContextDto {
        return this._userContext;
    }

    getUserContext(){
        return new Promise<UserContextDto>(resolve =>
            setTimeout(() => resolve(this.userContext), 2000) // 2 seconds
        );
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