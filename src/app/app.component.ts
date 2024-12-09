import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { initFlowbite } from 'flowbite';
import { BaseComponent } from './base/base.component';
import { FormComponent } from './form/form.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
     HeaderComponent,
     BaseComponent,
     FormComponent,
    FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'tarea-2-idwm';

  ngOnInit(): void {
    initFlowbite();
  }

}
