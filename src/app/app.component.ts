import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './componants/home/home.component';
import { HeaderComponent } from './componants/header/header.component';
import { MenuComponent } from './componants/menu/menu.component';
import { AboutComponent } from './componants/about/about.component';
import * as $ from 'jquery';
import { ContactComponent } from './componants/contact/contact.component';
import { GalleryComponent } from './componants/gallery/gallery.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomeComponent,HeaderComponent,MenuComponent,AboutComponent,GalleryComponent,ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tabliah';
}
