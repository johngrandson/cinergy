import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskboardRoutingModule } from './taskboard-routing.module';

import { TaskboardComponent } from './taskboard.component';

@NgModule({
    imports: [
        CommonModule,
        TaskboardRoutingModule
    ],
    declarations: [
        TaskboardComponent
    ]
})
export class TaskboardModule { }
