import { Routes } from '@angular/router';
import { ShowComponent } from './components/show/show.component';
import { LandmarksComponent } from './components/landmarks/landmarks.component';

export const routes: Routes = [
    { path: '', component: LandmarksComponent},
    { path: 'show/:id', component: ShowComponent}
];
