import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SyslogsListComponent } from './syslogs-list.component';

describe('SyslogsListComponent', () => {
  let component: SyslogsListComponent;
  let fixture: ComponentFixture<SyslogsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyslogsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SyslogsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
