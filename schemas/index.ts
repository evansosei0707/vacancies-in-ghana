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



// const MAX_FILE_SIZE = 5000000;

// function checkFileType(file: File): boolean {
//     if (file?.name) {
//         const fileType = file.name.split(".").pop();
//         return fileType === "docx" || fileType === "pdf";
//     }
//     return false;
// }

// const fileSchema = z.object({
//     file: z.any()
//         .refine((file: File | undefined) => !!file, {
//             message: "File is required",
//         })
//         .refine((file: File) => checkFileType(file), {
//             message: "Only .pdf, .docx formats are supported.",
//         }),
// });



// const jobSeekerCvSchema = z.custom<File>()
// .refine(file => {
//     message: 'Image is required'
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
    reviewCheckbox: z.boolean(),
    termsCheckbox: z.boolean(),
    signMeCheckbox: z.boolean(),
    // uploadCv: z.custom<File>((file) => file instanceof File, {
    //     message: 'CV/Resume is required'
    // })
})

export const jobSearchFilterSchema = z.object({
    q: z.string().optional(),
    region: z.string().optional(),
    job_function: z.string().optional(),
})

export type jobSearchFilterValues = z.infer< typeof jobSearchFilterSchema>


export const EmployerRegisterSchema1 = z.object({
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
    role: z.string().min(1, {
        message: "This input can't be empty"
    }),
    mobileNumber: z.string().min(9, {
        message: "Mobile number is required!"
    }).regex(/^\d+$/, "Must be a number").max(10, "Number can't be longer than 10 digits"),
})


export const EmployerRegisterSchema2 = z.object({
    companyName: z.string().min(1,{
        message: "Your company is required!"
    }),
    sector: z.string().min(1, {
        message: "Sector is required"
    }),
    personnels: z.string().min(1, {
        message: "Please choose number of personnels"
    }),
    category: z.string().min(1, {
        message: "Employment cateogry is required!"
    }),
    webUrl: z.string().min(1, {
        message: "Enter country code!"
    }).optional(),
    companyEmail: z.string().email({
        message: "Enter a valid email address"
    }),
    companyAddress: z.string().min(1, {
        message: "company's address is required!"
    }),
    companyPhone: z.string().min(9, {
        message: "Mobile number is required!"
    }).regex(/^\d+$/, "Must be a number").max(10, "Number can't be longer than 10 digits").optional(),
    companyLogo: z.custom<File>((file) => file instanceof File, {
        message: 'Enter a valid file format'
    }).optional(),
    termsCheckbox: z.boolean(),
    jobAlert: z.boolean(),
    jobTips: z.boolean(),
})


export const PostJobSchema = z.object({
    jobTitle: z.string().min(1,{
        message: "Job title is required!"
    }),
    jobFunction: z.string().min(1, {
        message: "Job function required!"
    }),
    jobType: z.string().min(1, {
        message: "Work type is required!"
    }),
    workspaceType: z.string().min(1, {
        message: "This field is required!"
    }),
    experienceLevel: z.string().min(1, {
        message: "specify experience level here!"
    }),
    qualifications: z.array(z.object({label: z.string(), value: z.string()})),
    availability: z.string().min(1, {
        message: "Select at least one qualification"
    }).max(3, {
        message: "You can't select more than 3 qualifications"
    }),
    jobPostPeriod: z.string().optional(),
})

