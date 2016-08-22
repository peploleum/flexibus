import {Component, OnInit, DoCheck, AfterViewChecked, AfterViewInit} from "@angular/core";
import {GuiComponent} from "../gui/gui-component";
import {Observable, Observer} from "rxjs/Rx";
import {SearchComponent} from "./search-component.component";
import {SearchComponentService} from "./search-component.service";
@Component({
    selector: 'another-test',
    templateUrl: 'app/test-module/result-display-component.component.html',
    directives: [SearchComponent],
    providers: [SearchComponentService]
})
export class ResultDisplayComponent extends GuiComponent implements OnInit, DoCheck, AfterViewChecked, AfterViewInit {

    private data:Observable<any>;
    private dataObserver:Observer<any>;

    constructor(private scs:SearchComponentService) {
        super();
        this.data = new Observable(observer => this.dataObserver = observer);
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
    }

    onSearch(event) {
        console.log(event);
        this.scs.search(event).subscribe(resultingArtist => {
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