import { IMemoria } from './../models/IMemoria.model';
import { Component } from '@angular/core';
import { evaluate } from 'mathjs';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  operacao = '';
  resultado = '0';
  numero = false;
  caracter = true;
  caracters = ['.', '/', '*', '+', '-'];

  memoria: IMemoria[] = [];
  
  
  

  constructor(private alertController: AlertController) {}

  async presentAlert(titulo: string, mensagem: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensagem,
      buttons: ['OK'],
    });

    await alert.present(); }

  ngOnInit() {}

  

  adicionarValor(valor: any){
    this.operacao += valor;
  }

  limparMemoria(){
    this.operacao = '';
    this.resultado = '';
  }

  limparOperacao(){
    this.operacao = '';
  }

  inverterValor(){
    // Alterna o número entre positivo e negativo
  }

  apagarCaracter(){
    if(this.operacao.length > 0) {
    this.operacao = this.operacao.substring(0, this.operacao.length - 1) }
   }

   adicionarMemoria() {
    if (this.operacao != '' && this.resultado != '') {
        const memoria: IMemoria = {
            operacao: this.operacao,
            resultado: Number(this.resultado),};
            this.memoria.push(memoria);
        } else if (this.operacao != '' && this.resultado == '') {
          this.realizarOperacao();
          const memoria: IMemoria = {
            operacao: this.operacao,
            resultado: Number(this.resultado),};
            this.memoria.push(memoria);

        } else {
            this.presentAlert('Aviso!', 'Nenhum valor para adicionar...');
            
        }
        console.log(this.memoria);
        
}

    realizarOperacao() {
      try {
        this.resultado = evaluate(this.operacao);
      } catch (err) {
        this.resultado = 'Inválido!';
      }
    }

    
   
}
