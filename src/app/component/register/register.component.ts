import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/Usuarios/usuarios.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  usuario: Usuario = {
    nombre:'',
    contrasenya:'',
    rol:'USER'
  }

  constructor(private usuarioservice: UsuarioService) { }

  ngOnInit(): void {
  }

  agregarUser():void{
    const data ={
      contrasenya:this.usuario.contrasenya,
      nombre:this.usuario.nombre,
      rol:this.usuario.rol
    };
    this.usuarioservice.create(data).subscribe
    (
      response=> {
        console.log(response);
      }
    );
  }
}
