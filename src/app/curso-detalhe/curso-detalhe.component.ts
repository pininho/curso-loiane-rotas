import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.scss']
})
export class CursoDetalheComponent implements OnInit {


  id: string;

  constructor(private route: ActivatedRoute) {
    //gerou uns bugs na atualização
    //verificar se próxima aula corrige
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
  }

}
