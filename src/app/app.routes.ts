import { Routes } from '@angular/router';
import { HomeComponent } from './componants/home/home.component';
import { MenuComponent } from './componants/menu/menu.component';
import { AboutComponent } from './componants/about/about.component';
import { ContactComponent } from './componants/contact/contact.component';
import { LoginComponent } from './componants/login/login.component';
import { RegisterComponent } from './componants/register/register.component';
import { ForgetComponent } from './componants/forget/forget.component';
import { TermsComponent } from './componants/terms/terms.component';
import { GalleryComponent } from './componants/gallery/gallery.component';
import { CartComponent } from './componants/cart/cart.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"home",component:HomeComponent},
    {path:"menu",component:MenuComponent},
    {path:"about",component:AboutComponent},
    {path:"gallery",component:GalleryComponent},
    {path:"cart",component:CartComponent},

    {path:"contact",component:ContactComponent},
    {path:"login",component:LoginComponent},
    {path:"register",component:RegisterComponent},
    {path:"forget",component:ForgetComponent},
    {path:"terms",component:TermsComponent},

];

