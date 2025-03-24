import { Routes, RouterModule } from '@angular/router';
import { MedicoComponent } from './medico.component';

const routes: Routes = [
  { path: '', component: MedicoComponent},
];

export const MedicoRoutes = RouterModule.forChild(routes);
