"use client";

import React, { useState, useTransition } from 'react';
import Select from 'react-select';



import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
 } from '@/components/ui/form';
 import { SubmitHandler, UseFormReturn, useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import CustomSelect from '@/components/ui/select';
import { PostJobSchema2 } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { currentJobFunction, desiredJobFunction, jobQualifications, yearsOfExperience } from '@/app/lib/helper';
import RichTextEditor from '@/components/RichTextEditor';
import { draftToMarkdown } from 'markdown-draft-js';
import LoadingButton from '@/components/LoadingButton';




interface PostFormStep2Props {
  handleNext: () => void;
}

export default function PostFormStep2({handleNext }: PostFormStep2Props) {

  const [error, setError] = useState< string | undefined >();
  const [success, setSuccess] = useState< string | undefined >();
  const [isPending, startTransition] = useTransition();
  const [selectedOption, setSelectedOption] = useState();
  const form = useForm<z.infer<typeof PostJobSchema2>>({
    resolver: zodResolver(PostJobSchema2),
    defaultValues: {
     description: ''
    }
});

const onSubmit = (values: z.infer<typeof PostJobSchema2>) => {
  // setError("");
  // setSuccess("");
  // startTransition(() => {
  //     signUpSet2(values)
  // })
  console.log(values)
}

const {
  handleSubmit,
  watch,
  setFocus,
  trigger,
  formState: { isSubmitting },
  control,

} = form;



return (
  <div className='flex-col items-center w-full h-full my-7 mx-auto justify-center gap-6'>
  <Form {...form} >
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='items-start mx-auto flex flex-col w-[90%] mt-9 justify-start gap-12'>
        <p className=' font-medium text-[24px]  w-[80%] text-left leading-5'>Job description</p>
          <div className='flex flex-col items-center w-full justify-center gap-5 md:gap-9 md:flex-row md:justify-center'>
            <FormField 
                control={form.control}
                name='description'
                render={({ field }) => (
                    <FormItem className='w-full'>
                        <FormLabel onClick={() => setFocus("description")} className=' font-medium text-lg'>Description</FormLabel>
                        <FormControl className='w-full'>
                          <RichTextEditor
                            onChange={ draft => field.onChange(draftToMarkdown(draft))}
                            ref={field.ref}
                          />
                        </FormControl>
                        <FormMessage className='font-medium text-base' />
                    </FormItem>
                )}
              />
          </div>
        </div>
        <div className='w-full flex justify-end px-10 mt-6'>
            <LoadingButton className='bg-mainColor w-[189px] h-[45px]  text-white rounded-md' type='submit' loading={isSubmitting} >
              Post a job
            </LoadingButton>
        </div>
      </form>
    </Form>
  </div>
)}

