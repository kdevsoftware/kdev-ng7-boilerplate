import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';

import { KdevDirectivesModule } from '@kdev/directives/directives';
import { KdevPipesModule } from '@kdev/pipes/pipes.module';

@NgModule({
    imports  : [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        FlexLayoutModule,

        KdevDirectivesModule,
        KdevPipesModule
    ],
    exports  : [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        FlexLayoutModule,

        KdevDirectivesModule,
        KdevPipesModule
    ]
})
export class KdevSharedModule
{
}
