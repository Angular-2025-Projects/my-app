import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemOuputComponent } from './item-ouput.component';

describe('ItemOuputComponent', () => {
  let component: ItemOuputComponent;
  let fixture: ComponentFixture<ItemOuputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemOuputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemOuputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
