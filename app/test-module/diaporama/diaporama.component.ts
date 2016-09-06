/**
 * Created by Vincent on 01/09/2016.
 */
import {Component} from "@angular/core";
import {Photo} from "./model/Photo";
import {PhotoService} from "./service/photo.service";

@Component({
    selector: 'diaporama',
    templateUrl: 'app/test-module/diaporama/diaporama.component.html',
    styleUrls: ['app/test-module/diaporama/diaporama.component.css']
})
export class DiaporamaComponent{
    allPhotos:Photo[];

    currentLeftPhoto:Photo;
    currentCenterPhoto:Photo;
    currentRightPhoto:Photo;

    constructor(private photoService:PhotoService){}

    ngOnInit():void{
        this.photoService.getPhotos().then(photos => this.allPhotos = photos);
    }

    onLeftClick(){}
    onRightClick(){}
}

