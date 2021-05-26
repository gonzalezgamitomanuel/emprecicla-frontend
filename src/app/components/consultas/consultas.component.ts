import { Component, OnInit } from '@angular/core';

import { EmpresaService } from "../../services/empresa.service";
import { NgForm } from "@angular/forms";
import { Empresa } from "../../models/empresa";
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css'],
  providers: [EmpresaService],
})
export class ConsultasComponent implements OnInit {

 filterpost = '';

  paiss: Array<String> = ["España", "Grecia", "Bulgaria"];
  select: string = "España";

  constructor(private empresaService: EmpresaService, private router: Router) { }

  ngOnInit() {
    this.getEmpresas();
  }

  // getEmpresas() {
  //   this.empresaService.getEmpresas().subscribe((res) => {
  //     this.empresaService.empresas = res;
  //     console.log(this.empresaService.empresas)
  //   });
  // }

  getEmpresas() {
    this.empresaService.getEmpresasFilter(this.select).subscribe((res) => {
          this.empresaService.empresas = res;
    });
  }

  irMapa(empresa: Empresa){
    // Para almacenar un objeto hay que pasarlo a json
    // En otro caso solo admite string
    localStorage.setItem("empresa", JSON.stringify(empresa))
    this.router.navigate(['/mapa']);
  }

  irMapaGrupo(){
    // Para almacenar un objeto o array (que es objeto) hay que pasarlo a json
    localStorage.setItem("empresasfilter", JSON.stringify(this.empresaService.empresas))
    this.router.navigate(['/mapagrupo']);
  }

  onSubmit() {
    this.getEmpresas();
  }

}
