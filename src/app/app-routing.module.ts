import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './auth-guard';
import {HomeComponent} from './home/home.component';
import {TemplateCVComponent} from './template-cv/template-cv.component';
import {CreateCVComponent} from './create-cv/create-cv.component';


const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        canActivate: [AuthGuard],
        component: HomeComponent,
    },
    {
        path: 'createCV',
        component: CreateCVComponent,
    },
    // {
    //     path: 'login',
    //     component: LoginComponent,
    // },
    {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class AppRoutingModule {
}
