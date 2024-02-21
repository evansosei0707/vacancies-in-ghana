import { X } from 'lucide-react';
import { z, ZodError } from 'zod';


  export const LoginSchema = z.object({
    email: z.string().email({
        message: "Email is required!"
    }),
    password: z.string().min(1, {
        message: "Password is required!"
    }),
});



const MAX_FILE_SIZE = 5000000;

function checkFileType(file: File): boolean {
    if (file?.name) {
        const fileType = file.name.split(".").pop();
        return fileType === "docx" || fileType === "pdf";
    }
    return false;
}

const fileSchema = z.object({
    file: z.any()
        .refine((file: File | undefined) => !!file, {
            message: "File is required",
        })
        .refine((file: File) => checkFileType(file), {
            message: "Only .pdf, .docx formats are supported.",
        }),
});



// const jobSeekerCvSchema = z.custom<File|undefined>()
// .refine(file => {
//     !file || file instanceof File && file.name.split(".").pop();
// })


export const RegisterStep1Schema = z.object({
    email: z.string().email({
        message: "Email is required!"
    }),
    password: z.string().min(6, {
        message: "Minimum 6 characters required!"
    }),
    firstName: z.string().min(1, {
        message: "First Name is required!"
    }),
    lastName: z.string().min(1, {
        message: "Last Name is required!"
    }),
    countryCode: z.string().min(1, {
        message: "Enter country code!"
    }),
    location: z.string().min(1, {
        message: "Please enter your location"
    }),
    dateOfBirth: z.string().min(1, {
        message: "Select date of birth please!"
    }),
    gender: z.string().min(1, {
        message: "Gender status is required!"
    }),
    mobileNumber: z.string().min(9, {
        message: "Mobile number is required!"
    }).regex(/^\d+$/, "Must be a number").max(10, "Number can't be longer than 10 digits"),
})



export const RegisterStep2Schema = z.object({
    qualification: z.string().min(1, {
        message: "Select matching qualifications"
    }),
    experience: z.string().min(1, {
        message: "Select your years of experience"
    }),
    currentJobFunction: z.string().min(1, {
        message: "Select your current job function!"
    }).optional(),
    // desiredJobFunction: z.array(z.string()).refine(data => data.length > 0, {
    //     message: "Select at least one desired job function!"
    // }),
    desiredJobFunction: z.array(z.object({label: z.string(), value: z.string()})),
    availability: z.string().min(1, {
        message: "Select your availability!"
    }),
    reviewCheckbox: z.boolean()
    // uploadCv: fileSchema
})