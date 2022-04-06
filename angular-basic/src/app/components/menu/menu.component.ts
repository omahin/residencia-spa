import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menuItems = [
    {name: "Inicio", url: "/"},
    {name: "SimpleComponents", url: "/componente1"},
    {name: "ComplexComponents", url: "/componente2"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
