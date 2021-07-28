import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdsListPage } from './ads-list.page';

describe('AdsListPage', () => {
  let component: AdsListPage;
  let fixture: ComponentFixture<AdsListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdsListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
