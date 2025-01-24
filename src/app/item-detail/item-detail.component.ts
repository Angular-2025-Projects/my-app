import { Component , Input } from '@angular/core'; // import Input

@Component({
  selector: 'app-item-detail',
  standalone: true,
  imports: [],
  templateUrl: './item-detail.component.html',
  styleUrl: './item-detail.component.css'
})
export class ItemDetailComponent {
  @Input() item = ''; // decorate the property with @Input()
}
