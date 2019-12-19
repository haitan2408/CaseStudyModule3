import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Employee } from 'src/app/models/employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  displayedColumns = ['maNV','hoTen', 'viTri', 'boPhan', 'sdt','email','action'];
  DataSource: MatTableDataSource<Employee>;
  userData: any[] = [];
  id: any;
  employeeInfo:Employee;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private route: ActivatedRoute, private router: Router, private employeeService: EmployeeService) {
  }

  getAllEmployee(): void {
    this.employeeService.getAllEmployee().subscribe((res) => {
      console.log(res)
      this.userData = res;
      this.DataSource = new MatTableDataSource(res);
      this.DataSource.paginator = this.paginator;
      this.DataSource.sort = this.sort;
    }
    )
  }
  ngOnInit() {
    this.getAllEmployee();
  }
  public doFilter = (value: string) => {
    this.DataSource.filter = value.trim().toLocaleLowerCase();
  }
  updateEmployee(id: number) {
    this.router.navigateByUrl("/admin/employee/updateEmployee/"+id);
  }

  deleteEmployee(idEmployee:number) {
    if(confirm("I want delete this Employee?")){
      this.employeeService.deleteEmployee(idEmployee).subscribe(data => {
        window.location.reload();
      })
    }
  }

}
