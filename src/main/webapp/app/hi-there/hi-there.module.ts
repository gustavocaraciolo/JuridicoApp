import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterSharedModule } from '../shared';

import { HI_THERE_ROUTE, HiThereComponent } from './';

@NgModule({
    imports: [
      JhipsterSharedModule,
      RouterModule.forRoot([ HI_THERE_ROUTE ], { useHash: true })
    ],
    declarations: [
      HiThereComponent,
    ],
    entryComponents: [
    ],
    providers: [
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JuridicoappAppHiThereModule {}
