import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LangpopPage } from './langpop.page';

describe('LangpopPage', () => {
  let component: LangpopPage;
  let fixture: ComponentFixture<LangpopPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LangpopPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LangpopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
