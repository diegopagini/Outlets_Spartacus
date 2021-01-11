import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-outlet-navigation',
  templateUrl: './outlet-navigation.component.html',
  styleUrls: ['./outlet-navigation.component.scss'],
})
export class OutletNavigationComponent implements OnInit {
  ref: string = 'outlet: "cxOutletRef, cxOutletPos="after" "';

  constructor() {}

  ngOnInit(): void {}
}
