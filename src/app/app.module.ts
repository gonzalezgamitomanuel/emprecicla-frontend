import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { PrivateTasksComponent } from './components/private-tasks/private-tasks.component';
import { EmpresaComponent } from './components/empresa/empresa.component';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';

import { MapComponent } from './components/map/map.component';
import { ConsultasComponent } from './components/consultas/consultas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FiltroPipe } from './pipes/filtro.pipe';
import { MapagrupoComponent } from './components/mapagrupo/mapagrupo.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    TasksComponent,
    EmpresaComponent,
    PrivateTasksComponent,
    MapComponent,
    ConsultasComponent,
    FiltroPipe,
    MapagrupoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    {
      provide: APP_BASE_HREF,
      useValue: '/empresas'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
