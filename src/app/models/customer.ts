export class Customer {
    id: number;
    maKH:String;
    hoTen: String;
    loaiKhach: String;
    ngaySinh: String;
    cmnd: String;
    sdt: String;
    email: String;
    diaChi: String;

constructor(id,maKH,hoTen,loaiKhach,ngaySinh,cmnd,sdt,email,diachi) {
    this.maKH=maKH;
    this.id=id;
    this.hoTen=hoTen;
    this.loaiKhach=loaiKhach;
    this.ngaySinh=ngaySinh;
    this.cmnd=cmnd;
    this.email=email;
    this.sdt=sdt;
    this.diaChi=diachi;
}
}