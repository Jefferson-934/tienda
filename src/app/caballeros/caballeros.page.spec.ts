import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CaballerosPage } from './caballeros.page';

describe('CaballerosPage', () => {
  let component: CaballerosPage;
  let fixture: ComponentFixture<CaballerosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaballerosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CaballerosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
