import { Routes, RouterModule } from '@angular/router';
import { PacienteComponent } from './paciente.component';

const routes: Routes = [
  { path: '', component: PacienteComponent},
];

export const PacienteRoutes = RouterModule.forChild(routes);
