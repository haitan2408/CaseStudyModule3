import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Service } from 'src/app/models/service';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-list-service',
  templateUrl: './list-service.component.html',
  styleUrls: ['./list-service.component.css']
})
export class ListServiceComponent implements OnInit {

  displayedColumns = ['maDV','tenDV', 'dienTich','soTang','maxPeople', 'phiThue', 'kieuThue','trangThai','action'];
  DataSource: MatTableDataSource<Service>;
  userData: any[] = [];
  id: any;
  employeeInfo:Service;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private route: ActivatedRoute, private router: Router, private serviceService: ServiceService) {
  }

  getAllService(): void {
    this.serviceService.getAllService().subscribe((res) => {
      console.log(res)
      this.userData = res;
      this.DataSource = new MatTableDataSource(res);
      this.DataSource.paginator = this.paginator;
      this.DataSource.sort = this.sort;
    }
    )
  }
  ngOnInit() {
    this.getAllService();
  }
  public doFilter = (value: string) => {
    this.DataSource.filter = value.trim().toLocaleLowerCase();
  }
  updateService(id: number) {
    this.router.navigateByUrl("/admin/service/updateService/"+id);
  }

  deleteService(idService:number) {
    if(confirm("I want delete this Service?")){
      this.serviceService.deleteService(idService).subscribe(data => {
        window.location.reload();
      })
    }
  }

}
