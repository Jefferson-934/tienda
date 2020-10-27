import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AccesoriosPage } from './accesorios.page';

describe('AccesoriosPage', () => {
  let component: AccesoriosPage;
  let fixture: ComponentFixture<AccesoriosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccesoriosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AccesoriosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
