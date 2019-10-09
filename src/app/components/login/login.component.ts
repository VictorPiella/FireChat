import { Component } from '@angular/core';
import { ChatService } from '../../providers/chat.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent {

  constructor(public _cs: ChatService) { }

  ingresar(proveedor) {
    console.log(proveedor);

    this._cs.login( proveedor );
  }


}
