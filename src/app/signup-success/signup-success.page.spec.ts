import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignupSuccessPage } from './signup-success.page';

describe('SignupSuccessPage', () => {
  let component: SignupSuccessPage;
  let fixture: ComponentFixture<SignupSuccessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupSuccessPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignupSuccessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
