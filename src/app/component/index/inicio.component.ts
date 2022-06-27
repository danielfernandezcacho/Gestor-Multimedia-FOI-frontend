import { Component, OnInit } from '@angular/core';
import { Carpetas } from 'src/app/models/carpetas';
import { CarpetasService } from 'src/app/services/carpetas.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  carpetas?:Carpetas[];

  constructor(private carpetasService: CarpetasService) { }

  ngOnInit(): void {
    this.getAllCarpetas();
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

}
