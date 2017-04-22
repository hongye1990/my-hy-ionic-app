import {Component} from "@angular/core"
import {ViewController} from "ionic-angular"

@Component({
    template:`
    <ion-item (click)="choose('pro')">
    添加省份
    </ion-item>
    <ion-item (click)="choose('top')">
    排行
    </ion-item>
    `
})
export class MemberListPopover{
    constructor(public viewCtrl:ViewController){
    }
    choose(option=""){
        this.viewCtrl.dismiss(option)
    }
}