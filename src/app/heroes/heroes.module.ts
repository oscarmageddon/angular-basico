import { NgModule } from '@angular/core';
import { ListadoComponent } from './listado/listado.component';
import { HeroeComponent } from './heroe/heroe.component';
import { CommonModule } from '@angular/common';
@NgModule({
    declarations: [ //componentes que tendra el modulo
        HeroeComponent,
        ListadoComponent
    ],
    exports: [
        ListadoComponent
    ],
    imports: [ //solo modulos
        CommonModule
    ]
})
export class HeroesModule {}