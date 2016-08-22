import {FORM_DIRECTIVES, Control} from "@angular/common";
import {Observable} from "rxjs/Rx";
import {Input, Output, EventEmitter, Component} from "@angular/core";

@Component({
    selector: 'custom-search',
    directives: [FORM_DIRECTIVES],
    templateUrl: 'app/test-module/search-component.component.html'
})
export class SearchComponent {

    @Input() results:Observable<any>;
    @Output() searchEvent:EventEmitter<any> = new EventEmitter();

    private searchBox:Control = new Control();

    constructor() {
        this.searchBox
            .valueChanges
            .debounceTime(200)
            .subscribe((event) => this.searchEvent.emit(event));
    }
}