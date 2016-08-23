import {
    Component,
    OnInit,
    DoCheck,
    AfterViewChecked,
    AfterViewInit,
    ChangeDetectorRef,
    Input,
    OnDestroy
} from "@angular/core";
import {GuiComponent} from "../gui/gui-component";
import {AnotherTestGuiComponentService, SearchResultDto} from "./another-test-gui-component.service";
import {Subject, Observable, Subscription} from "rxjs/Rx";
import {UserContextDto} from "./test-gui-component.service";
import {GuiContextService, GuiContext} from "./gui-context.service";
@Component({
    selector: 'another-test',
    templateUrl: 'app/test-module/another-test-gui-component.component.html',
    providers: [AnotherTestGuiComponentService]
})
export class AnotherTestGuiComponent extends GuiComponent implements OnInit, OnDestroy, DoCheck, AfterViewChecked, AfterViewInit {

    @Input() selectedContext:UserContextDto;
    searchResultList:SearchResultDto[] = [new SearchResultDto("a", "b")];
    resultList:Observable<SearchResultDto[]>;
    pouet:string;
    guiContextHistory:Array<GuiContext> = new Array<GuiContext>();
    private searchTerms = new Subject<string>();

    // listening to GuiContext broadcasting from other components
    subscription: Subscription;

    constructor(private atgcs:AnotherTestGuiComponentService, private cdr:ChangeDetectorRef, private gcs:GuiContextService) {
        super();
        this.subscription = this.gcs.guiContext$.subscribe(guiContext => {
            console.log("AnotherTestGuiComponent received GuiContext: " + guiContext);
            this.guiContextHistory.push(guiContext);
            this.cdr.markForCheck();
        });
    }

    ngOnInit() {
        this.pouet = "cool";
        this.atgcs.getResults().then(result => {
            this.searchResultList = this.searchResultList.concat(result);
            this.pouet = "recool";
            this.cdr.markForCheck();
        });
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
    }

    ngAfterViewInit() {
    }

    // Push a search term into the observable stream.
    search(term:string):void {
        this.searchTerms.next(term);
    }

    ngDoCheck() {
    }

    ngAfterViewChecked() {
    }

    onResultClicked(result:string) {
    }

    goToId(id:string){
        let guiContext = new GuiContext([id]);
        this.gcs.broadcastContext(guiContext);
    }

    ngOnDestroy(){
        console.log("destroying component");
        this.subscription.unsubscribe();
    }
}