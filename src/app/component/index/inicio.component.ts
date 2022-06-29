import { Component, Input, NgModule, OnInit } from '@angular/core';
import { Archivos } from 'src/app/models/archivos';
import { Carpetas } from 'src/app/models/carpetas';
import { ArchivosService } from 'src/app/services/archivos.service';
import { CarpetasService } from 'src/app/services/carpetas.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  carpetas?: Carpetas[];
  archivos?: Archivos[];

  idCarpeta: any = 0;

  archivo: Archivos = {
    data: '',
    id_categoria: '',
    id_usuario: '',
  };

  carpeta: Carpetas = {
    descripcion: '',
    nombre: '',
    id_supercategoria: '',
    id_usuario: '',
  };

  file: any = {};

  constructor(
    private carpetasService: CarpetasService,
    private archivosService: ArchivosService
  ) {}

  ngOnInit(): void {
    this.getAllCarpetas();
    this.getAllArchivos();
  }

  guardarFile(): void {
    var fileAux:any = document.getElementById("dataD");
    fileAux = fileAux.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(fileAux);
    reader.onload = () => {
      this.file = reader.result;
      console.log(reader.result);
    };
  }

  agregarArchivo(): void {
    const paquete = {
      data: this.file,
      id_categoria: this.idCarpeta,
      id_usuario: 1,
    };

    console.log(paquete);

    this.archivosService.create(paquete).subscribe((response) => {
      console.log(response);
    });
  }

  agregarCarpeta(): void {
    const paquete = {
      descripcion: 'jarcodeado',
      nombre: this.carpeta.nombre,
      id_supercategoria: '2',
      id_usuario: 1,
    };

    this.carpetasService.create(paquete).subscribe((response) => {
      console.log(response);
    });
  }

  // Get list
  getAllCarpetas(): void {
    this.carpetasService.list().subscribe(
      (carpetas: any) => {
        this.carpetas = carpetas;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  getAllArchivos(): void {
    this.archivosService.list().subscribe(
      (archivos: any) => {
        this.archivos = archivos;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  mostrarFicherosCarpeta(idCarpeta: any): void {
    this.idCarpeta = idCarpeta;
    console.log(this.idCarpeta);
  }
}
