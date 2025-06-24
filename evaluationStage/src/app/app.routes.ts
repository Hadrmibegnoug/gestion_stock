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

export const routes: Routes = [

  {path: 'home', component: ProduitComponent},
  {path: 'home/form', component: ProduitFormComponent},
  {path: 'home/import', component: ProduitImportComponent}, // Assuming this is the import form
  {path: 'produit/produitDetails/:id', component: ProduitDetailsComponent},
  {path: 'produit/:id', component: ProduitUpdateComponent},
  {path: 'category', component: CategoryComponent},
  {path: 'category/form', component: CategoryFormComponent},
  {path: 'category/categoryDetails/:id', component: CategoryDetailsComponent},
  {path: 'category/:id', component: CategoryUpdateComponent},
  {path: 'etagere', component: EtagereComponent},
  {path: 'etagere/form', component: EtagereFormComponent},
  {path: 'etagere/etagereDetails/:id', component: EtagereDetailsComponent},
  {path: 'etagere/:id', component: EtagereUpdateComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
];
