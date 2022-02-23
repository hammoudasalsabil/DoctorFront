import { TblAdmin } from "./admin.model";

export interface ITblDoctors {
    diplom?: string;
    admin?: TblAdmin;
   
}
export class TblDoctors implements ITblDoctors {
    constructor(
        public diplom?: string,
        public admin?: TblAdmin,

    ){}
}