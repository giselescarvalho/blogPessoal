import { AlertasService } from './../service/alertas.service';
import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  user: User = new this.user()
  senha: string
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(){
  }
  conferirSenha(event: any){
    this.senha = event.target.value
  }

  cadastrar(){
    if(this.senha === this.user.senha){
      this.authService.cadastrar(this.user).subscribe((resp: User) => {
        this.user = resp
        this.router.navigate(['/login'])
        alert('Usuario cadastrado com sucesso')
      })
    }

    else{
      alert('Suas senhas não conferem')
    }
     
  }

}
