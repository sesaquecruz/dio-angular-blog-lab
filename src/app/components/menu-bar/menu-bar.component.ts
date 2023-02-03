import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent {
  home: string = '';
  docs: string = 'https://angular.io/docs';
  github: string = 'https://github.com/angular/angular';
}
