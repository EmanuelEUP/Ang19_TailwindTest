import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from '../../shared/nav/nav.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, NavComponent, FooterComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
})
export class MainLayoutComponent {}
