import { TblDoctors } from "./doctor.model";

export interface ITblPatiens {
    doctor?: TblDoctors;
   
}
export class TblPatiens implements ITblPatiens {
    constructor(
        public doctor?: TblDoctors,

    ){}
}