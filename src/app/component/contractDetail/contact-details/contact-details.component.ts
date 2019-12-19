import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ContractDetail } from 'src/app/models/contractDetail';
import { ContractService } from 'src/app/service/contract.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { ContractDetailService } from 'src/app/service/contract-detail.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  hopDong: {};
  dichVuDiKem: ["message", "karaoke", "swimming"];
  hide = true;
  validation_messages = {
    'maHDCT': [
      { type: 'required', message: 'Mã hợp đồng chi tiết không được để trống' },
      { type: 'pattern', message: 'Mã hợp đồng chi tiết không đúng định dạng HDCT-XXXX với X là number' }
    ],
    'hopDong': [
      { type: 'required', message: 'Hợp đồng không được để trống' },
    ],
    'dichVuDiKem': [
      { type: 'required', message: 'Khách hàng không được để trống' },
    ],
    'soLuong': [
      { type: 'required', message: 'Dịch vụ không được để trống' },
      { type: 'pattern', message: 'Số lượng phải là số nguyên dương' }
    ]
  };

  form: any = {};

  contractDetailInfo: ContractDetail;
  registerForm: FormGroup

  constructor(private contractService: ContractService, private contractDetail: ContractDetailService, private fb: FormBuilder, private router: Router, public snackbar: MatSnackBar) { }

  ngOnInit() {
    this.createFormRegister();
    this.contractService.getAllContract().subscribe(data => {
      this.hopDong = data;
    });
  }
  createFormRegister() {
    this.registerForm = this.fb.group({
      maHDCT: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern(/^(?:\s*)\HDCT-\d{4}(?:\s*)$/)
      ])),
      hopDong: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      dichVuDiKem: new FormControl('', Validators.compose([
        Validators.required,

      ])),
      soLuong: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern(/^\d+$/)
      ])),
    })
  };

  onSubmitRegisters() {
    if (this.registerForm.valid) {
      this.contractService.createContract(this.registerForm.value).subscribe(data => {
        this.router.navigateByUrl("/admin/contract");
      })
    }
  }
}
