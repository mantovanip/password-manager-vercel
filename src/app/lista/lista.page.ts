import { Component, OnInit } from '@angular/core';
import { Credencial } from '../credencial';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {
public data:Array<Credencial> = [];
  constructor(
    public local_storage:LocalStorageService
  ) {}

  ngOnInit() {
    this.carregar();
  }
  carregar(){
    this.data = this.local_storage.getJSON('credenciais');
  }
  clear() {
    this.local_storage.clear();
  }
}
