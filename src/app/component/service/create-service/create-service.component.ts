import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Service } from 'src/app/models/service';
import { ServiceService } from 'src/app/service/service.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-create-service',
  templateUrl: './create-service.component.html',
  styleUrls: ['./create-service.component.css']
})
export class CreateServiceComponent implements OnInit {
  hide = true;
  validation_messages = {
    'tenDV': [
      { type: 'required', message: 'Tên không được để trống' }
    ],
    'maDV': [
      { type: 'required', message: 'Mã dịch vụ không được để trống' },
      { type: 'pattern', message: 'Mã dịch vụ không đúng định dạng DV-XXXX với X là number' }
    ],
    'dienTich': [
      { type: 'required', message: 'Diện tích không được để trống' },
      {type: 'pattern',message:'Diện tích phải là số dương'}
    ],
    'soTang': [
        { type: 'required', message: 'Số tầng không được để trống' },
        {type: 'pattern',message:'Số tầng phải là số nguyên dương'}
      ],
    'maxPeople': [
      { type: 'required', message: 'Số lượng người tối đa không được để trống' },
      {type: 'pattern',message:'Số người tối đa phải là số nguyên dương'}
    ],
    'phiThue': [
      { type: 'required', message: 'Phí thuê không được để trống' },
      {type: 'pattern',message:'Phí thuê phải là số dương'}
    ],
    'kieuThue': [
      { type: 'required', message: 'Kiểu thuê không được để trống' },
    ],
    'trangThai': [
      { type: 'required', message: 'Trạng thái không được để trống' },
    ]
  };

  form: any = {};
  serviceInfo: Service;
  registerForm: FormGroup

  constructor(private serviceService: ServiceService, private fb: FormBuilder, private router: Router, public snackbar: MatSnackBar) { }

  ngOnInit() {
    this.createFormRegister();
  }

  createFormRegister() {
    this.registerForm = this.fb.group({
      tenDV: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      maDV: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern(/^(?:\s*)\DV-\d{4}(?:\s*)$/)
      ])),
      dienTich: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern(/^\d+(\.\d+)?$/)
      ])),
      soTang: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern(/^\d+$/)
      ])),
      maxPeople: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern(/^\d+$/)
      ])),
      phiThue: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern(/^\d+(\.\d+)?$/)
      ])),
      kieuThue: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      trangThai: new FormControl('', Validators.compose([
        Validators.required
      ]))
    })
  };

  onSubmitRegisters() {
    if (this.registerForm.valid) {
      this.serviceService.createService(this.registerForm.value).subscribe(data => {
        this.router.navigateByUrl("/admin/service");
      })
    }
  }
}
