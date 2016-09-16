import {Injectable} from "@angular/core";
import {SearchResult} from "./search-result";
import {RESULTS} from "./mock-search-result";

@Injectable()
export class SearchService {


    constructor() {
    }

    getResults(): Promise<SearchResult[]> {
        return Promise.resolve(RESULTS);
}

}

