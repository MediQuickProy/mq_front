import { Routes, RouterModule } from '@angular/router';
import { HistorialComponent } from './historial.component';

const routes: Routes = [
  { path: '', component: HistorialComponent},
];

export const HistorialRoutes = RouterModule.forChild(routes);
