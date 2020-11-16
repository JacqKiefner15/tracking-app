import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-expansion-panel',
  templateUrl: './team-expansion-panel.component.html',
  styleUrls: ['./team-expansion-panel.component.scss']
})
export class TeamExpansionPanelComponent implements OnInit {

  panelOpenState = false;
  constructor() { }

  ngOnInit(): void {
  }

}
