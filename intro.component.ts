import { Component } from '@angular/core';

@Component({
    selector: 'intro',
    templateUrl: './intro.component.html',
    styleUrls: ['./intro.component.css']
})
export class IntroComponent{
    
    permission = false;

    constructor(){
        setTimeout(()=>{
            this.permission = true;
        },4000);
    }
}