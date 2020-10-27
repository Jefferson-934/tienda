import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddcabaPage } from './addcaba.page';

describe('AddcabaPage', () => {
  let component: AddcabaPage;
  let fixture: ComponentFixture<AddcabaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcabaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddcabaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
