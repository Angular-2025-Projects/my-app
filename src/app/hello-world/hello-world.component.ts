import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  standalone: true,
  imports: [],
  //templateUrl: './hello-world.component.html',
  template: '<h1> Hello World </h1>',
  //styleUrl:'./hello-world.component.css',
  styles: ['h1 { font-weight: normal; }']
})
export class HelloWorldComponent {

}
