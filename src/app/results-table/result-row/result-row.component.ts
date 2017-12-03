import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Result} from "../results-table.component";

@Component({
  selector: 'app-result-row',
  templateUrl: './result-row.component.html',
  styleUrls: ['./result-row.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ResultRowComponent implements OnInit {

  @Input()
  public result: Result;

  constructor() { }

  ngOnInit() {
  }

}
