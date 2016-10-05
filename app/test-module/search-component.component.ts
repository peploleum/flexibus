import {Observable} from "rxjs/observable";
import {Input, Output, EventEmitter, Component, OnChanges} from "@angular/core";
import {FormControl} from "@angular/forms";

@Component({
    moduleId:module.id,
    selector: 'custom-search',
    templateUrl: 'search-component.component.html'
})
export class SearchComponent implements OnChanges {

    @Input() results:Observable<any>;
    @Output() searchEvent:EventEmitter<any> = new EventEmitter();

    searchBox:FormControl = new FormControl();

    constructor() {
        this.searchBox
            .valueChanges
            .debounceTime(200)
            .subscribe((event) => this.searchEvent.emit(event));
    }

    ngOnChanges(changes:any) {
        console.log("SEARCH ON CHANGES");
    }
}