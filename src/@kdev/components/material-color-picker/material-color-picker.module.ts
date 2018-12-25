import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatIconModule, MatMenuModule, MatTooltipModule } from '@angular/material';

import { KdevPipesModule } from '@kdev/pipes/pipes.module';

import { KdevMaterialColorPickerComponent } from '@kdev/components/material-color-picker/material-color-picker.component';

@NgModule({
    declarations: [
        KdevMaterialColorPickerComponent
    ],
    imports: [
        CommonModule,

        FlexLayoutModule,

        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatTooltipModule,

        KdevPipesModule
    ],
    exports: [
        KdevMaterialColorPickerComponent
    ],
})
export class KdevMaterialColorPickerModule
{
}
