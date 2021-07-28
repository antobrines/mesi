import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchCatPage } from './search-cat.page';

describe('SearchCatPage', () => {
  let component: SearchCatPage;
  let fixture: ComponentFixture<SearchCatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchCatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchCatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
