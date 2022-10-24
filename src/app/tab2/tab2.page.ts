import { IMemoria } from './../models/IMemoria.model';
import { Component } from '@angular/core';
import { evaluate } from 'mathjs';
import { AlertController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { MemoriaModalPage } from '../utils/memoria-modal/memoria-modal.page';



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
  
  
  

  constructor(private alertController: AlertController,
              private modalCtrl: ModalController) {}

              async openModal() {
                const modal = await this.modalCtrl.create({
                  component: MemoriaModalPage,
                  componentProps: {
                    memoria: this.memoria,
                  }
                });
                modal.present(); }

  

  async presentAlert(titulo: string, mensagem: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensagem,
      buttons: ['OK'],
    });

    await alert.present(); }

  ngOnInit() {}

  
    limparMemoria(){
      this.memoria = [];
    }

    mostrarMemoria(){
      const memoria:IMemoria = this.memoria[this.memoria.length - 1]; // array é sempre ele - 1 pq a contagem de variante começa de 0,1,2 e a de casas começa de 1,2,3
      this.operacao = memoria.operacao;
      this.resultado = memoria.resultado.toString();
      console.log('Mostrou: ', this.memoria);
    }

    somaNaMemoria(){
      if (this.operacao != '')
      this.realizarOperacao(); // chama operação pro caso do resultado ser 0
      const memoria:IMemoria = this.memoria[this.memoria.length - 1];
      const novaMemoria: IMemoria = {
        operacao: `${memoria.resultado} + ${this.resultado}`, // resultado + "+" + resultado
        resultado: memoria.resultado + Number(this.resultado),
      };
      this.memoria.push(novaMemoria);
    }


    subtraiNaMemoria(){
      if (this.operacao != '') {
      this.realizarOperacao(); // chama operação pro caso do resultado ser 0
      const memoria: IMemoria = this.memoria[this.memoria.length - 1];
      const novaMemoria: IMemoria = {
        operacao: `${memoria.resultado} - ${this.resultado}`, // resultado + "-" + resultado
        resultado: memoria.resultado - Number(this.resultado),
      };
      this.memoria.push(novaMemoria);
    } }

  adicionarValor(valor: any){
    this.operacao += valor;
  }

  limparTudo(){
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
