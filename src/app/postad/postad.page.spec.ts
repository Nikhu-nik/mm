import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PostadPage } from './postad.page';

describe('PostadPage', () => {
  let component: PostadPage;
  let fixture: ComponentFixture<PostadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostadPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PostadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
