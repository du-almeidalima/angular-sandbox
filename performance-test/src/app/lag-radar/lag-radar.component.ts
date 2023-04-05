import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  NgZone,
  OnDestroy,
  ViewChild
} from '@angular/core';
import lagRadar from "./lag-radar";

@Component({
  selector: 'app-lag-radar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div #lagRadarTemplate></div>
  `,
  styles: [
    `#lagger {
      padding: 20px 10px;
    }

    #lag {
      width: 260px;
      vertical-align: text-bottom;
    }

    #val {
      display: inline-block;
      text-align: right;
      width: 3em;
    }

    #link {
      margin: 6em auto;
    }
    `
  ]
})
export class LagRadarComponent implements AfterViewInit, OnDestroy {
  lagRadarDestroy?: Function;

  @ViewChild('lagRadarTemplate')
  lagRadarTemplate!: ElementRef<HTMLDivElement>;

  constructor(private ngZonde: NgZone) {
  }
  ngAfterViewInit(): void {
    console.log(this.lagRadarTemplate.nativeElement)

    this.ngZonde.runOutsideAngular(() => {
      this.lagRadarDestroy = lagRadar({
        frames: 50,    // number of frames to draw, more = worse performance
        speed: 0.0017, // how fast the sweep moves (rads per ms)
        size: 300,     // outer frame px
        inset: 3,      // circle inset px
        parent: this.lagRadarTemplate.nativeElement, // DOM node to attach to
      });
    })
  }

  ngOnDestroy(): void {
    this.lagRadarDestroy && this.lagRadarDestroy();
  }
}
