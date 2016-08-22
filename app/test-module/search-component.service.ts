import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/toPromise";
import {Observable} from "rxjs/Rx";
@Injectable()
export class SearchComponentService {

    private _searchUrl = 'https://api.spotify.com/v1/search?q=';
    private _searchSuffix = '&type=artist';

    constructor(private http:Http) {
    }

    search(event):Observable<any> {
        let finalUrl = this._searchUrl +event + this._searchSuffix;
        console.log("searching @ " + finalUrl);
        return this.http.get(finalUrl).map((response) => {
                var artists = response.json();
                return artists.artists.items;
            })
    }
}