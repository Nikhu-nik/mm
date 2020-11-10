import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddproPage } from './addpro.page';

describe('AddproPage', () => {
  let component: AddproPage;
  let fixture: ComponentFixture<AddproPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddproPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddproPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
