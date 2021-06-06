import { Component, OnInit } from "@angular/core";

import { EmpresaService } from "../../services/empresa.service";
import { NgForm } from "@angular/forms";
import { Empresa } from "../../models/empresa";
import { Router } from '@angular/router';

@Component({
  selector: "app-empresa",
  templateUrl: "./empresa.component.html",
  styleUrls: ["./empresa.component.css"],
  providers: [EmpresaService],
})
export class EmpresaComponent implements OnInit {
  filterposttt = '';
  constructor(private empresaService: EmpresaService, private router: Router) {}

  ngOnInit() {
    this.getEmpresas();
  }

  addEmpresa(form?: NgForm) {
    if (form.value._id) {
      this.empresaService.putEmpresa(form.value).subscribe((res) => {
        this.resetForm(form);
        this.getEmpresas();
      });
    } else {
      this.empresaService.postEmpresa(form.value).subscribe((res) => {
        this.getEmpresas();
        this.resetForm(form);
      });
    }
  }

  getEmpresas() {
    this.empresaService.getEmpresas().then((res) => {
      this.empresaService.empresas = res;
    });
  }

  editEmpresa(empresa: Empresa) {
    this.empresaService.selectedEmpresa = empresa;
  }

  deleteEmpresa(_id: string, form: NgForm) {
    if (confirm("Are you sure you want to delete it?")) {
      this.empresaService.deleteEmpresa(_id).subscribe((res) => {
        this.getEmpresas();
        this.resetForm(form);
      });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.empresaService.selectedEmpresa = new Empresa();
    }
  }

  // Viene del botón que manda los parámetros
  // y esta función invoca a la ruta pasándole los valores
  irMapa(empresa: Empresa){
    // Para almacenar un objeto hay que pasarlo a json
    // En otro caso solo admite string
    localStorage.setItem("empresa", JSON.stringify(empresa))
    this.router.navigate(['/mapa']);
  }
    //this.router.navigate(['/mapa', empresa.longitude, empresa.latitude, empresa.office]);
}
