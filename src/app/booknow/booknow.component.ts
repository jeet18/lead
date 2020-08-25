import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-booknow',
  templateUrl: './booknow.component.html',
  styleUrls: ['./booknow.component.css']
})
export class BooknowComponent implements OnInit {
  
  quantity = new FormControl('', [
    Validators.required,
  ]);

  constructor() { }

  ngOnInit(): void {
  }


}
