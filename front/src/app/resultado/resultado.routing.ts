import { Routes, RouterModule } from '@angular/router';
import { ResultadoComponent } from './resultado.component';

const routes: Routes = [
  { path: '', component: ResultadoComponent},
];

export const ResultadoRoutes = RouterModule.forChild(routes);
