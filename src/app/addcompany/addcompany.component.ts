import { Component, OnInit, ViewChild } from '@angular/core';
 

@Component({
  selector: 'app-addcompany',
  templateUrl: './addcompany.component.html',
  styleUrls: ['./addcompany.component.css']
})


export class AddcompanyComponent implements OnInit {
  
  

  ngOnInit(): void {
  
  }
  submit(form){
    var firstName = form.firstName;
    console.log(firstName);
  
    var lastName = form.lastName;
    console.log(lastName);
  
    var comment = form.comment;
    console.log(comment);
  }
}
