import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { JuridicoappRegionMySuffixModule } from './region/region-my-suffix.module';
import { JuridicoappCountryMySuffixModule } from './country/country-my-suffix.module';
import { JuridicoappLocationMySuffixModule } from './location/location-my-suffix.module';
import { JuridicoappDepartmentMySuffixModule } from './department/department-my-suffix.module';
import { JuridicoappTaskMySuffixModule } from './task/task-my-suffix.module';
import { JuridicoappEmployeeMySuffixModule } from './employee/employee-my-suffix.module';
import { JuridicoappJobMySuffixModule } from './job/job-my-suffix.module';
import { JuridicoappJobHistoryMySuffixModule } from './job-history/job-history-my-suffix.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        JuridicoappRegionMySuffixModule,
        JuridicoappCountryMySuffixModule,
        JuridicoappLocationMySuffixModule,
        JuridicoappDepartmentMySuffixModule,
        JuridicoappTaskMySuffixModule,
        JuridicoappEmployeeMySuffixModule,
        JuridicoappJobMySuffixModule,
        JuridicoappJobHistoryMySuffixModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JuridicoappEntityModule {}
