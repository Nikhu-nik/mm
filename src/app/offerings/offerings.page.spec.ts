import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OfferingsPage } from './offerings.page';

describe('OfferingsPage', () => {
  let component: OfferingsPage;
  let fixture: ComponentFixture<OfferingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferingsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OfferingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
