/* Pantallas que creamos */
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AbmComponent } from './pages/abm/abm.component';

/* Componentes que creamos */
import { MenuComponent } from './components/menu/menu.component';

/* Modulo principal */
import { AppComponent } from './app.component';

/* Modulos */
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './_guards/auth.guard';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgxSpinnerModule } from "ngx-spinner";
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AbmComponent,
    ProfileComponent,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    NgxSpinnerModule,
    AppRoutingModule,
    NgOptimizedImage,
    HttpClientModule,
    FormsModule,
    CommonModule,
  ],
})
export class AppModule {}
