/**
 * Created by Vincent on 06/09/2016.
 */

import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";

import 'rxjs/add/operator/toPromise';
import {Photo} from "../model/Photo";


@Injectable()
export class PhotoService{

    private headers = new Headers({'Content-Type' : 'application/json'});
    private photosUrl = 'app/photos';

    constructor(private http:Http){}

    /**
     * Implement here the way to get Photo[] from database.
     * Rendre les photos dispos sur une url le temps de l'ouverture du diaporama.
     * @returns {Promise<Photo[]>}
     */
    getPhotos():Promise<Photo[]>{
        return this.http.get(this.photosUrl).toPromise().then(response => response.json().data as Photo[]).catch(this.handleError);
    }

    private handleError(error:any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}