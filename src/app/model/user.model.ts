import { TblAdmin } from "./admin.model";
import { TblDoctors } from "./doctor.model";

export interface ITblUsers {
    id?: number;
    name?: string;
    surname?: string;
    phone?: string;
    adress?: string;
    diplom?: string;
    doctor?: TblDoctors;
    admin?: TblAdmin;
    type_per?: string;
   
}
export class TblUsers implements ITblUsers {
    constructor(
        public id?: number,
        public name?: string,
        public surname?: string,
        public phone?: string,
        public adress?: string,
        public diplom?: string,
        public doctor?: TblDoctors,
        public admin?: TblAdmin,
        public type_per?: string,

    ){}
}