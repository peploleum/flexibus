/**
 * Created by tbonavia on 17/08/2016.
 */
import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'simple-panel',
    templateUrl: 'app/panels/simpel-panel.html'
})
export class SimplePanelComponent implements OnInit{
    @Input()
    titre: string;
    @Input()
    type: PanelType = 'normal';

    displayContent = true;


    constructor(){

    }

    ngOnInit(){

    }
}

type PanelType = "normal" | "warning" | "error";