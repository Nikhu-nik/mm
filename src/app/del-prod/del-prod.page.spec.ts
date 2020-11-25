import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DelProdPage } from './del-prod.page';

describe('DelProdPage', () => {
  let component: DelProdPage;
  let fixture: ComponentFixture<DelProdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelProdPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DelProdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
