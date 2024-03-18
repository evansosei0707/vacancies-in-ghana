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
import { PostJobSchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { currentJobFunction, desiredJobFunction, jobQualifications, yearsOfExperience } from '@/app/lib/helper';
import { typeOfEmployment } from '@/app/data/jobFilters';
import LoadingButton from '@/components/LoadingButton';




interface PostFormStep1Props {
  handleNext: () => void;
}

export default function PostFormStep1({handleNext }: PostFormStep1Props) {

  const [error, setError] = useState< string | undefined >();
  const [success, setSuccess] = useState< string | undefined >();
  const [isPending, startTransition] = useTransition();
  const [selectedOption, setSelectedOption] = useState();
  const form = useForm<z.infer<typeof PostJobSchema>>({
    resolver: zodResolver(PostJobSchema),
    defaultValues: {
      jobTitle: '',
      jobFunction: '',
      qualifications: [ { value: undefined, label: '' }],
      workspaceType: '',
      experienceLevel: '',
      jobType: '',
      jobPostPeriod: '',
    }
});

const onSubmit = (values: z.infer<typeof PostJobSchema>) => {
  // setError("");
  // setSuccess("");
  // startTransition(() => {
  //     signUpSet2(values)
  // })
  // console.log(values)
  alert(JSON.stringify(values, null,2))
}

const {
   handleSubmit,
   watch,
   trigger,
   formState: { isSubmitting},
   control
} = form;



return (
    <div className='flex-col items-center w-full h-full mt-7 mx-auto justify-center gap-6'>
      <Form {...form} >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='items-start mx-auto flex flex-col w-[90%] mt-9 justify-start gap-12'>
            <p className=' font-medium text-[24px]  w-[80%] text-left leading-5'>Job details</p>
              <div className='flex flex-col items-center w-full justify-center gap-5 md:gap-9 md:flex-row md:justify-center'>
                <FormField 
                    control={form.control}
                    name='jobTitle'
                    render={({ field }) => (
                        <FormItem className='w-full'>
                            <FormLabel htmlFor='jobTitle' className=' font-medium text-base'>Job title</FormLabel>
                            <FormControl className='w-full'>
                            <CustomSelect {...field}
                              className="border py-2 w-full px-4  text-[#1A1A1A]/50 outline-none rounded-[8px] border-[#D0D5DD]"

                            defaultValue="">
                              {jobQualifications.map((jobQua, idx) => (
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
                    name='jobFunction'
                    render={({ field }) => (
                        <FormItem className='w-full'>
                            <FormLabel htmlFor='jobFunction' className=' font-medium text-base'>Job function</FormLabel>
                            <FormControl className='w-full'>
                            <CustomSelect
                                className="border py-2 w-full px-4  text-[#1A1A1A]/50 outline-none rounded-[8px] border-[#D0D5DD]"

                              {...field} defaultValue="">
                              <option value="Select years of experience" hidden>
                                  Select years of experience
                              </option>
                              {typeOfEmployment.filters.map((jobQua, idx) => (
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
                    name='jobType'
                    render={({ field }) => (
                        <FormItem className='w-full'>
                            <FormLabel htmlFor='jobType' className=' font-medium text-base'>Job Type</FormLabel>
                            <FormControl className='w-full'>
                            <CustomSelect
                                className="border py-2 w-full px-4  text-[#1A1A1A]/50 outline-none rounded-[8px] border-[#D0D5DD]"

                              {...field} defaultValue="">
                              <option value="Select years of experience" hidden>
                                  Select years of experience
                              </option>
                              {yearsOfExperience.map((jobQua, idx) => (
                                <option key={idx} value={jobQua}>{jobQua}</option>
                              ))}
                            </CustomSelect>
                            </FormControl>
                            <FormMessage className='font-medium text-base' />
                        </FormItem>
                    )}
                  />
              </div>
              <div className='flex flex-col items-center w-full justify-center gap-5 md:gap-9 md:flex-row md:justify-center'>
                  <FormField 
                        control={form.control}
                        name='workspaceType'
                        render={({ field }) => (
                            <FormItem className='w-full'>
                                <FormLabel htmlFor='workspaceType' className=' font-medium text-base'>Job location Type</FormLabel>
                                <FormControl className='w-full'>
                                <CustomSelect 
                                    className="border py-2 w-full px-4  text-[#1A1A1A]/50 outline-none rounded-[8px] border-[#D0D5DD]"

                                  {...field} defaultValue="">
                                  <option value="Select your current job function" hidden>
                                      Select a job function
                                  </option>
                                  {currentJobFunction.map((jobQua, idx) => (
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
                          name='experienceLevel'
                          render={({
                            field,                      }
                            ) => (
                              <FormItem className='w-full'>
                                  <FormLabel htmlFor='experienceLevel' className=' font-medium text-base'>Experience</FormLabel>
                                  <FormControl className='w-full'>
                                    <CustomSelect 
                                      className="border py-2 w-full px-4  text-[#1A1A1A]/50 outline-none rounded-[8px] border-[#D0D5DD]"
                                      {...field} defaultValue="">
                                      <option value="Select your current job function" hidden>
                                      Select a job function
                                      </option>
                                      {currentJobFunction.map((jobQua, idx) => (
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
                          name='jobPostPeriod'
                          render={({
                            field,                      }
                            ) => (
                              <FormItem className='w-full'>
                                  <FormLabel htmlFor='jobPostPeriod' className=' font-medium text-base'>Job post period</FormLabel>
                                  <FormControl className='w-full'>
                                    <CustomSelect 
                                      className="border py-2 w-full px-4  text-[#1A1A1A]/50 outline-none rounded-[8px] border-[#D0D5DD]"
                                      {...field} defaultValue="">
                                      <option value="Select your current job function" hidden>
                                      Select a job function
                                      </option>
                                      {currentJobFunction.map((jobQua, idx) => (
                                      <option key={idx} value={jobQua}>{jobQua}</option>
                                  ))}
                                  </CustomSelect>
                                  </FormControl>
                                  <FormMessage className='font-medium text-base' />
                              </FormItem>
                          )}
                        />
                
              </div>
              <div className='flex flex-col items-center w-[40%] justify-center gap-3 md:flex-row md:justify-center'>
                {/* <FormField 
                      control={form.control}
                      name='qualifications'
                      render={({
                        field: { onChange, onBlur, value, name, ref },                      }
                        ) => (
                          <FormItem className='w-full'>
                              <FormLabel htmlFor='desiredJobFunction' className=' font-medium text-base'>Qualification</FormLabel>
                              <FormControl className='w-full'>
                              <Select
                                  options={desiredJobFunction}
                                  onChange={onChange}
                                  isMulti={true}
                                  value={value}
                                  onBlur={onBlur}
                                  ref={ref}
                              />
                              </FormControl>
                              <FormMessage className='font-medium text-base' />
                          </FormItem>
                      )}
                    /> */}
                {/* <FormField 
                    control={form.control}
                    name='availability'
                    render={({ field }) => (
                        <FormItem className='w-full'>
                            <FormLabel htmlFor='gender' className=' font-medium text-base'>Availability</FormLabel>
                            <FormControl className='w-full'>
                              <CustomSelect
                              {...field}
                              defaultValue=""
                              className="border py-2 w-full px-4  text-[#1A1A1A]/50 outline-none rounded-[8px] border-[#D0D5DD]"

                              >
                                  <option value="How ready are you?" hidden>
                                      How ready are you?
                                  </option>
                                  {availability.map((jobQua, idx) => (
                                  <option key={idx} value={jobQua}>{jobQua}</option>
                              ))}
                                    
                              </CustomSelect>
                            </FormControl>
                            <FormMessage className='font-medium text-base' />
                        </FormItem>
                    )}
                  /> */}
                    {/* <FormField 
                      control={form.control}
                      name='uploadCv'
                      render={({ field : { value, ...fieldValues} }) => (
                        <FormItem className='w-full'>
                        <FormLabel htmlFor='uploadCv' className=' font-medium text-base'>Upload CV/Resume</FormLabel>
                        <FormControl className='w-full'>
                            <input
                                {...fieldValues}
                                type='file'
                                placeholder='upload your CV/Resume'
                                id='uploadCv'
                                accept="application/pdf, application/docx"
                                onChange={(e) => {
                                  const file =  e.target.files?.[0]
                                  fieldValues.onChange(file)
                                  console.log(file)
                                }}
                                className='flex-1 w-full text-[15px] rounded-md p-4 py-2 border placeholder:text-[20px] leading-[24px] outline-none text-[#1A1A1A]/50'
                            />
                        </FormControl>
                        <FormMessage className='font-medium text-base' />
                    </FormItem>
                      )}
                    /> */}
              </div>
            </div>
            <div className='flex flex-col items-center w-full pb-5 justify-center gap-3 md:pr-10 md:flex-row md:justify-end'>
              <LoadingButton
                type='submit'
                loading={isSubmitting}
                className=' text-xl leading-[24px] bg-mainColor px-16 rounded-md text-white py-3'
              >
                  Next
              </LoadingButton>
            </div>
          </form>
      </Form>
    </div>

)}