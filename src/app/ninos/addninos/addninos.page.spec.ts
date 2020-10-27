import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddninosPage } from './addninos.page';

describe('AddninosPage', () => {
  let component: AddninosPage;
  let fixture: ComponentFixture<AddninosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddninosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddninosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
