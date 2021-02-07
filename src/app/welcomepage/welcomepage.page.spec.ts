import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WelcomepagePage } from './welcomepage.page';

describe('WelcomepagePage', () => {
  let component: WelcomepagePage;
  let fixture: ComponentFixture<WelcomepagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomepagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WelcomepagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
