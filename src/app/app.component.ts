import { InfoContainerComponent } from './info-container/info-container.component';
import { RouterModule } from '@angular/router';
import { AppHeaderComponent } from './app-header/app-header.component';
import { Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'practice-viz-app';
}
