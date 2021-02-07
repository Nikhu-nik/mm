import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContactmodalPage } from './contactmodal.page';

describe('ContactmodalPage', () => {
  let component: ContactmodalPage;
  let fixture: ComponentFixture<ContactmodalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactmodalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContactmodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
