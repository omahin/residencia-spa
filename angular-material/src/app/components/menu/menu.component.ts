import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menuItems = [
    {name: "Inputs", url: "/"},
    {name: "Navigation", url: "/navigation"},
    {name: "Forms", url: "/forms"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
