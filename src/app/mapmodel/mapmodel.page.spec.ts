import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MapmodelPage } from './mapmodel.page';

describe('MapmodelPage', () => {
  let component: MapmodelPage;
  let fixture: ComponentFixture<MapmodelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapmodelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MapmodelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
