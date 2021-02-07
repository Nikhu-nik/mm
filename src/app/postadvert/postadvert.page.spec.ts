import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PostadvertPage } from './postadvert.page';

describe('PostadvertPage', () => {
  let component: PostadvertPage;
  let fixture: ComponentFixture<PostadvertPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostadvertPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PostadvertPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
