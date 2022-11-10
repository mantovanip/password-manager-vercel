import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  public localStorage:any = window.localStorage;
  constructor() { }

  set(key:string,value:any){
    this.localStorage.setItem(key,value);
  }
  get(key:string){
    return this.localStorage.getItem(key);
  }
  
  clear(){
    this.localStorage.clear();
  }
  
  append(key:string,value:any){
    //retorna o valor que está no localstorage
    let old_value = this.get(key) == null ? '[]' : this.get(key);
    //transforma o valor de string para JSON
    let json_value = JSON.parse(old_value);
    //adicionar o novo valor no vetor
    json_value.push(value);
    //salva a nova informaçao no localstorage
    this.set(key,JSON.stringify(json_value));
  }

}
