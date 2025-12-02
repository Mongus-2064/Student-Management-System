import mongoose,{Document , Model} from "mongoose";

interface IStudents extends Document {
    fullname: string,
    email:string,
    age:number,
    major:string,
    photo:string
}

const studentsschema = new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },email:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true,

    },
    major:{
        type:String,
        required:true
    },
    photo:{
        type:String,
        required:true
    }
});

export const Students:Model<IStudents> = mongoose.models.Students || mongoose.model("Students",studentsschema);

