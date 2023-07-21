import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent implements OnInit{

  constructor(
      private activatedRoute: ActivatedRoute,
     // private router: Router
    ){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      res => console.log(res['id'], res['username'], res) //pega os parametros da rota ex: sobre/id/josemberg
    )
    //pega os parametros que vierem depois da ? ex: ?id=1&username=josemberg
    this.activatedRoute.queryParams.subscribe(
      res => console.log(res)
    )

   /*  setInterval(() => {
      //this.router.navigate(['404']);  //Não faz o reload da aplicação
      this.router.navigateByUrl('404'); //faz o reload da aplicação
    }, 5000) */
  }

}
