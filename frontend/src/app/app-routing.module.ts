import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionLunetteComponent } from './gestion-lunette/gestion-lunette.component';
import { AjoutLunetteComponent } from './ajout-lunette/ajout-lunette.component';
import { EditLunetteComponent } from './edit-lunette/edit-lunette.component';

const routes: Routes = [
  {path: 'liste', component: GestionLunetteComponent},
  {path: 'ajouter', component: AjoutLunetteComponent},
  {path: 'edit-lunette/:id', component: EditLunetteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
