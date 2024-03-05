"use server";

import * as z from "zod";
import bcrypt from "bcryptjs"
import { db } from "@/lib/db";
import { EmployerRegisterSchema1, EmployerRegisterSchema2 } from "@/schemas";



export const employerSignUpSet1 = async (values: z.infer<typeof EmployerRegisterSchema1>) => {
    const validateFields = EmployerRegisterSchema1.safeParse(values);

    console.log(values);


    // const { email, password, firstName, lastName, mobileNumber, role  }  = validateFields.data
    // const hashPassword = await bcrypt.hash(password, 10)

    // const existingUser = await db.user.findUnique({
    //     where: {
    //         email,
    //     },
    // })

    // if (existingUser) {
    //     return { error: "Email already in use!"}
    // }

    return { success: "User created!"};
}


export const employerSignUpSet2 = async (values: z.infer<typeof EmployerRegisterSchema2>) => {
    const validateFields = EmployerRegisterSchema1.safeParse(values);

    console.log(values);


    // const { email, password, firstName, lastName, mobileNumber, role  }  = validateFields.data
    // const hashPassword = await bcrypt.hash(password, 10)

    // const existingUser = await db.user.findUnique({
    //     where: {
    //         email,
    //     },
    // })

    // if (existingUser) {
    //     return { error: "Email already in use!"}
    // }

    return { success: "User created!"};
}