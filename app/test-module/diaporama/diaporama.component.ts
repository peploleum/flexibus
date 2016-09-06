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

    currentIdx:number;
    currentLeftPhoto:Photo;
    currentCenterPhoto:Photo;
    currentRightPhoto:Photo;

    constructor(private photoService:PhotoService){}

    ngOnInit():void{
        this.photoService.getPhotos().then(photos =>
        {
            this.allPhotos = photos;
            if(this.allPhotos.length > 0)
            {
                this.currentIdx = 0;
                this.currentCenterPhoto = this.allPhotos[0];
                if(this.allPhotos.length > 1)
                {
                    this.currentRightPhoto = this.allPhotos[1];
                }
            }
        });
    }

    onLeftClick(){
        if(this.currentIdx > 0) {
            this.currentIdx = this.currentIdx - 1;
            this.currentCenterPhoto = this.allPhotos[this.currentIdx];
            this.currentRightPhoto = this.allPhotos[this.currentIdx + 1];
            if(this.currentIdx > 0){
                this.currentLeftPhoto = this.allPhotos[this.currentIdx - 1];
            }
            else {
                this.currentLeftPhoto = null;
            }
        }
    }
    onRightClick(){
        if((this.allPhotos.length - 1) > this.currentIdx) {
            this.currentIdx = this.currentIdx + 1;
            this.currentCenterPhoto = this.allPhotos[this.currentIdx];
            this.currentLeftPhoto = this.allPhotos[this.currentIdx - 1];
            if((this.allPhotos.length - 1) > this.currentIdx){
                this.currentRightPhoto = this.allPhotos[this.currentIdx + 1];
            }
            else{
                this.currentRightPhoto = null;
            }
        }
    }
}

