import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeleteCardPage } from './delete-card.page';

describe('DeleteCardPage', () => {
  let component: DeleteCardPage;
  let fixture: ComponentFixture<DeleteCardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteCardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
