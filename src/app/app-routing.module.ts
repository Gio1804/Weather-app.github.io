import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeteoComponent } from './meteo/meteo.component';

const routes: Routes = [
  {path:'', component:MeteoComponent, children:[
    {path:'',redirectTo:'meteo', pathMatch:'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
