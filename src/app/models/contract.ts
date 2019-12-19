import { Employee } from './employee';
import { Customer } from './customer';
import { Service } from './service';

export class Contract {
    id: number;
    maHD: String;
    nhanVien: Employee;
    khachHang: Customer;
    dichVu: Service;
    ngayLamHopDong: Date;
    ngayKetThuc: Date;
    tienDatCoc: number;
    tongTien: number;
    constructor(id, maHD, nhanVien, khachHang, dichVu, ngayLamHopDong, ngayKetThuc, tienDatCoc, tongTien) {
        this.id = id;
        this.maHD = maHD;
        this.khachHang = khachHang;
        this.nhanVien = nhanVien;
        this.dichVu = dichVu;
        this.ngayKetThuc = ngayKetThuc;
        this.ngayLamHopDong = ngayLamHopDong;
        this.tienDatCoc = tienDatCoc; 
        this.tongTien = tongTien;
    }
}