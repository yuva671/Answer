import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  create(){
   let content= prompt('Enter the content');
   if (content != null) {
    alert('File created successfully')
  }

  }

  save(){
    alert('Successfully Saved');
  }

  delete(){
    let decision=prompt('Are you sure you want to delete this file?');
    if(decision==='yes'){
      alert('Deleted!!')
    }

  }

}
