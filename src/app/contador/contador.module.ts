import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContadorComponent } from './contador/contador.component';
@NgModule({
    declarations: [ //componentes que tendra el modulo
        ContadorComponent
    ],
    exports: [
        ContadorComponent
    ],
    imports: [ //solo modulos
        CommonModule
    ]
})
export class ContadorModule {}