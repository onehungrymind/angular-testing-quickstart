/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';

import { RouterLinkStubDirective } from './testing';
import { RouterOutletStubComponent } from './testing';

import { AppComponent } from './app.component';

describe('App: Ng2RestApp', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        RouterLinkStubDirective, RouterOutletStubComponent
      ],
    });
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Angular 2 REST Website');
  }));

  it('should render title in the header', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.mdl-layout-title').textContent).toContain('Angular 2 REST Website');
  }));
});
