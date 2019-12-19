export class Service {
    id: number;
    maDV: String;
    tenDV: String;
    soTang: number;
    dienTich: number
    maxPeople: number
    phiThue: number
    kieuThue: String;
    trangThai: String;

    constructor(id, maDV, tenDV, soTang, dienTich, maxPeople, phiThue, kieuThue, trangThai) {
        this.id = id;
        this.maDV = maDV;
        this.tenDV = tenDV;
        this.soTang = soTang;
        this.dienTich = dienTich;
        this.maxPeople = maxPeople;
        this.phiThue = phiThue;
        this.kieuThue = kieuThue;
        this.trangThai = trangThai;
    }
}