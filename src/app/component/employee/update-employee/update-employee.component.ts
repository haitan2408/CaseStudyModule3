import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { MatSnackBar, MatDatepickerInputEvent, MAT_DATE_FORMATS, DateAdapter, MAT_DATE_LOCALE } from '@angular/material';
import * as _moment from 'moment';
import { default as _rollupMoment } from 'moment';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/service/employee.service';

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
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css'],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ]
})

export class UpdateEmployeeComponent implements OnInit {

  hide = true;
  date = new FormControl(moment());
  flightSchedule = {
    date: new Date()
  }
  validation_messages = {
    'hoTen': [
      { type: 'required', message: 'Tên không được để trống' }
    ],
    'maNV': [
      { type: 'required', message: 'Mã nhân viên không được để trống' },
      { type: 'pattern', message: 'Mã nhân viên không đúng định dạng KH-XXXX với X là number' }
    ],
    'viTri': [
      { type: 'required', message: 'Vị trí không được để trống' },
    ],
    'trinhDo': [
      { type: 'required', message: 'Trình độ không được để trống' },
    ],
    'boPhan': [
      { type: 'required', message: 'Bộ phận không được để trống' },
    ],
    'ngaySinh': [
      { type: 'required', message: 'Ngày sinh không được để trống' },
      { type: 'pattern', message: 'Ngày sinh phải đúng định dạng dd/MM/yyyy' }
    ],
    'cmnd': [
      { type: 'required', message: 'CMND không được để trống' },
      { type: 'pattern', message: 'CMND không đúng định dạng' }
    ],
    'luong': [
      { type: 'required', message: 'Lương không được để trống' },
      { type: 'pattern', message: 'Lương phải là số dương' }
    ],
    'sdt': [
      { type: 'required', message: 'SDT không được để trống' },
      { type: 'pattern', message: "Số điện thoại không đúng định dạng" }
    ],
    'email': [
      { type: 'required', message: 'Email không được để trống' },
      { type: 'pattern', message: 'Email không đúng định dạng abc@abc.abc' }
    ],
    'diaChi': [
      { type: 'required', message: 'Địa chỉ không được để trống' },
    ]
  };
  id: number;
  form: any = {};
  employeeInfo: Employee;
  registerForm: FormGroup

  constructor(private route: ActivatedRoute, private employeeService: EmployeeService, private fb: FormBuilder, private router: Router, public snackbar: MatSnackBar) { }

  ngOnInit() {
    this.createFormRegister();
    this.id = this.route.snapshot.params["id"];
    this.employeeService.getEmployee(this.id).subscribe(res => {
      console.log(res);
      this.employeeInfo = res;
      console.log(this.employeeInfo)
      this.registerForm.patchValue(this.employeeInfo);
    })
  }



  createFormRegister() {
    this.registerForm = this.fb.group({
      hoTen: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      viTri: new FormControl('', Validators.compose([
        Validators.required
      ])),
      maNV: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern(/^(?:\s*)\NV-\d{4}(?:\s*)$/)
      ])),
      trinhDo: new FormControl('', Validators.compose([
        Validators.required
      ])),
      boPhan: new FormControl('', Validators.compose([
        Validators.required
      ])),
      ngaySinh: new FormControl('', Validators.compose([
        Validators.required,
        // Validators.pattern(/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/)
      ])),
      cmnd: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern(/^([\d]{9}|[\d]{12})$/)
      ])),
      luong: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern(/^\d+(\.\d+)?$/)
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
      this.employeeService.updateEmployee(this.id,this.registerForm.value).subscribe(data => {
        this.router.navigateByUrl("/admin/employee");
      })
    }
  }
}
