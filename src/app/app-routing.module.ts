import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { HomeComponent } from './component/home/home.component';
import { ListEmployeeComponent } from './component/employee/list-employee/list-employee.component';
import { ListCustomerComponent } from './component/customer/list-customer/list-customer.component';
import { ListServiceComponent } from './component/service/list-service/list-service.component';
import { CreateEmployeeComponent } from './component/employee/create-employee/create-employee.component';
import { CreateCustomerComponent } from './component/customer/create-customer/create-customer.component';
import { CreateServiceComponent } from './component/service/create-service/create-service.component';
import { UpdateCustomerComponent } from './component/customer/update-customer/update-customer.component';
import { UpdateEmployeeComponent } from './component/employee/update-employee/update-employee.component';
import { UpdateServiceComponent } from './component/service/update-service/update-service.component';
import { ListContractComponent } from './component/contract/list-contract/list-contract.component';
import { CreateContractComponent } from './component/contract/create-contract/create-contract.component';
import { ContractDetailService } from './service/contract-detail.service';
import { ContractDetail } from './models/contractDetail';
import { ContactDetailsComponent } from './component/contractDetail/contact-details/contact-details.component';


const routes: Routes = [
  {
    path: "admin", component: AdminLayoutComponent, children: [
      {
        path: "home", component: HomeComponent
      },
      {
        path: "employee", component: ListEmployeeComponent
      },
      {
        path: "employee/createEmployee", component: CreateEmployeeComponent
      },
      {
        path: "employee/updateEmployee/:id", component: UpdateEmployeeComponent
      },
      {
        path: "customer", component: ListCustomerComponent
      },
      {
        path: "customer/createCustomer", component: CreateCustomerComponent
      },
      {
        path: "customer/updateCustomer/:id", component: UpdateCustomerComponent
      },
      {
        path: "service", component: ListServiceComponent
      },
      {
        path: "service/createService", component: CreateServiceComponent
      },
      {
        path: "service/updateService/:id", component: UpdateServiceComponent
      },
      {
        path: "contract", component: ListContractComponent
      },
      {
        path:"contract/createContract",component:CreateContractComponent
      },
      {
        path:"contractDetail",component:ContactDetailsComponent
      }
    ],
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
