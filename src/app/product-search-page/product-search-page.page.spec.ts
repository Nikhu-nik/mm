import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProductSearchPagePage } from './product-search-page.page';

describe('ProductSearchPagePage', () => {
  let component: ProductSearchPagePage;
  let fixture: ComponentFixture<ProductSearchPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductSearchPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductSearchPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
