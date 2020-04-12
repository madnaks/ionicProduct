import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddItemPage } from '../add-item/add-item.page';
import { NavigationExtras, Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  produits: Array<object> = [
    { titre: 'Shirt', description: 'Shirt noir', prix: 50 },
    { titre: 'Pantalon', description: 'Pantalon kaki', prix: 75 },
    { titre: 'Chaussure', description: 'Chaussure noire', prix: 100 }
  ];

  constructor(
    public modal: ModalController,
    private router: Router) { }

  async addItem() {
    const modal = await this.modal.create({
      component: AddItemPage
    });

    modal.onDidDismiss().then((item) => {
      this.produits.push(item.data);
    });

    return await modal.present();
  }

  viewDetails(produit) {
    let navigationExtras: NavigationExtras = { state: { item: produit } };
    this.router.navigateByUrl('item-details', navigationExtras);
  }

}
