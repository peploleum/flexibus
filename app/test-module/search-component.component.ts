import {Observable} from "rxjs/observable";
import {Input, Output, EventEmitter, Component, OnChanges} from "@angular/core";
import {FormControl} from "@angular/forms";

@Component({
    selector: 'custom-search',
    templateUrl: 'app/test-module/search-component.component.html'
})
export class SearchComponent implements OnChanges {

    @Input() results:Observable<any>;
    @Output() searchEvent:EventEmitter<any> = new EventEmitter();

    private searchBox:FormControl = new FormControl();

    constructor() {
        this.searchBox
            .valueChanges
            .debounceTime(200)
            .subscribe((event) => this.searchEvent.emit(event));
    }

    ngOnChanges() {
        console.log("SEARCH ON CHANGES");
    }
}