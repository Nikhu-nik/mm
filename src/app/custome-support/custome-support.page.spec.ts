import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomeSupportPage } from './custome-support.page';

describe('CustomeSupportPage', () => {
  let component: CustomeSupportPage;
  let fixture: ComponentFixture<CustomeSupportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomeSupportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomeSupportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
