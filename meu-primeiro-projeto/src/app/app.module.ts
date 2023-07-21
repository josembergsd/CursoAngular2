import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TituloComponent } from './titulo/titulo.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DiretivasEstruturaisComponent } from './diretivas-estruturais/diretivas-estruturais.component';
import { DiretivasAtributosComponent } from './diretivas-atributos/diretivas-atributos.component';
import { SharedModule } from "./shared/shared.module";
import { FormsComponent } from './forms/forms.component';

@NgModule({
    declarations: [
        AppComponent,
        TituloComponent,
        DataBindingComponent,
        DiretivasEstruturaisComponent,
        DiretivasAtributosComponent,
        FormsComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        SharedModule
    ]
})
export class AppModule { }
