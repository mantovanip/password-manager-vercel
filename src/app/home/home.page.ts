import { Component } from '@angular/core';
import { Credencial } from '../credencial';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
public credencial:Credencial;

  constructor(
    public local_storage: LocalStorageService
  ) {
    this.carregar();
  }
  carregar() {
 
   
  }

  armazenar() {
this.local_storage.set('credenciais',this.credencial)
  }

  clear() {
    this.local_storage.clear();
    //this.local_storage.del('login');
  }
}
