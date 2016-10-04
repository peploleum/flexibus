import {Component, OnInit, DoCheck, AfterViewChecked, AfterViewInit} from "@angular/core";
import {GuiComponent} from "../gui/gui-component";
import {Observable, Observer} from "rxjs/Rx";
import {SearchComponentService} from "./search-component.service";
@Component({
    //moduleId: module.id,
    selector: 'another-test',
    templateUrl: 'result-display-component.component.html',
    providers: [SearchComponentService]
})
export class ResultDisplayComponent extends GuiComponent implements OnInit, DoCheck, AfterViewChecked, AfterViewInit {

    data:Observable<any>;
    dataObserver:Observer<any>;

    constructor(private scs:SearchComponentService) {
        super();
        this.data = new Observable((observer:any) => this.dataObserver = observer);
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
    }

    onSearch(event:any) {
        console.log(event);
        this.scs.search(event).subscribe((resultingArtist:any) => {
            this.dataObserver.next(resultingArtist);
        }, error => console.log('Could not load artists'));
    }

    ngDoCheck() {
    }

    ngAfterViewChecked() {
    }

    onResultClicked(result:string) {
        console.log('clicked on ' + result)
    }


}