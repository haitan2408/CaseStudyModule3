import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './share/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';
import { FileSelectDirective } from "ng2-file-upload";
import { NgMatSearchBarModule } from 'ng-mat-search-bar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';

import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CommonModule } from '@angular/common';
import { Md5 } from 'ts-md5/dist/md5';
import { CreateCustomerComponent } from './component/customer/create-customer/create-customer.component';
import { ListCustomerComponent } from './component/customer/list-customer/list-customer.component';
import { CreateEmployeeComponent } from './component/employee/create-employee/create-employee.component';
import { ListEmployeeComponent } from './component/employee/list-employee/list-employee.component';
import { CreateServiceComponent } from './component/service/create-service/create-service.component';
import { ListServiceComponent } from './component/service/list-service/list-service.component';
import { CreateContractComponent } from './component/contract/create-contract/create-contract.component';
import { HomeComponent } from './component/home/home.component';
import { MAT_DATE_FORMATS } from '@angular/material';
import { UpdateCustomerComponent } from './component/customer/update-customer/update-customer.component';
import { UpdateEmployeeComponent } from './component/employee/update-employee/update-employee.component';
import { UpdateServiceComponent } from './component/service/update-service/update-service.component';
import { ListContractComponent } from './component/contract/list-contract/list-contract.component';
import { ContactDetailsComponent } from './component/contractDetail/contact-details/contact-details.component';

export const DD_MM_YYYY_Format = {
  parse: {
      dateInput: 'LL',
  },
  display: {
      dateInput: 'DD/MM/YYYY',
      monthYearLabel: 'MMM YYYY',
      dateA11yLabel: 'LL',
      monthYearA11yLabel: 'MMMM YYYY',
  },
};

@NgModule({
  declarations: [
    AppComponent,
    FileSelectDirective,
    AdminLayoutComponent,
    CreateCustomerComponent,
    ListCustomerComponent,
    CreateEmployeeComponent,
    ListEmployeeComponent,
    CreateServiceComponent,
    ListServiceComponent,
    CreateContractComponent,
    HomeComponent,
    UpdateCustomerComponent,
    UpdateEmployeeComponent,
    UpdateServiceComponent,
    ListContractComponent,
    ContactDetailsComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgMatSearchBarModule,
    FlexLayoutModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })

  ],
  
  providers: [ {provide: MAT_DATE_FORMATS, useValue: DD_MM_YYYY_Format},],
  bootstrap: [AppComponent]
})
export class AppModule { }
