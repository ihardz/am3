import { PATHS, PathsInterface } from '@am3/shared';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs-layout',
  templateUrl: './tabs-layout.component.html',
  styleUrls: ['./tabs-layout.component.scss']
})
export class TabsLayoutComponent implements OnInit {

  public paths: PathsInterface = PATHS;

  constructor() { }

  ngOnInit() {
  }

}
