import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { throwError } from 'rxjs';

@Component({
  selector: 'app-examenalex',
  templateUrl: './examenalex.component.html',
  styleUrls: ['./examenalex.component.css']
})
export class ExamenalexComponent {

  constructor(private http: HttpClient) {
  }

  llistarAssigInfo(){
    this.http.get<any>('http://localhost:3080/assiginfo').forEach((data) =>{
      console.log(data);
    })
  }

  signeZ(){
    this.http.post<any>('http://localhost:3080/modifalum',{}).subscribe();
  }
   afegirDepartament(){
    this.http.post('http://localhost:3080/ex4', {dept_codi: 69, dept_nom: "LEA", dept_ubicacio:"Vidreres", dept_telefon:123456789, dept_prof_dni:2100  }).subscribe((data)=>{
    console.log("Departamento creado!!")
    })
  }

}
