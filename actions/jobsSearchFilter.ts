"use server";

import { jobSearchFilterSchema } from "@/schemas";
import { redirect } from "next/navigation";



export async function filterJobs(formData: FormData) {
    "use server"

    const values = Object.fromEntries(formData.entries()); 

    const { q, region, job_function} =  jobSearchFilterSchema.parse(values)

    const searchParams = new URLSearchParams({
        ...(q && {q: q.trim()}),
        ...(region && { region }),
        ...(job_function && { job_function }),
    })

    redirect(`/jobs/?${searchParams.toString()}`)
} 
