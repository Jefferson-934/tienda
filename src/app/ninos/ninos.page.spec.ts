import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NinosPage } from './ninos.page';

describe('NinosPage', () => {
  let component: NinosPage;
  let fixture: ComponentFixture<NinosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NinosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NinosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
