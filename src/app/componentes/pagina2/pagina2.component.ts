import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Servicio2Service } from 'src/app/service/servicio2.service';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.component.html',
  styleUrls: ['./pagina2.component.css']
})
export class Pagina2Component {
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    })
  // router: any;
    
    constructor(private session: Servicio2Service,private router: Router){}
    
    onSubmit(){
    this.session.login(this.loginForm);
    sessionStorage.setItem('Token', '123456789');
    this.router.navigate(['/Pagina1'])
    }
}



