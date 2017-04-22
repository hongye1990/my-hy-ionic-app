import { Component } from '@angular/core';
import { NavController, NavParams,ViewController } from 'ionic-angular';
import {UserService} from "../../../providers/user"

@Component({
  selector: 'page-member-edit',
  templateUrl: 'member-edit.html',
})
export class MemberEdit {
  startTime:any
  object:any = {
    name:"",
    provincialCapital:"",
    capitalPhoto:"",
    area:"",
    like:"",
    landmark:"",
    feature:"",
    visited:""
  }
  currentMember:any
  constructor(public navCtrl: NavController, public navParams: NavParams,public userServ:UserService,public viewCtrl:ViewController) {
    this.startTime = new Date()
    this.currentMember = this.navParams.data.member
    if(this.currentMember){
      console.log(this.currentMember)
      this.object.name = this.currentMember.name
      this.object.provincialCapital = this.currentMember.provincialCapital
      this.object.capitalPhoto = this.currentMember.capitalPhoto 
      this.object.area = this.currentMember.area
      this.object.like = this.currentMember.like
      this.object.landmark = this.currentMember.landmark
      this.object.feature = this.currentMember.feature
      this.object.visited = this.currentMember.visited
    }
  }

save(){
  if(!this.object.name||!this.object.provincialCapital){
    console.log("您的信息不完整，请重新填写")
  }

  if(this.currentMember){
    this.userServ.updateClass("Province",this.currentMember.objectId,this.object).then(data=>{
      Object.keys(this.object).forEach(key=>{
        this.currentMember[key] = this.object[key]
      })
      this.viewCtrl.dismiss()
    }).catch(err=>{
    console.log(err)
  })
  }else{
  this.userServ.saveClass("Province",this.object).then(data=>{
    console.log(data)
    this.object.objectId = data.json().objectId
    this.object.createdAt = data.json().createAt
    this.viewCtrl.dismiss(this.object)
  }).catch(err=>{
    console.log(err)
  })
 }

}
returnToHistory(){
   this.viewCtrl.dismiss()
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad MemberEdit');
  }
ngOnDestroy(){
  console.log("您访问该页面的时间：",this.startTime)
}

}
