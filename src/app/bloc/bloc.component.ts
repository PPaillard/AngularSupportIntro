import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bloc',
  templateUrl: './bloc.component.html',
  styleUrls: ['./bloc.component.css']
})
export class BlocComponent implements OnInit {

  title: string = "Bonjour"

  desserts: string[] = ["Tarte aux fraises", " Tiramisu", "Cake au Nutella" ]

  url:string = "http://localhost"

  constructor() {}

  ngOnInit(): void {
  }

  changeTitle(){
    this.title  = "Au revoir ! "
  }
}
