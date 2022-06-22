import { BreakpointObserver } from '@angular/cdk/layout';
import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';


@Component({
  selector: "app",
  templateUrl: "app.component.html",
  styleUrls: ['app.component.css']
})
export class AppComponent implements AfterViewInit, OnDestroy {
  @ViewChild(MatSidenav) sidenav!: MatSidenav;
  constructor (
    private observer: BreakpointObserver, private ref: ChangeDetectorRef) {
  }
  ngOnDestroy(): void {
  }
  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
    this.ref.detectChanges();
  }
}











