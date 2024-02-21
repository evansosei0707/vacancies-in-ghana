"use client";

import React, { useState, useEffect, useTransition } from 'react';
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
import { RegisterStep1Schema } from '@/schemas';
import { useForm } from 'react-hook-form';
import { regionInGhana } from '@/app/lib/helper';
import { zodResolver } from '@hookform/resolvers/zod';
import { signUpSet1 } from '@/actions/login';


interface SignUpFormStep1Props {
  handleNext: () => void;
}

export default function SignUpFormStep1({ handleNext }: SignUpFormStep1Props) {
  const [error, setError] = useState< string | undefined >();
  const [success, setSuccess] = useState< string | undefined >();
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof RegisterStep1Schema>>({
    resolver: zodResolver(RegisterStep1Schema),
    defaultValues: {
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        location: "",
        gender: "",
        dateOfBirth: "",
        countryCode: "",
        mobileNumber: "",
    }
});

const onSubmit = (values: z.infer<typeof RegisterStep1Schema>) => {
  setError("");
  setSuccess("");
  startTransition(() => {
      signUpSet1(values).then((data) => {
              setError(data.error);
              setSuccess(data.success);
          })
  })
}

const {
   handleSubmit,
   watch,
   trigger,
   control
} = form;


useEffect(() => {
  if(success) {
    handleNext();
  }

},[success, handleNext]);




  return (
    <div className='flex-col items-center w-full md:w-[80%] mt-7 justify-center gap-6'>
      <Form {...form} >
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='items-start mx-auto flex flex-col w-[90%] mt-9 justify-start gap-4'>
                <p className=' font-medium text-[24px]  w-[80%] text-left leading-5'>Account Information</p>
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
                                    className='flex-1 w-full text-[20px] p-5 text-black border placeholder:text-[20px] leading-[24px] outline-none text-[#1A1A1A]/50'
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
                                    className='flex-1 w-full text-[20px] p-5 text-black border placeholder:text-[20px] leading-[24px] outline-none text-[#1A1A1A]/50'
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
                                    className='flex-1 w-full text-[22px] p-5 text-black border placeholder:text-[20px] leading-[24px] outline-none text-[#1A1A1A]/50'
                                />
                            </FormControl>
                            <FormMessage className='font-medium text-base' />
                        </FormItem>
                    )}
                  />
                  <FormField 
                    control={form.control}
                    name='password'
                    render={({ field }) => (
                        <FormItem className='w-full'>
                            <FormLabel htmlFor='password' className=' font-medium text-base'>Password</FormLabel>
                            <FormControl className='w-full'>
                                <Input
                                    {...field}
                                    disabled={isPending}
                                    type='password'
                                    id='password'
                                    className='flex-1 w-full text-[22px] p-5 text-black border placeholder:text-[20px] leading-[24px] outline-none text-[#1A1A1A]/50'
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
                            <FormLabel htmlFor='countryCode' className=' font-medium text-base'> Country Code</FormLabel>
                            <FormControl className='w-full'>
                                <Input
                                    {...field}
                                    disabled={isPending}
                                    type='text'
                                    id='countryCode'
                                    className='flex-1 w-full text-[22px] p-5 text-black border placeholder:text-[20px] leading-[24px] outline-none text-[#1A1A1A]/50'
                                />
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
                                    type='text'
                                    id='mobileNumber'
                                    className='flex-1 w-full text-[22px] p-5 text-black border placeholder:text-[20px] leading-[24px] outline-none text-[#1A1A1A]/50'
                                />
                            </FormControl>
                            <FormMessage className='font-medium text-base' />
                        </FormItem>
                    )}
                  />
                </div>
            </div>
            <div className='items-start mx-auto flex flex-col w-[90%] mt-9 justify-start gap-4'>
              <p className=' font-medium text-[24px]  w-[80%] text-left leading-5'>Personal Information</p>
                <div className='flex flex-col items-center w-full justify-center gap-3 md:flex-row md:justify-center'>
                  <FormField 
                    control={form.control}
                    name='dateOfBirth'
                    render={({ field }) => (
                        <FormItem className='w-full'>
                            <FormLabel htmlFor='dateOfBirth' className=' font-medium text-base'>Date of Birth</FormLabel>
                            <FormControl className='w-full'>
                                <Input
                                    {...field}
                                    disabled={isPending}
                                    type='date'
                                    id='dateOfBirth'
                                    className='flex-1 w-full text-[16px] p-5 text-black border placeholder:text-[20px] leading-[24px] outline-none text-[#1A1A1A]/50'
                                />
                            </FormControl>
                            <FormMessage className='font-medium text-base' />
                        </FormItem>
                    )}
                  />
                  <FormField 
                    control={form.control}
                    name='gender'
                    render={({ field }) => (
                        <FormItem className='w-full'>
                            <FormLabel htmlFor='gender' className=' font-medium text-base'>Gender</FormLabel>
                            <FormControl className='w-full'>
                              <select
                                className='flex-1 w-full text-[16px] rounded-md p-4 py-3 border placeholder:text-[20px] leading-[24px] outline-none text-[#1A1A1A]/50'
                                {...field} defaultValue="">
                                <option value="" hidden>
                                    Select an option
                                </option>
                                <option value="Male">
                                    Male
                                </option>
                                <option value="Female" >
                                    Female
                                </option>
                                <option value="Other" hidden>
                                    Other
                                </option>
                                  
                              </select>
                            </FormControl>
                            <FormMessage className='font-medium text-base' />
                        </FormItem>
                    )}
                  />
                  <FormField 
                    control={form.control}
                    name='location'
                    render={({ field }) => (
                        <FormItem className='w-full'>
                            <FormLabel htmlFor='gender' className=' font-medium text-base'>Location(Region)</FormLabel>
                            <FormControl className='w-full'>
                              <select 
                                className='flex-1 w-full text-[16px] rounded-md p-4 py-3  border placeholder:text-[20px] leading-[24px] outline-none text-[#1A1A1A]/50'
                                {...field} defaultValue="">
                                <option value="" hidden>
                                    Select your region
                                </option>
                                {
                                  regionInGhana.map((region, idx) => (
                                    <option key={idx} value={region}>{region}</option>
                                  ))
                                }
                              </select>
                            </FormControl>
                            <FormMessage className='font-medium text-base' />
                        </FormItem>
                    )}
                  />
                </div>
            </div>
            <div className='items-center mx-auto flex flex-col w-[90%] mt-9 justify-start gap-4'>
              <button type='submit' className='w-full cursor-pointer bg-[#008080] hover:bg-black mt-6 mb-8 text-white font-medium text-xl leading-[24px] rounded-md md:max-w-[400px] flex items-center justify-center  h-[50px]'>
                  <span>Next</span>
              </button>
            </div>
        </form>
    </Form>
    </div>
  )
}
