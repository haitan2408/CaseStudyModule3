import { Component, OnInit, ViewChild } from '@angular/core';
import { Contract } from 'src/app/models/contract';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/service/customer.service';
import { ContractService } from 'src/app/service/contract.service';

@Component({
  selector: 'app-list-contract',
  templateUrl: './list-contract.component.html',
  styleUrls: ['./list-contract.component.css']
})
export class ListContractComponent implements OnInit {

  displayedColumns = ['maHD','nhanVien', 'khachHang', 'dichVu','ngayLamHopDong','ngayKetThuc','tienDatCoc','tongTien','action'];
  DataSource: MatTableDataSource<Contract>;
  userData: any[] = [];
  id: any;
  contracrInfo:Contract;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor(private route: ActivatedRoute, private router: Router, private contractService: ContractService) {
  }

  getAllContract(): void {
    this.contractService.getAllContract().subscribe((res) => {
      console.log(res)
      this.userData = res;
      this.DataSource = new MatTableDataSource(res);
      this.DataSource.paginator = this.paginator;
      this.DataSource.sort = this.sort;
    }
    )
  }
  ngOnInit() {
    this.getAllContract();
  }
  public doFilter = (value: string) => {
    this.DataSource.filter = value.trim().toLocaleLowerCase();
  }

  deleteContract(idContract:number) {
    if(confirm("I want delete this Contract?")){
      this.contractService.deleteContract(idContract).subscribe(data => {
        window.location.reload();
      })
    }
  }

}
