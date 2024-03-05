"use server";

import * as z from "zod";
import bcrypt from "bcryptjs"
import { db } from "@/lib/db";
import { LoginSchema, RegisterStep1Schema, RegisterStep2Schema } from "@/schemas";


export const login = async (values: z.infer<typeof LoginSchema>) => {
    const validateFields = LoginSchema.safeParse(values);
    console.log(values)

    if (!validateFields.success) {
        return { error: "Invalid fields!"};
    }
   

    return { success: "Email sent successfully!"};

}



export const signUpSet1 = async (values: z.infer<typeof RegisterStep1Schema>) => {
    const validateFields = RegisterStep1Schema.safeParse(values);


    // const { email, password, firstName, lastName, countryCode, mobileNumber, dateOfBirth, gender, location  }  = validateFields.data

    // const hashPassword = await bcrypt.hash(password, 10)


    // const existingUser = await db.user.findUnique({
    //     where: {
    //         email,
    //     },
    // })

    // if (existingUser) {
    //     return { error: "Email already in use!"}
    // }

    // await db.user.create({
    //     data: {
    //         firstName,
    //         email,
    //         password: hashPassword,
    //         lastName,
    //         countryCode,
    //         mobileNumber,
    //         dateOfBirth,
    //         gender,
    //         location,
    //     }
    // })

    return { success: "User created!"};
}

export const signUpSet2 = async (values: z.infer<typeof RegisterStep2Schema>) => {
    const validateFields = RegisterStep2Schema.safeParse(values);
   
    console.log(values);
    
    if (!validateFields.success) {
        console.log("invalid fields")
    }
    console.log(values);
    
    
    console.log("Form")
    console.log(values);
}