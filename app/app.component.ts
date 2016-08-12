import {
    Component,
    OnInit
} from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css']
})
// 1 - inject component anywhere in page
// 2 - inter component communication
// 3 - flexbox containers for modules
// 4 - navbar / sidebar
// 5 - try AOT instead of JIT compilation http://angularjs.blogspot.fr/2016/08/angular-2-rc5-ngmodules-lazy-loading.html
export class AppComponent implements OnInit {
    title = 'Flexibus';

    ngOnInit() {
    }

}
