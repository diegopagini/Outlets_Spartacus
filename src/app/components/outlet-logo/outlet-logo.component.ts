import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-outlet-logo',
  templateUrl: './outlet-logo.component.html',
  styleUrls: ['./outlet-logo.component.scss'],
})
export class OutletLogoComponent implements OnInit {
  ref: string = 'outlet: "cxOutletRef"';

  constructor() {}

  ngOnInit(): void {}
}
