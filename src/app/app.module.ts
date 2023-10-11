import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTreeModule } from '@angular/material/tree';
import { MatTabsModule } from '@angular/material/tabs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { AlarmsComponent } from './pages/alarms/alarms.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { CardholdersComponent } from './pages/cardholders/cardholders.component';
import { ConfigComponent } from './pages/general/config.component';
import { PanelComponent } from './pages/panel/panel.component';
import { PortalsComponent } from './pages/portals/portals.component';
import { StateComponent } from './pages/state/state.component';
import { AccessGroupsComponent } from './pages/access-groups/access-groups.component';
import { CanvasComponent } from './components/canvas/canvas.component';
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AlarmsComponent,
    DialogComponent,
    DataTableComponent,
    CardholdersComponent,
    ConfigComponent,
    PanelComponent,
    PortalsComponent,
    StateComponent,
    AccessGroupsComponent,
    CanvasComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTreeModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
