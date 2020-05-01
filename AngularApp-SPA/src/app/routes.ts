import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './_guards/auth.guard';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: 'movies', component: MovieListComponent},
            { path: 'add', component: AddMovieComponent},
            { path: 'about', component: AboutComponent},
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full'}
];



