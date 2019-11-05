import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
    page: PoPageDefault = {
    title: 'Testing',
    actions: [
      {
        label: 'Salvar', action: () => { console.log(this.table.items); }
      }
    ]
  }

  table = {
    columns: <Array<any>>[
      { label: 'Nome', property: 'nome', width: '15%' },
      { label: 'Data', property: 'dataReferencia', width: '15%', type: 'date', format: 'dd/MM/yyyy' },
      { label: 'Telefone', property: 'telefone', width: '15%' },
      { label: 'Contato', property: 'contato', width: '20%' },
      { label: 'E-mail', property: 'email', width: '35%' }
    ],
    items: [
      {
        "nome": "Teste",
        "dataReferencia": "2019-10-09",
        "telefone": "1112345678",
        "contato": "Teste",
        "email": "teste@teste.com.br"
      },
    ],
    loading: false,
    height: 0
  }

  rowActions = {
    beforeSave: this.onBeforeSave.bind(this),
    afterSave: this.onAfterSave.bind(this),
    beforeRemove: this.onBeforeRemove.bind(this),
    afterRemove: this.onAfterRemove.bind(this),
    beforeInsert: this.onBeforeInsert.bind(this)
  }

    onBeforeSave(row: any, old: any) {
    console.log(row, old);

    // return row.occupation !== 'Engineer';
  }

  onAfterSave(row) {
    console.log('onAfterSave(new): ', row);
  }

  onBeforeRemove(row) {
    console.log('onBeforeRemove: ', row);
    console.log(this.table.items);
    
    return true;
  }

  onAfterRemove(row) {
    console.log('onAfterRemove: ', row);
  }

  onBeforeInsert(row) {
    console.log('onBeforeInsert: ', row);
    this.table.items.push(row)
    console.log(this.table.items);
    
    return true;
  }
 }
