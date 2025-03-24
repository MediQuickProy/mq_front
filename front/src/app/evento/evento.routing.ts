import { Routes, RouterModule } from '@angular/router';
import { EventoComponent } from './evento.component';

const routes: Routes = [
  { path: '', component: EventoComponent},
];

export const EventoRoutes = RouterModule.forChild(routes);
