import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddaccePage } from './addacce.page';

describe('AddaccePage', () => {
  let component: AddaccePage;
  let fixture: ComponentFixture<AddaccePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddaccePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddaccePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
