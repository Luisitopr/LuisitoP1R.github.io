import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.css'
})
export class WorkExperienceComponent {
  workExperience : Array<any> = [];
  ngOnInit(): void{
    let work1 = {
      fecha: "2022-2026",
      ubicacion: "Ixtac,Ver.",
      puesto: "alumno",
      empresa: "Universidad Veracruzana",
      logros: [
        {descrpcion: "Construccion de pagina web propia"},
        {descripcion: "Creacion de cv personal"}
      ]
    };
    let work2 = {
      fecha: "2020-2026",
      ubicacion: "Orizaba,Ver.",
      puesto: "CEO",
      empresa: "KUBEET",
      logros: [
        {descrpcion: "Construccion de un invernadero hidroponico"},
        {descripcion: "Creacion de cv profesional"}
      ]
    };
    this.workExperience.push(work1);
    this.workExperience.push(work2);
    console.log(this.workExperience);
}
}