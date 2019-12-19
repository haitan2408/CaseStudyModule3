import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { MatSnackBar, MatDatepickerInputEvent, MAT_DATE_FORMATS, DateAdapter, MAT_DATE_LOCALE } from '@angular/material';

import * as _moment from 'moment';
import { default as _rollupMoment } from 'moment';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Contract } from 'src/app/models/contract';
import { ContractService } from 'src/app/service/contract.service';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/service/employee.service';
import { CustomerService } from 'src/app/service/customer.service';
import { ServiceService } from 'src/app/service/service.service';

const moment = _rollupMoment || _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY',
  },
};

@Component({
  selector: 'app-create-contract',
  templateUrl: './create-contract.component.html',
  styleUrls: ['./create-contract.component.css'],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ]
})
export class CreateContractComponent implements OnInit {

  nhanVien = {};
  dichVu = {};
  khachHang = {};
  hide = true;
  date = new FormControl(moment());
  ngayLamHopDong = {
    date: new Date()
  }
  ngayKetThuc = {
    date: new Date()
  }
  validation_messages = {
    'maHD': [
      { type: 'required', message: 'Mã hợp đồng không được để trống' },
      { type: 'pattern', message: 'Mã hợp đồng không đúng định dạng KH-XXXX với X là number' }
    ],
    'nhanVien': [
      { type: 'required', message: 'Nhân viên không được để trống' },
    ],
    'khachHang': [
      { type: 'required', message: 'Khách hàng không được để trống' },
    ],
    'dichVu': [
      { type: 'required', message: 'Dịch vụ không được để trống' },
    ],
    'ngayLamHopDong': [
      { type: 'required', message: 'Ngày làm hợp đồng không được để trống' },
    ],
    'ngayKetThuc': [
      { type: 'required', message: 'Ngày kết thúc không được để trống' },
    ],
    'tienDatCoc': [
      { type: 'required', message: 'Tiền đặt cọc không được để trống' },
      { type: 'pattern', message: 'Tiền đặt cọc phải là số dương' }
    ],
    'tongTien': [
      { type: 'required', message: 'Tổng tiền không được để trống' },
      { type: 'pattern', message: 'Tổng tiền phải là số dương' }
    ]
  };

  form: any = {};
  contractInfo: Contract;
  registerForm: FormGroup

  constructor(private customerService: CustomerService, private dichvuService: ServiceService, private employeeServie: EmployeeService, private contractService: ContractService, private fb: FormBuilder, private router: Router, public snackbar: MatSnackBar) { }

  ngOnInit() {
    this.createFormRegister();
    this.employeeServie.getAllEmployee().subscribe(data => {
      this.nhanVien = data;
    });
    this.customerService.getAllCustomer().subscribe(data => {
      this.khachHang = data;
    });
    this.dichvuService.getAllService().subscribe(data => {
      this.dichVu = data;
    })

  }



  createFormRegister() {
    this.registerForm = this.fb.group({
      maHD: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern(/^(?:\s*)\HD-\d{4}(?:\s*)$/)
      ])),
      ngayLamHopDong: new FormControl('', Validators.compose([
        Validators.required,
        // Validators.pattern(/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/)
      ])),
      ngayKetThuc: new FormControl('', Validators.compose([
        Validators.required,
        // Validators.pattern(/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/)
      ])),
      nhanVien: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      khachHang: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      dichVu: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      tienDatCoc: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern(/^\d+(\.\d+)?$/)
      ])),
      tongTien: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern(/^\d+(\.\d+)?$/)
      ]))
    })
  };

  onSubmitRegisters() {
    this.registerForm.value.ngayLamHopDong = this.ngayLamHopDong.date.getDate() + "/" + (this.ngayLamHopDong.date.getMonth() + 1) + "/" + (this.ngayLamHopDong.date.getFullYear());
    this.registerForm.value.ngayKetThuc = this.ngayKetThuc.date.getDate() + "/" + (this.ngayKetThuc.date.getMonth() + 1) + "/" + (this.ngayKetThuc.date.getFullYear())
    if (this.registerForm.valid) {
      this.contractService.createContract(this.registerForm.value).subscribe(data => {
        this.router.navigateByUrl("/admin/contract");
      })
    }
  }
}
