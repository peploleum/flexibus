import {Injectable} from "@angular/core";
import {MENUITEMS} from "./mock-menu";
import {MenuItem} from "./menu-item";

@Injectable()
export class MenuService {


    constructor() {
    }

    getResults(): Promise<MenuItem[]> {
        return Promise.resolve(MENUITEMS);
}

}

