import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Empresa } from "../models/empresa";

@Injectable({
  providedIn: "root",
})
export class EmpresaService {
  selectedEmpresa: Empresa;
  empresas: Empresa[];
  readonly URL_API = "https://emprecicla-backend.herokuapp.com/api/empr";

  constructor(private http: HttpClient) {
    console.log("construyo")
    this.selectedEmpresa = new Empresa();
  }

  postEmpresa(empresa: Empresa) {
    return this.http.post(this.URL_API, empresa);
  }

  getEmpresas() {
    const v = this.http.get<Empresa[]>(this.URL_API);
    console.log(v)
    return v
  }

  getEmpresasFilter(pais: string) {
    return this.http.get<Empresa[]>(this.URL_API + `/filter/${pais}`);
  }

  putEmpresa(empresa: Empresa) {
    return this.http.put(this.URL_API + `/${empresa._id}`, empresa);
  }

  deleteEmpresa(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
