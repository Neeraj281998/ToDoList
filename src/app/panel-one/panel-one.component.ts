import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel-one',
  templateUrl: './panel-one.component.html',
  styleUrls: ['./panel-one.component.css']
})
export class PanelOneComponent  {

items:string[]=[]
enterData:string=""
normalValue=""
onAdd(){
  this.items.push(this.enterData)
  }
  onDelete(index:number){
    if(index>-1){
      this.items.splice(index,1)
    }
  }
  onClearAll(){
    this.items=[]
    this.enterData=""
  }
}
