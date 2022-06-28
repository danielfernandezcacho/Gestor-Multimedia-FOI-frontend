import { Component, Input, NgModule, OnInit } from '@angular/core';
import { Archivos } from 'src/app/models/archivos';
import { Carpetas } from 'src/app/models/carpetas';
import { ArchivosService } from 'src/app/services/archivos.service';
import { CarpetasService } from 'src/app/services/carpetas.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  carpetas?:Carpetas[];
  archivos?:Archivos[];

 idCarpeta:any = 0;

  constructor(private carpetasService: CarpetasService, private archivosService: ArchivosService) { }

  ngOnInit(): void {
    this.getAllCarpetas();
    this.getAllArchivos();

  }

  agregarArchivo():void{
    //this.archivosService.create();
  }

     // Get list
     getAllCarpetas(): void {
      this.carpetasService.list()
        .subscribe(
          (carpetas: any) => {
            this.carpetas = carpetas;
          },
          (error: any) => {
            console.log(error);
          });
    }

    getAllArchivos(): void {
      this.archivosService.list()
        .subscribe(
          (archivos: any) => {
            this.archivos = archivos;
          },
          (error: any) => {
            console.log(error);
          });
    }


       mostrarFicherosCarpeta(idCarpeta:any):void  {
      this.idCarpeta = idCarpeta;
      console.log(this.idCarpeta);
    }

}
