import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Aluno } from '../aluno';
import { AlunosService } from '../alunos.service';


@Injectable()
export class AlunoDetalheResolver implements Resolve<Aluno> {


  constructor(private alunosService: AlunosService) {
  }

  resolve(
    route: ActivatedRouteSnapshot
    ): Observable<Aluno> | Promise<Aluno> | Aluno {

      console.log('AlunoDetalheResolver');

      let id = route.params['id'];

    return this.alunosService.getAluno(id);
  }

}