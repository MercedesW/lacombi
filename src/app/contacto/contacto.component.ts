import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {
name: string;
  email: string;
  message: string;
  constructor() { }

  ngOnInit() {
  }
processForm() {
    console.log("Enviamos el formulario!");
    console.log(this.name);
    console.log(this.email);
    console.log(this.message);
}
}