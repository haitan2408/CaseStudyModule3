export class Employee {
    id: number;
    maNV:String;
    hoTen: String;
    viTri: String;
    trinhDo: String;
    boPhan: String;
    ngaySinh: String;
    cmnd: String;
    luong: Number;
    sdt: String;
    email: String;
    diaChi: String;

constructor(id,maNV,hoTen,viTri,trinhDo,boPhan,ngaySinh,cmnd,luong,sdt,email,diachi) {
    this.maNV=maNV;
    this.id=id;
    this.hoTen=hoTen;
    this.viTri=viTri;
    this.trinhDo=trinhDo;
    this.boPhan=boPhan;
    this.ngaySinh=ngaySinh;
    this.cmnd=cmnd;
    this.luong=luong;
    this.email=email;
    this.sdt=sdt;
    this.diaChi=diachi;
}
}