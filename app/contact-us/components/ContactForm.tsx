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
import { ContactSchema } from '@/schemas';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signUpSet1 } from '@/actions/login';
import { FaRegUser } from "react-icons/fa";
import CustomSelect from '@/components/ui/select';
import { GoMail } from "react-icons/go";
import FormSubmitButton from '@/components/FormSubmitButton';



export default function ContactForm() {

    const countryCodes = [
        "+233",
        "+234",
        "+235",
    ]

    const [error, setError] = useState< string | undefined >();
    const [success, setSuccess] = useState< string | undefined >();
    const [isPending, startTransition] = useTransition();
    const form = useForm<z.infer<typeof ContactSchema>>({
      resolver: zodResolver(ContactSchema),
      defaultValues: {
          email: "",
          countryCode: "+233",
          name: '',
          phoneNumber: ''
      }
  });
  
  const onSubmit = (values: z.infer<typeof ContactSchema>) => {
    setError("");
    setSuccess("");
    //     startTransition(() => {
    //         signUpSet1(values).then((data) => {
    //                 setSuccess(data.success);
    //                 setError(data.error);
    //                 console.log(data.error)
    //                 console.log(data.success)
    //             })
    //     })
    }
  
  const {
     handleSubmit,
     watch,
     trigger,
     control
  } = form;
  
  



  return (
    <div className='flex-col items-center w-full md:w-[50%] justify-center gap-6'>
     <Form {...form} >
      <form onSubmit={handleSubmit(onSubmit)}>
            <div className='items-start mx-auto flex flex-col w-[90%] mt-9 justify-start gap-4'>
                <FormField 
                  control={form.control}
                  name='name'
                  render={({ field }) => (
                      <FormItem className='w-full'>
                          <FormControl className='w-full'>
                                <div className='flex px-3 items-center text-[18px] leading-[24px] text-[#A0A0A0] border-[#D0D5DD] w-full py-1 shadow-sm justify-center outline-[#008080] border rounded-[8px] '>
                                    <FaRegUser />
                                    <input
                                        {...field}
                                        disabled={isPending}
                                        type='text'
                                        className='flex-1 p-3 w-full placeholder:text-[18px] placeholder:leading-[28px] placeholder:text-[#A0A0A0] outline-none '
                                        placeholder='Full name'
                                    />
                                </div>
                          </FormControl>
                          <FormMessage className='font-medium text-base' />
                      </FormItem>
                  )}
                />
                <FormField 
                  control={form.control}
                  name='email'
                  render={({ field }) => (
                      <FormItem className='w-full'>
                          <FormControl className='w-full'>
                                <div className='flex px-3 items-center text-[18px] leading-[24px] text-[#A0A0A0] border-[#D0D5DD] w-full py-1 shadow-sm justify-center outline-[#008080] border rounded-[8px]'>
                                    <GoMail />
                                    <input
                                        {...field}
                                        disabled={isPending}
                                        type='email'
                                        className='flex-1 p-3 w-full outline-none '
                                        placeholder='Email'
                                    />
                                </div>
                          </FormControl>
                          <FormMessage className='font-medium text-base' />
                      </FormItem>
                  )}
                />
                <div className='flex px-3 items-center text-[18px] leading-[24px] text-[#A0A0A0] border-[#D0D5DD] w-full py-1 shadow-sm justify-center outline-[#008080] border rounded-[8px]'>
                        <FormField 
                        control={form.control}
                        name='countryCode'
                        render={({ field }) => (
                            <FormItem className='w-[120px]'>
                                <FormControl className='w-full'>
                                <CustomSelect 
                                    className="py-2 w-full px-4 border-none border-r  text-[#1A1A1A]/50 outline-none rounded-[8px] border-[#D0D5DD]"

                                {...field} defaultValue="+233">
                                <option value="Select number of personnels" >
                                    +233
                                </option>
                                {countryCodes.map((jobQua, idx) => (
                                    <option key={idx} value={jobQua}>{jobQua}</option>
                                ))}
                            </CustomSelect>
                                </FormControl>
                                <FormMessage className='font-medium text-base' />
                            </FormItem>
                        )}
                        />
                        <FormField 
                        control={form.control}
                        name='phoneNumber'
                        render={({ field }) => (
                            <FormItem className='w-full'>
                                <FormControl className='w-full'>
                                    <input
                                        {...field}
                                        disabled={isPending}
                                        type='email'
                                        className='flex-1 border-l-2 border-0 p-3 w-full outline-none '
                                        placeholder='000-000-000'
                                    />
                                </FormControl>
                                <FormMessage className='font-medium text-base' />
                            </FormItem>
                        )}
                        />
                </div>
                <FormField 
                  control={form.control}
                  name='message'
                  render={({ field }) => (
                      <FormItem className='w-full'>
                          <FormControl className='w-full'>
                                    <textarea
                                        {...field}
                                        disabled={isPending}
                                        className='flex px-3  text-[18px] leading-[24px] text-[#A0A0A0] border-[#D0D5DD] w-full min-h-[150px] items-start justify-start outline-[#008080] border shadow-sm rounded-[8px] p-2 '
                                        placeholder='Message here!'
                                    />
                          </FormControl>
                          <FormMessage className='font-medium text-base' />
                      </FormItem>
                  )}
                />
                <FormSubmitButton className=' text-[24px] w-full h-[54px] rounded-[5px] leading-[29px] bg-mainColor font-medium text-white' type='submit' >Send message</FormSubmitButton>
            </div>
        </form>
    </Form>
  </div>
  )
}
