import { Contract } from './contract';

export class ContractDetail {
    id: number;
    maHDCT: String;
    hopDong: Contract;
    dichVu: String;
    soLuong: number;

    constructor(id, maHDCT, hopDong, dichVu, soLuong) {
        this.id = id;
        this.maHDCT = maHDCT;
        this.hopDong = hopDong;
        this.dichVu = dichVu;
        this.soLuong = soLuong;
    }
}