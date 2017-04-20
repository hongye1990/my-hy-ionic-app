import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';

/**
 * Generated class for the MemberList page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-member-list',
  templateUrl: 'member-list.html',
})
export class MemberList {
  members: Array<any>

  constructor(public navCtrl: NavController, public navParams: NavParams, public actionCtrl: ActionSheetController) {
    this.members = [
      { id: 1, name: "小明", age: "12", sex: "男", avatar: "assets/img/avatar.jpg", hoppy: "音乐" },
      { id: 12, name: "李梅", age: "21", sex: "女", avatar: "assets/img/avatar.jpg", hoppy: "美术" },
      { id: 21, name: "丽华", age: "13", sex: "女", avatar: "assets/img/avatar.jpg", hoppy: "游泳" },
      { id: 11, name: "小新", age: "22", sex: "男", avatar: "assets/img/avatar.jpg", hoppy: "游戏" },
      { id: 16, name: "小红", age: "16", sex: "女", avatar: "assets/img/avatar.jpg", hoppy: "音乐" },
      { id: 19, name: "小美", age: "32", sex: "女", avatar: "assets/img/avatar.jpg", hoppy: "唱歌" },

    ]
  }

  sortList(Type) {
    if (Type == 10) {
      this.members.sort(function (a, b) { return a.id - b.id });
    }
    else if (Type == 20) {
      this.members.sort(function (a, b) { return b.id - a.id });
    }
    else {
      this.members.sort(function (a, b) { return Math.round( Math.random()) });
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MemberList');
  }

}

