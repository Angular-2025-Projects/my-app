import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemOuputComponent } from './item-ouput/item-ouput.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HelloWorldComponent,ItemDetailComponent, ItemOuputComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'My App';
  itemImageUrl="Belron1.PNG"
  currentItem = 'Television';
  items = ['item1', 'item2', 'item3', 'item4'];

  actionName='Label Button';

  onSale = true;
  isActive=true;
  isVisible=true;

  bgColor='blue'
  width='300px'
  margin='10%'

  navClass='underline'
  navStyle = 'font-size: 1.2rem; color: cornflowerblue;';
  linkStyle = 'underline';
  activeLinkStyle = 'overline';

  addItem(newItem: string) {
    this.items.push(newItem);
  }

  deleteHero(){}
  onSave(event:any){}
  onSubmit(form:any){}
  deleteItem(item:any){}

  onInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    console.log(value);
  }

  onEnter(){}
  onShiftT(){}
}
