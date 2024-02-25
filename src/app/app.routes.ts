import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PostsComponent } from './pages/posts/posts.component';
import { RecipesComponent } from './pages/recipes/recipes.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'posts',
    component: PostsComponent,
  },
  {
    path: 'recipes',
    component: RecipesComponent
  }
];
