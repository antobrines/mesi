import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManageAdPage } from './manage-ad.page';

describe('ManageAdPage', () => {
  let component: ManageAdPage;
  let fixture: ComponentFixture<ManageAdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageAdPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManageAdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
