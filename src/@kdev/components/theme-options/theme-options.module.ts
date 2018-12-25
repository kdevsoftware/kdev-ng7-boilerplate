import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
    MatButtonModule, MatCheckboxModule, MatDividerModule, MatFormFieldModule, MatIconModule, MatOptionModule, MatRadioModule, MatSelectModule, MatSlideToggleModule
} from '@angular/material';

import { KdevDirectivesModule } from '@kdev/directives/directives';
import { KdevMaterialColorPickerModule } from '@kdev/components/material-color-picker/material-color-picker.module';
import { KdevSidebarModule } from '@kdev/components/sidebar/sidebar.module';

import { KdevThemeOptionsComponent } from '@kdev/components/theme-options/theme-options.component';

@NgModule({
    declarations: [
        KdevThemeOptionsComponent
    ],
    imports     : [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        FlexLayoutModule,

        MatButtonModule,
        MatCheckboxModule,
        MatDividerModule,
        MatFormFieldModule,
        MatIconModule,
        MatOptionModule,
        MatRadioModule,
        MatSelectModule,
        MatSlideToggleModule,

        KdevDirectivesModule,
        KdevMaterialColorPickerModule,
        KdevSidebarModule
    ],
    exports     : [
        KdevThemeOptionsComponent
    ]
})
export class KdevThemeOptionsModule
{
}
