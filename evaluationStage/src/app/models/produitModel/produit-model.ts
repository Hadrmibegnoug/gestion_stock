import { CategorieModel } from "../categorieModel/categorie-model";
import { EtagereModel } from "../etagereModel/etagere-model";

export class ProduitModel {
  id: number = 0;
  code: string = '';
  libelle: string = '';
  prixUnitaire: number = 0;
  categorie?: CategorieModel;
  etagere?: EtagereModel;
}
