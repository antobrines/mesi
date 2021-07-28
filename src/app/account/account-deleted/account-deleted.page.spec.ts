import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AccountDeletedPage } from './account-deleted.page';

describe('AccountDeletedPage', () => {
  let component: AccountDeletedPage;
  let fixture: ComponentFixture<AccountDeletedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountDeletedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AccountDeletedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
