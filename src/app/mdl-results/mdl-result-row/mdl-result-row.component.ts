import {Component, Input, OnInit} from '@angular/core';
import {Result} from "../mdl-results.component";

@Component({
  selector: 'app-mdl-result-row',
  templateUrl: './mdl-result-row.component.html',
  styleUrls: ['./mdl-result-row.component.css']
})
export class MdlResultRowComponent implements OnInit {

  @Input()
  public result: Result;

  constructor() { }

  ngOnInit() {
  }

}
