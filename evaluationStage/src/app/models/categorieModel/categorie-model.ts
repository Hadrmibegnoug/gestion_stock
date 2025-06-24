export class CategorieModel {
  id: number;
  code: string;
  libelle: string;

  constructor(id: number = 0, code: string = '', libelle: string = '') {
    this.id = id;
    this.code = code;
    this.libelle = libelle;
  }
}
