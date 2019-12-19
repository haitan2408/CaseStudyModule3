import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import { MatSnackBar, MatDatepickerInputEvent, MAT_DATE_FORMATS, DateAdapter, MAT_DATE_LOCALE } from '@angular/material';

import * as _moment from 'moment';
import {default as _rollupMoment} from 'moment';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/service/customer.service';

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
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css'],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
]
})
export class CreateCustomerComponent implements OnInit {

  hide = true;
  date = new FormControl(moment());
  flightSchedule = {
    date: new Date()
  }
  validation_messages = {
    'hoTen': [
      { type: 'required', message: 'Tên không được để trống' }
    ],
    'maKH': [
      { type: 'required', message: 'Mã khách hàng không được để trống' },
      { type: 'pattern', message: 'Mã khách hàng không đúng định dạng KH-XXXX với X là number' }
    ],
    'loaiKhach': [
      { type: 'required', message: 'Loại khách không được để trống' },
    ],
    'ngaySinh': [
      { type: 'required', message: 'Ngày sinh không được để trống' },
      { type:'pattern',message:'Ngày sinh phải đúng định dạng dd/MM/yyyy'}
    ],
    'cmnd': [
      { type: 'required', message: 'CMND không được để trống' },
      { type: 'pattern', message: 'CMND không đúng định dạng' }
    ],
    'sdt': [
      { type: 'required', message: 'SDT không được để trống' },
      { type:'pattern',message:"Số điện thoại không đúng định dạng"}
    ],
    'email': [
      { type: 'required', message: 'Email không được để trống' },
      { type: 'pattern', message: 'Email không đúng định dạng abc@abc.abc' }
    ],
    'diaChi': [
      { type: 'required', message: 'Địa chỉ không được để trống' },
    ]
  };

  form: any = {};
  customerInfo: Customer;
  registerForm: FormGroup

  constructor(private customerService: CustomerService, private fb: FormBuilder, private router: Router, public snackbar: MatSnackBar) { }

  ngOnInit() {
    this.createFormRegister();
  }



  createFormRegister() {
    this.registerForm = this.fb.group({
      hoTen: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      loaiKhach: new FormControl('', Validators.compose([
        Validators.required
      ])),
      maKH: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern(/^(?:\s*)\KH-\d{4}(?:\s*)$/)
      ])),
      ngaySinh: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern(/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/)
      ])),
      cmnd: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern(/^([\d]{9}|[\d]{12})$/)
      ])),
      sdt: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern(/(090|091|\+(84)?91|\+(84)?90)+([0-9]{7})\b/)
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern(/\S+@\S+\.\S+/)
      ])),
      diaChi: new FormControl('', Validators.compose([
        Validators.required
      ]))
    })
  };

  onSubmitRegisters() {
    
    if (this.registerForm.valid) {
      this.customerService.createCustomer(this.registerForm.value).subscribe(data => {
        this.router.navigateByUrl("/admin/customer");
      })
    }
  }
}