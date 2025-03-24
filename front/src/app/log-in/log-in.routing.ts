import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './log-in.component';

const routes: Routes = [
  { path: '', component: LogInComponent},
];

export const LogInRoutes = RouterModule.forChild(routes);
