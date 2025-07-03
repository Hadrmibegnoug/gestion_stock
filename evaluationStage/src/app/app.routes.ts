import { Routes } from '@angular/router';
import { ProduitComponent } from './components/admin/produitComp/produit/produit.component';
import { ProduitFormComponent } from './components/admin/produitComp/produit-form/produit-form.component';
import { ProduitDetailsComponent } from './components/admin/produitComp/produit-details/produit-details.component';
import { ProduitUpdateComponent } from './components/admin/produitComp/produit-update/produit-update.component';
import { CategoryComponent } from './components/admin/categoryComp/category/category.component';
import { CategoryFormComponent } from './components/admin/categoryComp/category-form/category-form.component';
import { CategoryDetailsComponent } from './components/admin/categoryComp/category-details/category-details.component';
import { CategoryUpdateComponent } from './components/admin/categoryComp/category-update/category-update.component';
import { EtagereComponent } from './components/admin/etagereComp/etagere/etagere.component';
import { EtagereFormComponent } from './components/admin/etagereComp/etagere-form/etagere-form.component';
import { EtagereDetailsComponent } from './components/admin/etagereComp/etagere-details/etagere-details.component';
import { EtagereUpdateComponent } from './components/admin/etagereComp/etagere-update/etagere-update.component';
import { ProduitImportComponent } from './components/admin/produitComp/produit-import/produit-import.component';
import { LoginComponent } from './components/shared/login/login.component';
import { AdminTemplateComponent } from './components/admin/admin-template/admin-template.component';
import { authenticationGuard } from './guards/authentication.guard';
import { LogoutComponent } from './components/shared/logout/logout.component';
import { ProfileComponent } from './components/admin/profile/profile.component';
import { authorizationGuard } from './guards/authorization.guard';
import { NotAuthorizedComponent } from './components/shared/not-authorized/not-authorized.component';

export const routes: Routes = [

  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'admin', component: AdminTemplateComponent, canActivate: [authenticationGuard],children: [
      {path: 'home', component: ProduitComponent},
      {path: 'home/form', component: ProduitFormComponent, canActivate: [authorizationGuard], data: {roles: 'ADMIN'}},
      {path: 'home/import', component: ProduitImportComponent, canActivate: [authorizationGuard], data: {roles: 'ADMIN'}}, // Assuming this is the import form
      {path: 'produit/produitDetails/:id', component: ProduitDetailsComponent},
      {path: 'produit/:id', component: ProduitUpdateComponent, canActivate: [authorizationGuard], data: {roles: 'ADMIN'}},
      {path: 'category', component: CategoryComponent},
      {path: 'category/form', component: CategoryFormComponent, canActivate: [authorizationGuard], data: {roles: 'ADMIN'}},
      {path: 'category/categoryDetails/:id', component: CategoryDetailsComponent},
      {path: 'category/:id', component: CategoryUpdateComponent, canActivate: [authorizationGuard], data: {roles: 'ADMIN'}},
      {path: 'etagere', component: EtagereComponent},
      {path: 'etagere/form', component: EtagereFormComponent, canActivate: [authorizationGuard], data: {roles: 'ADMIN'}},
      {path: 'etagere/etagereDetails/:id', component: EtagereDetailsComponent},
      {path: 'etagere/:id', component: EtagereUpdateComponent, canActivate: [authorizationGuard], data: {roles: 'ADMIN'}},
      {path: 'logout', component: LogoutComponent},
      {path:'profile', component: ProfileComponent},
      {path: 'notAuthorized', component: NotAuthorizedComponent},
  ]}
];
