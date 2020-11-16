import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppHeaderComponent } from './app-header/app-header.component';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { InfoContainerComponent } from './info-container/info-container.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { TeamExpansionPanelComponent } from './team-expansion-panel/team-expansion-panel.component';


@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    InfoContainerComponent,
    TeamExpansionPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    RouterModule,
    MatCardModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
