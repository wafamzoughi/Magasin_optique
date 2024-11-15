import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { GestionLunetteComponent } from './gestion-lunette/gestion-lunette.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AjoutLunetteComponent } from './ajout-lunette/ajout-lunette.component';
import { EditLunetteComponent } from './edit-lunette/edit-lunette.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GestionLunetteComponent,
    AjoutLunetteComponent,
    EditLunetteComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
