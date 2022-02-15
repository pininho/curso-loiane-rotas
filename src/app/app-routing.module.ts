import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';
import { CursosGuard } from './guards/cursoS.guard';
import { AlunosGuard } from './guards/alunos.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: 'cursos',
      loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule),
      canActivate: [AuthGuard],
      canActivateChild: [CursosGuard],
      canLoad: [AuthGuard]
  },
  { path: 'alunos',
      loadChildren: () => import('./alunos/alunos.module').then(m => m.AlunosModule),
      canActivate: [AuthGuard],
      canLoad: [AuthGuard]//,
      //canActivateChild: [AlunosGuard]
  },
  { path: 'login', component: LoginComponent
  },
  { path: 'home', component: HomeComponent,
    canActivate: [AuthGuard]
  },
  { path: '', redirectTo: '/home', pathMatch: 'full'
  },
  { path: '**', component: PaginaNaoEncontradaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
