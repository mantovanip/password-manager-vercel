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

  constructor(
    public local_storage: LocalStorageService
  ) {
    this.carregar();
  }
  carregar() {
    

  }

  armazenar() {
    this.local_storage.append('credenciais', this.credencial);
    this.limpar();

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
