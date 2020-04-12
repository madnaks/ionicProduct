import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.page.html',
  styleUrls: ['./add-item.page.scss'],
})
export class AddItemPage implements OnInit {
  public title: string;
  public description: string;
  public prix: string;
  constructor(public modal: ModalController) { }
  ngOnInit() {
  }
  saveItem() {
    const newItem = {
      titre: this.title,
      description: this.description,
      prix: this.prix
    };
    this.modal.dismiss(newItem);
  }

  close() {
    this.modal.dismiss();
  }

}
