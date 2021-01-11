import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-outlet-cart',
  templateUrl: './outlet-cart.component.html',
  styleUrls: ['./outlet-cart.component.scss'],
})
export class OutletCartComponent implements OnInit {
  ref: string = 'outlet: "cxOutletRef, cxOutletPos="before" "';

  constructor() {}

  ngOnInit(): void {}
}
