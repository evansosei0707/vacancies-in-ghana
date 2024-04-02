"use server";

import * as z from "zod";
import bcrypt from "bcryptjs"
import { db } from "@/lib/db";
import { LoginSchema, RegisterStep1Schema } from "@/schemas";


export const login = async (values: z.infer<typeof LoginSchema>) => {
    const validateFields = LoginSchema.safeParse(values);
    

    if (!validateFields.success) {
        return { error: "Invalid fields!"};
    }

    const { email, password} = validateFields.data;
   

    return { success: "Email sent successfully!"};

}



export const signUpSet1 = async (values: z.infer<typeof RegisterStep1Schema>) => {
    const validateFields = RegisterStep1Schema.safeParse(values);

    if (!validateFields.success) {
        return { error: "Invalid fields!"};
    }

    const { email, password, firstName, lastName, countryCode, mobileNumber, dateOfBirth, gender, location  }  = validateFields.data

    const existingUser = await db.user.findUnique({
        where: {
            email,
        },
    })

    
    if (existingUser) {
        return { error: "Email already in use!"}
    }


    return { success: "User created!"};
}
