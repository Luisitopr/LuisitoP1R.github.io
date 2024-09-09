import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { HeaderComponent } from './header/header.component';
import { EducationComponent } from './education/education.component';
import { InterestsComponent } from './interests/interests.component';
import { SkillsComponent } from './skills/skills.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,WorkExperienceComponent,HeaderComponent,EducationComponent,InterestsComponent,SkillsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Mycv';
}
