import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  mensagem: string;
  valor1: number;
  valor2: number;
  resultado: '0';
  resultadoSoma= '';

  
  constructor(private alertController: AlertController) {}

  async mostrarSoma() {

    let msgShow = `<p><b> Valor 1: </b> ${this.valor1} </p>`;
    msgShow += `<p><b> Valor 2: </b> ${this.valor2} </p>`;
    msgShow += `<p><b> Resultado: </b> ${this.resultadoSoma} </p>`;

    const soma = await this.alertController.create({
      header: 'Alert',
      message: msgShow,
      buttons: [
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            alert(msgShow);
          },
        },
      ],
    });

    await soma.present();
  }
}