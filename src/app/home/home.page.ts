import { Component } from '@angular/core';
import { Credencial } from '../credencial';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public credencial = {} as Credencial;
  public data: Array<Credencial> = [];


  constructor(
    public local_storage: LocalStorageService
  ) {
    this.carregar();
  }
  carregar() {
    this.data = this.local_storage.getJSON('credenciais');


  }

  armazenar() {
    this.local_storage.append('credenciais', this.credencial);
    this.limpar();
    this.carregar();


  }

  clear() {
    this.local_storage.clear();
  }

  limpar() {
    this.credencial.login = '';
    this.credencial.password = '';
    this.credencial.site = '';
  }
}
