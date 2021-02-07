import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SlidespagePage } from './slidespage.page';

describe('SlidespagePage', () => {
  let component: SlidespagePage;
  let fixture: ComponentFixture<SlidespagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidespagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SlidespagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
