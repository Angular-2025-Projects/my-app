import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-ouput',
  standalone: true,
  imports: [],
  templateUrl: './item-ouput.component.html',
  styleUrl: './item-ouput.component.css'
})
export class ItemOuputComponent {

  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
}
