"use client";
import eyeLogo from '@/public/Icon.png'
import mailLogo from '@/public/mail.png'
import frameLogo from '@/public/Frame.png'
import Link from 'next/link'
import Image from 'next/image';
import { useState, useTransition } from 'react';
import * as z from 'zod';
import { LoginSchema } from '@/schemas';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import {
     Form,
     FormControl,
     FormField,
     FormItem,
     FormLabel,
     FormMessage,
    } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { login } from '@/actions/login';
import FormSuccess from './FormSuccess';
import FormError from './FormError';


export default function LoginForm() {
    const [isPending, startTransition] = useTransition();
    const [error, setError] = useState< string | undefined >('')
    const [success, setSuccess] = useState< string | undefined >('')
    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    });

    const onSubmit = (values: z.infer<typeof LoginSchema>) => {
        setError("");
        setSuccess("");
        startTransition(() => {
            login(values).then((data) => {
                    setError(data.error);
                    setSuccess(data.success);
                })
        })
    }

  return (
    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col items-start w-full justify-center gap-4' >
        <FormField 
            control={form.control}
            name='email'
            render={({ field }) => (
                 <FormItem className='w-full'>
                    <FormLabel htmlFor='email' className=' font-medium text-base'>Email</FormLabel>
                    <FormControl className='w-full'>
                    <div className='flex px-3 items-center w-full justify-center outline-[#008080] border rounded-md p-2 '>
                        <Image
                            src={mailLogo}
                            width={17}
                            height={13}
                            alt='mail-icon'
                        />
                        <Input
                            {...field}
                            disabled={isPending}
                            type='email'
                            id='email'
                            className='flex-1 p-3 w-full text-[22px] text-black placeholder:text-[20px] leading-[24px] outline-none text-[#1A1A1A]/50'
                            placeholder='eg.support@gmail.com'
                        />
                    </div>
                    </FormControl>
                    <FormMessage className='font-medium text-base' />
                 </FormItem>
            )}
        />
        <FormField 
            control={form.control}
            name="password"
            render={({ field }) => (
                 <FormItem className='w-full'>
                    <FormLabel htmlFor='password' className='text-base font-medium'>Password</FormLabel>
                    <FormControl className='w-full'>
                    <div className='flex items-center w-full justify-center border focus-visible:border-[#008080] rounded-md p-2 '>
                        <Image
                            src={frameLogo}
                            width={20}
                            height={20}
                            className=''
                            alt='password-icon'
                        />
                        <Input 
                            {...field}
                            disabled={isPending}
                            type="password"
                            id='password'
                            className='flex-1 p-3 w-full placeholder:text-[20px] text-black outline-none leading-[24px] text-[22px] text-[#1A1A1A]/50'
                            placeholder='*********'
                        />
                         <Image
                            src={eyeLogo}
                            width={20}
                            height={20}
                            alt='mail-icon'
                        />
                    </div>
                    </FormControl>
                    <FormMessage className='font-medium text-base' />
                 </FormItem>
            )}
        />
            <div className='flex items-center lg:px-2 px-0 justify-between w-full'>
                <div className=' flex items-center mt-2 justify-center  gap-4'>
                    <input 
                        type="checkbox"
                        id='remember'
                    />
                    <label htmlFor="remember" className=' font-medium text-[15px] text-[#111111]/50 '>Remember me</label>
                </div>
                <p className=' text-[#008080] cursor-pointer leading-[24px] hover:underline '>Forgot Password?</p>
            </div>
            <FormSuccess message={success} />
            <FormError message={error} />
            <Button disabled={isPending} size={'lg'}  type='submit' className=' bg-[#008080] mt-5 text-white text-xl leading-[24px] rounded-sm py-4 px-2 w-full'>Log In</Button>
            <Link href='/account/' className="font-medium mx-auto mt-3 mb-6 text-center text-[#6E6E6E]">Don&apos;t have account? <span className='text-[#008080] hover:underline'>Get Started</span></Link>
        </form>  
    </Form>
  )
}
