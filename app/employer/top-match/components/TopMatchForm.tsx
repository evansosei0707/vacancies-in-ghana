"use client";

import React, { useState, useTransition } from 'react';
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
 } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { TopMatchFormSchema } from '@/schemas';
import { useForm } from 'react-hook-form';
import { regionInGhana } from '@/app/lib/helper';
import { zodResolver } from '@hookform/resolvers/zod';
import { signUpSet1 } from '@/actions/login';
import Select from '@/components/ui/select';
import FormSubmitButton from '@/components/FormSubmitButton';


export default function TopMatchForm() {
  const [error, setError] = useState< string | undefined >();
  const [success, setSuccess] = useState< string | undefined >();
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof TopMatchFormSchema>>({
    resolver: zodResolver(TopMatchFormSchema),
    defaultValues: {
        email: "",
        firstName: "",
        lastName: "",
        countryCode: "",
        companyName: "",
        status: "",
        mobileNumber: "",
    }
});

const onSubmit = (values: z.infer<typeof TopMatchFormSchema>) => {
  setError("");
  setSuccess("");
}

const {
   handleSubmit,
   watch,
   trigger,
   control
} = form;


  return (
    <div className='flex-col items-center bg-[#E9F1F2] w-full p-3 px-1 rounded-lg  justify-center gap-6'>
        <Form {...form} >
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className='items-start mx-auto flex flex-col w-[90%] mt-9 justify-start gap-9'>
                <p className=' font-medium text-[24px]  w-[80%] text-left leading-5 '>Fill in to get Demo</p>
                <div className='flex flex-col items-center w-full justify-center gap-3 md:flex-row md:justify-center'>
                  <FormField 
                    control={form.control}
                    name='firstName'
                    render={({ field }) => (
                        <FormItem className='w-full'>
                            <FormLabel htmlFor='firstName' className=' font-medium text-base'>First Name</FormLabel>
                            <FormControl className='w-full'>
                                <Input
                                    {...field}
                                    disabled={isPending}
                                    type='text'
                                    id='firstName'
                                    className='flex-1 w-full text-[20px] p-5 rounded-lg py-[22px] text-black border placeholder:text-[20px] leading-[24px] outline-none text-[#1A1A1A]/50'
                                />
                            </FormControl>
                            <FormMessage className='font-medium text-base' />
                        </FormItem>
                    )}
                  />
                  <FormField 
                    control={form.control}
                    name='lastName'
                    render={({ field }) => (
                        <FormItem className='w-full'>
                            <FormLabel htmlFor='lastName' className=' font-medium text-base'>Last Name</FormLabel>
                            <FormControl className='w-full'>
                                <Input
                                    {...field}
                                    disabled={isPending}
                                    type='text'
                                    id='lastName'
                                    className='flex-1 w-full text-[20px] p-5  rounded-lg py-[22px] text-black border placeholder:text-[20px] leading-[24px] outline-none text-[#1A1A1A]/50'
                                />
                            </FormControl>
                            <FormMessage className='font-medium text-base' />
                        </FormItem>
                    )}
                  />
                </div>
                <div className='flex flex-col items-center w-full justify-center gap-3 md:flex-row md:justify-center'>
                  <FormField 
                    control={form.control}
                    name='email'
                    render={({ field }) => (
                        <FormItem className='w-full'>
                            <FormLabel htmlFor='email' className=' font-medium text-base'>Email</FormLabel>
                            <FormControl className='w-full'>
                                <Input
                                    {...field}
                                    disabled={isPending}
                                    type='email'
                                    id='email'
                                    placeholder='eg. youremail@example.com'
                                    className='flex-1 w-full text-[22px] p-5  rounded-lg  py-[22px] text-black border placeholder:text-[20px] leading-[24px] outline-none text-[#1A1A1A]/50'
                                />
                            </FormControl>
                            <FormMessage className='font-medium text-base' />
                        </FormItem>
                    )}
                  />
                </div>
                <div className='flex flex-col items-center w-full justify-center gap-3 md:flex-row md:justify-center'>
                    <FormField 
                        control={form.control}
                        name='countryCode'
                        render={({ field }) => (
                            <FormItem className='w-full'>
                                <FormLabel htmlFor='gender' className=' font-medium text-base'>Country code</FormLabel>
                                <FormControl className='w-full'>
                                <Select
                                    className='border py-2 w-full px-4 text-lg outline-none rounded-[8px] border-[#D0D5DD]  text-[#1A1A1A]/50'
                                    {...field} defaultValue="+233">
                                    <option value="" hidden>
                                        Ghana,(+233)
                                    </option>
                                    <option value="+233">
                                        Ghana,(+233)
                                    </option>
                                    <option value="+234" >
                                    Nigeria,(+234)
                                    </option>
                                    <option value="+235">
                                        Liberia,(+235)
                                    </option>
                                    
                                </Select>
                                </FormControl>
                                <FormMessage className='font-medium text-base' />
                            </FormItem>
                        )}
                    />
                  <FormField 
                    control={form.control}
                    name='mobileNumber'
                    render={({ field }) => (
                        <FormItem className='w-full'>
                            <FormLabel htmlFor='mobileNumber' className=' font-medium text-base'>Mobile Number</FormLabel>
                            <FormControl className='w-full'>
                                <Input
                                    {...field}
                                    disabled={isPending}
                                    type='number'
                                    id='mobileNumber'
                                    placeholder='000-000-000'
                                    className='flex-1 w-full py-[22px] text-lg placeholder:text-lg rounded-lg p-5 text-black border  leading-[24px] outline-none text-[#1A1A1A]/50'
                                />
                            </FormControl>
                            <FormMessage className='font-medium text-base' />
                        </FormItem>
                    )}
                  />
                </div>
                <div className='flex flex-col items-center w-full justify-center gap-3 md:flex-row md:justify-center'>
                  <FormField 
                    control={form.control}
                    name='companyName'
                    render={({ field }) => (
                        <FormItem className='w-full'>
                            <FormLabel htmlFor='companyName' className=' font-medium text-base'>Company name</FormLabel>
                            <FormControl className='w-full'>
                                <Input
                                    {...field}
                                    disabled={isPending}
                                    type='text'
                                    id='companyName'
                                    placeholder='Company name'
                                    className='flex-1 w-full text-lg p-5 rounded-lg py-[22px] text-black border placeholder:text-lg leading-[24px] outline-none text-[#1A1A1A]/50'
                                />
                            </FormControl>
                            <FormMessage className='font-medium text-base' />
                        </FormItem>
                    )}
                  />
                 <FormField 
                        control={form.control}
                        name='status'
                        render={({ field }) => (
                            <FormItem className='w-full'>
                                <FormLabel htmlFor='status' className=' font-medium text-base'>Status</FormLabel>
                                <FormControl className='w-full'>
                                <Select
                                    className='border py-2 w-full px-4 text-lg outline-none rounded-[8px] border-[#D0D5DD]  text-[#1A1A1A]/50'
                                    {...field} defaultValue="Employer">
                                    <option value="" hidden>
                                        Employer
                                    </option>
                                    <option value="Employer">
                                        Employer
                                    </option>
                                    <option value="Job Seeker" >
                                        Job Seeker
                                    </option>   
                                </Select>
                                </FormControl>
                                <FormMessage className='font-medium text-base' />
                            </FormItem>
                        )}
                    />
                </div>
                <FormSubmitButton type='submit' className='bg-mainColor rounded-[8px] text-white text-lg leading-[24px] font-medium w-full' >
                    Request Sample
                </FormSubmitButton>
            </div>
            </form>
        </Form>
    </div>
  )
}
