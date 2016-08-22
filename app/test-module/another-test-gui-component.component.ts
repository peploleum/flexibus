import {Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, DoCheck, AfterViewChecked} from "@angular/core";
import {GuiComponent} from "../gui/gui-component";
import {AnotherTestGuiComponentService, SearchResultDto} from "./another-test-gui-component.service";
import {Subject, Observable} from "rxjs/Rx";
@Component({
    selector: 'another-test',
    templateUrl: 'app/test-module/another-test-gui-component.html',
    providers: [AnotherTestGuiComponentService],
    changeDetection: ChangeDetectionStrategy.Default
})
export class AnotherTestGuiComponent extends GuiComponent implements OnInit, DoCheck, AfterViewChecked {

    searchResultList:SearchResultDto[] = [];
    resultList:Observable<SearchResultDto[]>;
    private searchTerms = new Subject<string>();

    constructor(private atgcs:AnotherTestGuiComponentService, private cdr:ChangeDetectorRef) {
        super();
    }

    ngOnInit() {
        this.atgcs.getResults().then(result => {
            console.log(result);
            this.searchResultList = result;
            // this.cdr.markForCheck();
            this.resultList = this.searchTerms
                .debounceTime(300)        // wait for 300ms pause in events
                .distinctUntilChanged()   // ignore if next search term is same as previous
                .switchMap(term => term   // switch to new observable each time
                    // return the http search observable
                    ? this.atgcs.search(term)
                    // or the observable of empty items if no search term
                    : Observable.of<SearchResultDto[]>([]))
                .catch(error => {
                    // TODO: real error handling
                    console.log(error);
                    return Observable.of<SearchResultDto[]>([]);
                });
        });
    }

    // Push a search term into the observable stream.
    search(term: string): void {
        this.searchTerms.next(term);
    }

    ngDoCheck() {
    }

    ngAfterViewChecked() {
    }

    onResultClicked(result:string) {
        console.log('clicked on ' + result)
    }


}