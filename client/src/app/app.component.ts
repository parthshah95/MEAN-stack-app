import { Component, NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms'
@NgModule({
  imports: [
      ReactiveFormsModule
  ]
})
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
}
