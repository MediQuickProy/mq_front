import { Routes, RouterModule } from '@angular/router';
import { ExamenComponent } from './examen.component';

const routes: Routes = [
  { path: '', component: ExamenComponent},
];

export const ExamenRoutes = RouterModule.forChild(routes);
