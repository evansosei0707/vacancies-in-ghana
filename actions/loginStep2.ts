"use server";

import * as z from "zod";
import bcrypt from "bcryptjs"
import { db } from "@/lib/db";
import {  RegisterStep2Schema } from "@/schemas";



export const signUpSet2 = async (values: z.infer<typeof RegisterStep2Schema>) => {
    const validateFields = RegisterStep2Schema.safeParse(values);

    if (!validateFields.success) {
        return { error: "Invalid fields!"};
    }

    const { reviewCheckbox, availability, desiredJobFunction, currentJobFunction, termsCheckbox, signMeCheckbox, experience, qualification}  = validateFields.data


    // await db.user.create({
    //     data: {
           
    //     }
    // })

    return { success: "User created!"};
}
