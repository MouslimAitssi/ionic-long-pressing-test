import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  isLongPressing = false;

  listItems: {name: string, isSelected: boolean}[] = [
   {name: 'item1', isSelected: false},
   {name: 'item2', isSelected: false},
   {name: 'item3', isSelected: false}
  ];
  constructor() {}


  selecting(itemToSelect) {
    if(!itemToSelect.isSelected) {
      this.isLongPressing = true;
      console.log(this.isLongPressing);
      if(this.isLongPressing) {
        console.log('pressing bro wtf');
        itemToSelect.isSelected = true;
        this.released();
      }
    }
  }

  unSelect(item) {
    if(item.isSelected) {
      item.isSelected = false;
    }
  }

  released() {
    this.isLongPressing = false;
    console.log(this.isLongPressing);
  }

}
