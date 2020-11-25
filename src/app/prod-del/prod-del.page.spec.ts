import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProdDelPage } from './prod-del.page';

describe('ProdDelPage', () => {
  let component: ProdDelPage;
  let fixture: ComponentFixture<ProdDelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdDelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProdDelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
