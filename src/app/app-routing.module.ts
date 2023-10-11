import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlarmsComponent } from './pages/alarms/alarms.component';
import { CardholdersComponent } from './pages/cardholders/cardholders.component';
import { ConfigComponent } from './pages/general/config.component';
import { PanelComponent } from './pages/panel/panel.component';
import { PortalsComponent } from './pages/portals/portals.component';
import { StateComponent } from './pages/state/state.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'alarms', component: AlarmsComponent},
  {path: 'cardholders', component: CardholdersComponent},
  {path: 'config', component: ConfigComponent},
  {path: 'panel', component: PanelComponent},
  {path: 'portals', component: PortalsComponent},
  {path: 'state', component: StateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
