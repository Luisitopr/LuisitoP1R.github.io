import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills: Array<any> = [];

  constructor() {}

  ngOnInit(): void {
    let skill1 = {
      description: "Data Analysis"
    }

    let skill2 = {
      description: "Web Development"
    }

    let skill3 = {
      description: "Resilience"
    }

    let skill4 = {
      description: "Client Relations"
    }

    let skill5 = {
      description: "Communication"
    }

    let skill6 = {
      description: "Teamwork"
    }

    let skill7 = {
      description: "Creativity"
    }

    this.skills.push(skill1);
    this.skills.push(skill2);
    this.skills.push(skill3);
    this.skills.push(skill4);
    this.skills.push(skill5);
    this.skills.push(skill6);
    this.skills.push(skill7);
    console.log(this.skills);
}
}