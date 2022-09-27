import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  valor1: number;
  valor2: number;
  resultado: number;
  conta: string;
  
  constructor(private alertController: AlertController) {}

  resultadoSoma(){
    return this.resultado = (1 * this.valor1) + (1 * this.valor2);
  }
  
  async mostrarSoma() {

    let msgShow = `<p><b> Valor 1: </b> ${this.valor1} </p>`;
    msgShow += `<p><b> Valor 2: </b> ${this.valor2} </p>`;
    msgShow += `<p><b> Resultado: </b> ${this.resultadoSoma()} </p>`;

    const soma = await this.alertController.create({
      header: 'Alert',
      message: msgShow,
      buttons: [
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
          return          },
        },
      ],
    });

    await soma.present();
  }



  resultadoSubtracao(){
    return this.resultado = this.valor1 - this.valor2
  }
  
  async mostrarSubtracao() {

    let msgShow = `<p><b> Valor 1: </b> ${this.valor1} </p>`;
    msgShow += `<p><b> Valor 2: </b> ${this.valor2} </p>`;
    msgShow += `<p><b> Resultado: </b> ${this.resultadoSubtracao()} </p>`;

    const subtracao = await this.alertController.create({
      header: 'Alert',
      message: msgShow,
      buttons: [
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
          return          },
        },
      ],
    });

    await subtracao.present();
  }



  resultadoMultiplicacao(){
    return this.resultado = this.valor1 * this.valor2
  }
  
  async mostrarMultiplicacao() {

    let msgShow = `<p><b> Valor 1: </b> ${this.valor1} </p>`;
    msgShow += `<p><b> Valor 2: </b> ${this.valor2} </p>`;
    msgShow += `<p><b> Resultado: </b> ${this.resultadoMultiplicacao()} </p>`;

    const multiplicacao = await this.alertController.create({
      header: 'Alert',
      message: msgShow,
      buttons: [
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            return
          },
        },
      ],
    });

    await multiplicacao.present();
  }



  resultadoDivisao(){
    return this.resultado = this.valor1 / this.valor2
  }
  
  async mostrarDivisao() {

    let msgShow = `<p><b> Valor 1: </b> ${this.valor1} </p>`;
    msgShow += `<p><b> Valor 2: </b> ${this.valor2} </p>`;
    msgShow += `<p><b> Resultado: </b> ${this.resultadoDivisao()} </p>`;

    const divisao = await this.alertController.create({
      header: 'Alert',
      message: msgShow,
      buttons: [
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            return
          },
        },
      ],
    });

    await divisao.present();
  }



  resultadoMaior(){
    return Math.max(this.valor1, this.valor2);
  }
  
  async mostrarMaior() {

    let msgShow = `<p><b> Valor 1: </b> ${this.valor1} </p>`;
    msgShow += `<p><b> Valor 2: </b> ${this.valor2} </p>`;
    msgShow += `<p><b> Resultado: </b> ${this.resultadoMaior()} </p>`;

    const maior = await this.alertController.create({
      header: 'Alert',
      message: msgShow,
      buttons: [
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
          return          },
        },
      ],
    });

    await maior.present();
  }



  resultadoMenor(){
    return Math.min(this.valor1, this.valor2);
  }
  
  async mostrarMenor() {

    let msgShow = `<p><b> Valor 1: </b> ${this.valor1} </p>`;
    msgShow += `<p><b> Valor 2: </b> ${this.valor2} </p>`;
    msgShow += `<p><b> Resultado: </b> ${this.resultadoMenor()} </p>`;

    const menor = await this.alertController.create({
      header: 'Alert',
      message: msgShow,
      buttons: [
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
          return          },
        },
      ],
    });

    await menor.present();
  }

}