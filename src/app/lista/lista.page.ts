import { Component, OnInit } from '@angular/core';
import { Credencial } from '../credencial';
import { FirebaseService } from '../firebase.service';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {
  public data: Array<Credencial> = [];
  public icon_type: string = 'eye-outline';
  public pwd_type: string = 'password';
  constructor(
    public local_storage: LocalStorageService,
    public firebase: FirebaseService
  ) { }

  ngOnInit() {
    this.carregar();
  }
  carregar() {
    this.data = this.local_storage.getJSON('credenciais');
  }
  exibir() {
    if (this.icon_type == 'eye-outline') {
      this.icon_type = 'eye-off-outline';
      this.pwd_type = 'text';
    } else {
      this.pwd_type = 'password';
      this.icon_type = 'eye-outline';

    }
  }

  upload() {
    this.firebase.upload();
  }
  download() {
    this.firebase.download()
      .subscribe(
        (data: any) => {
          // if (this.local_storage.get('credenciais')!= data){ 
          //   alert('Seus dados estao desatualisados')
          // }
          this.local_storage.set('credenciais', data);
          this.carregar();
        }
      );
  }
}
