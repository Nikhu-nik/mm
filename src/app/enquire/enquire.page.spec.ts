import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EnquirePage } from './enquire.page';

describe('EnquirePage', () => {
  let component: EnquirePage;
  let fixture: ComponentFixture<EnquirePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnquirePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EnquirePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
