import cloudinary from "@/lib/cloudinary";
import { connectdb } from "@/lib/db";
import { Students } from "@/Models/Students";
import { NextResponse } from "next/server";


export async function POST(req: Request) {
    try {
        await connectdb();
        const form = await req.formData();
        const fullname = form.get("fullname") as string | null
        const email = form.get("email") as string | null
        const age = Number(form.get("age"));
        const major = form.get("major") as string | null
        const photo = form.get("file") as File | null

        if (!fullname || !email || isNaN(age) || !major || !photo) {
            return NextResponse.json({ err: "All fields are required" }, { status: 400 })
        }

        const arrayBuffer = await photo.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        const result: { secure_url: string } = await new Promise((resolve, reject) => {
            const uploadstream = cloudinary.uploader.upload_stream({
                folder: "college"
            },

                (error, result) => {
                    if (error) reject(error);
                    else resolve(result as { secure_url: string });
                }

            );
            uploadstream.end(buffer);
        });

        const create = await Students.create({
            fullname, email, age, major, photo: result.secure_url
        });

        return NextResponse.json(create, { status: 201 });

    } catch (error) {
        return NextResponse.json({ err: "Internal Server Error", error }, { status: 500 });
    }
}


export async function GET(req: Request) {
    try {
        await connectdb();
        const data = await Students.find();
        return NextResponse.json(data, { status: 200 });
    } catch (error) {
        return NextResponse.json({ err: "Internal Server Error", error }, { status: 500 })
    }
}

export async function PUT(req: Request){
    try {
        await connectdb();
       const { id , fullname , email , age , major } = await  req.json();
       const updated = await  Students.findByIdAndUpdate(id , {
        fullname,email,age,major
       },{new:true});
       return NextResponse.json(updated , {status:200});

        
    } catch (error) {
        return NextResponse.json({err:"Internal Server Error",error},{status:500})
    }
}

export async function DELETE(){
    
}


