import { ReactiveFormsModule } from '@angular/forms';
import {NgModule} from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {PanelModule} from 'primeng/panel';
import {GMapModule} from 'primeng/gmap';
import {DividerModule} from 'primeng/divider';
import {CalendarModule} from 'primeng/calendar';
import {MenubarModule} from 'primeng/menubar';

@NgModule({
  exports: [
    ButtonModule,
    GMapModule,
    CardModule,
    PanelModule,
    DividerModule,
    CalendarModule,
    MenubarModule,
    ReactiveFormsModule
  ]
})
export class PrimengModule {}
