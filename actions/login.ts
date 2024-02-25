"use server";

import * as z from "zod";
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


    if (!validateFields.success) {
        return {error: "Invalid fiels!"};
    }

    return { success: "Sign up step 1 form sent successfully"};
}

export const signUpSet2 = async (values: z.infer<typeof RegisterStep2Schema>) => {
    const validateFields = RegisterStep2Schema.safeParse(values);
   

    if (!validateFields.success) {
        return {error: "Invalid fiels!"};
    }

    console.log(values);

    return { success: "Email sent successfully"};
}