import {
    Component,
    OnInit
} from '@angular/core';

@Component({
    ////moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
// 1 - inject component anywhere in page
// 2 - inter component communication
// 3 - flexbox containers for modules
// 4 - navbar / sidebar
// 5 - try AOT instead of JIT compilation http://angularjs.blogspot.fr/2016/08/angular-2-rc5-ngmodules-lazy-loading.html
// https://medium.freecodecamp.com/angular-2-versus-react-there-will-be-blood-66595faafd51

export class AppComponent implements OnInit {
    title = 'Flexibus';

    ngOnInit() {
    }

}
