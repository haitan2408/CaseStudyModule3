import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/service/customer.service';
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {

  displayedColumns = ['maKH','hoTen', 'loaiKhach', 'sdt','email','action'];
  DataSource: MatTableDataSource<Customer>;
  userData: any[] = [];
  id: any;
  customerInfo:Customer;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private route: ActivatedRoute, private router: Router, private customerService: CustomerService) {
  }

  getAllCustomer(): void {
    this.customerService.getAllCustomer().subscribe((res) => {
      console.log(res)
      this.userData = res;
      this.DataSource = new MatTableDataSource(res);
      this.DataSource.paginator = this.paginator;
      this.DataSource.sort = this.sort;
    }
    )
  }
  ngOnInit() {
    this.getAllCustomer();
  }
  public doFilter = (value: string) => {
    this.DataSource.filter = value.trim().toLocaleLowerCase();
  }
  updateCustomer(id: number) {
    this.router.navigateByUrl("/admin/customer/updateCustomer/"+id);
  }

  deleteCustomer(idCustomer:number) {
    if(confirm("I want delete this Customer?")){
      this.customerService.deleteCustomer(idCustomer).subscribe(data => {
        window.location.reload();
      })
    }
  }
}
