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
import { RegisterStep2Schema } from '@/schemas';
import { GoArrowRight } from "react-icons/go";
import Link from 'next/link';
import { signUpSet2 } from '@/actions/login';
import { zodResolver } from '@hookform/resolvers/zod';
import { availability, currentJobFunction, jobQualifications, yearsOfExperience } from '@/app/lib/helper';
import { desiredJobFunction } from '@/app/lib/helper';




interface SignUpFormStep2Props {
  handleNext: () => void;
}

export default function SignUpFormStep2({handleNext }: SignUpFormStep2Props) {

  const [error, setError] = useState< string | undefined >();
  const [success, setSuccess] = useState< string | undefined >();
  const [isPending, startTransition] = useTransition();
  const [selectedOption, setSelectedOption] = useState();
  const form = useForm<z.infer<typeof RegisterStep2Schema>>({
    resolver: zodResolver(RegisterStep2Schema),
    defaultValues: {
      experience: '',
      currentJobFunction: '',
      desiredJobFunction: [ { value: '', label: '' }],
      availability: '',
      qualification: '',
      reviewCheckbox: true,
    }
});

const onSubmit = (values: z.infer<typeof RegisterStep2Schema>) => {
  setError("");
  setSuccess("");
  startTransition(() => {
      signUpSet2(values).then((data) => {
              setError(data.error);
              setSuccess(data.success);
          })
  })
  console.log(values)
}

const {
   handleSubmit,
   watch,
   trigger,
   control
} = form;

  return (
    <div className='flex-col items-center w-full md:w-[80%] mt-7 justify-center gap-6'>
       <Form {...form} >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='items-start mx-auto flex flex-col w-[90%] mt-9 justify-start gap-4'>
            <p className=' font-medium text-[24px]  w-[80%] text-left leading-5'>Work information</p>
              <div className='flex flex-col items-center w-full justify-center gap-3 md:flex-row md:justify-center'>
                <FormField 
                    control={form.control}
                    name='qualification'
                    render={({ field }) => (
                        <FormItem className='w-full'>
                            <FormLabel htmlFor='gender' className=' font-medium text-base'>Highest Qualification</FormLabel>
                            <FormControl className='w-full'>
                            <select {...field}
                              className='flex-1 w-full text-[16px] rounded-md p-4 py-3 border placeholder:text-[20px] leading-[24px] outline-none text-[#1A1A1A]/50'

                            defaultValue="">
                              {jobQualifications.map((jobQua, idx) => (
                                <option key={idx} value={jobQua}>{jobQua}</option>
                              ))}
                            </select>
                            </FormControl>
                            <FormMessage className='font-medium text-base' />
                        </FormItem>
                    )}
                  />
                  <FormField 
                    control={form.control}
                    name='experience'
                    render={({ field }) => (
                        <FormItem className='w-full'>
                            <FormLabel htmlFor='gender' className=' font-medium text-base'>Years of experience</FormLabel>
                            <FormControl className='w-full'>
                            <select 
                              className='flex-1 w-full text-[16px] rounded-md p-4 py-3 border placeholder:text-[20px] leading-[24px] outline-none text-[#1A1A1A]/50'

                              {...field} defaultValue="">
                              <option value="Select years of experience" hidden>
                                  Select years of experience
                              </option>
                              {yearsOfExperience.map((jobQua, idx) => (
                                <option key={idx} value={jobQua}>{jobQua}</option>
                              ))}
                            </select>
                            </FormControl>
                            <FormMessage className='font-medium text-base' />
                        </FormItem>
                    )}
                  />
              </div>
              <div className='flex flex-col items-center w-full justify-center gap-3 md:flex-row md:justify-center'>
              <FormField 
                    control={form.control}
                    name='currentJobFunction'
                    render={({ field }) => (
                        <FormItem className='w-full'>
                            <FormLabel htmlFor='currentJobFunction' className=' font-medium text-base'>Current job function</FormLabel>
                            <FormControl className='w-full'>
                            <select 
                              className='flex-1 w-full text-[16px] rounded-md p-4 py-3 border placeholder:text-[20px] leading-[24px] outline-none text-[#1A1A1A]/50'

                              {...field} defaultValue="">
                              <option value="Select your current job function" hidden>
                                  Select a job function
                              </option>
                              {currentJobFunction.map((jobQua, idx) => (
                                <option key={idx} value={jobQua}>{jobQua}</option>
                              ))}
                            </select>
                            </FormControl>
                            <FormMessage className='font-medium text-base' />
                        </FormItem>
                    )}
                  />
              <FormField 
                    control={form.control}
                    name='desiredJobFunction'
                    render={({
                      field: { onChange, onBlur, value, name, ref },                      }
                      ) => (
                        <FormItem className='w-full'>
                            <FormLabel htmlFor='desiredJobFunction' className=' font-medium text-base'>Desired job function</FormLabel>
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
                  />
                
              </div>
              <div className='flex flex-col items-center w-full justify-center gap-3 md:flex-row md:justify-center'>
              <FormField 
                    control={form.control}
                    name='availability'
                    render={({ field }) => (
                        <FormItem className='w-full'>
                            <FormLabel htmlFor='gender' className=' font-medium text-base'>Availability</FormLabel>
                            <FormControl className='w-full'>
                              <select 
                              {...field}
                              defaultValue=""
                              className='flex-1 w-full text-[16px] rounded-md p-4 py-3 border placeholder:text-[20px] leading-[24px] outline-none text-[#1A1A1A]/50'

                              >
                                  <option value="How ready are you?" hidden>
                                      How ready are you?
                                  </option>
                                  {availability.map((jobQua, idx) => (
                                  <option key={idx} value={jobQua}>{jobQua}</option>
                              ))}
                                    
                              </select>
                            </FormControl>
                            <FormMessage className='font-medium text-base' />
                        </FormItem>
                    )}
                  />
                    {/* <FormField 
                      control={form.control}
                      name='uploadCv'
                      render={({ field : { value, ...fieldValues} }) => (
                        <FormItem className='w-full'>
                        <FormLabel htmlFor='uploadCv' className=' font-medium text-base'>Upload CV/Resume</FormLabel>
                        <FormControl className='w-full'>
                            <input
                                {...fieldValues}
                                disabled={isPending}
                                type='file'
                                placeholder='upload your CV/Resume'
                                id='uploadCv'
                                onChange={(e) => {
                                  const file =  e.target.files?.[0]
                                  fieldValues.onChange(file)
                                }}
                                className='flex-1 w-full text-[16px] rounded-md p-4 py-2 border placeholder:text-[20px] leading-[24px] outline-none text-[#1A1A1A]/50'
                            />
                        </FormControl>
                        <FormMessage className='font-medium text-base' />
                    </FormItem>
                      )}
                    /> */}
              </div>
              <div className='border w-full mt-9 px-3 py-2 flex flex-col items-start gap-4 justify-center rounded-md'>
                <p className='text-[#1A1A1A] font-semibold'>Would you like a free CV review?</p>
                <p className='text-[#6E6E6E]/80 leading-[22px] font-[300]'>Subscribe and receive a free CV review from our experts and know how to best stand out to employers.</p>
                <div className='flex items-center justify-center gap-6'>
                  {/* <FormField 
                        control={form.control}
                        name='reviewCheckbox'
                        render={({ field }) => (
                          <FormItem className='w-full flex flex-row-reverse items-center justify-center gap-3'>
                          <FormLabel htmlFor='reviewCheckbox' className=' font- text-sm text-[#6E6E6E]/80 leading-[24px] font-light'>I would like a free CV review</FormLabel>
                          <FormControl className='w-max'>
                          <Input   {...field} type='checkbox' id='reviewCheckbox'  className='  border-gray-500   data-[state=checked]:border-none w-4 bg-[#008080] h-4 data-[state=checked]:bg-[#008080]'/>
                          </FormControl>
                          <FormMessage className='font-medium text-base' />
                      </FormItem>
                        )}
                    /> */}
                    <input id='1' type="checkbox" />
                    <label htmlFor="1">I would like a free CV review</label>

                    <Link href="/services/cv-resume-review" className="flex text-[#008080] hover:underline text-sm whitespace-nowrap items-center justify-center gap-4" >
                      Read more <GoArrowRight color='#008080' />
                    </Link>
                </div>
              
              </div>
              <div className='w-full mt-9 px-3 py-2 flex flex-col items-start gap-4 justify-center '>
                    {/* <FormField 
                        control={form.control}
                        name='termsCheckbox'
                        render={({ field }) => (

                          <FormItem className='w-full flex flex-row-reverse items-center justify-end gap-3'>
                            <FormLabel htmlFor='termsCheckbox' className=' text-[17px] text-[#6E6E6E]/90 leading-[24px] font-light'>
                            By clicking "Create Your Account", you agree to our <Link className=' font-normal hover:underline text-[#008080]' href={'/terms-and-condition'}>Terms</Link> and  <Link className=' font-normal hover:underline text-[#008080]' href={'privacy-policy'}>Policy</Link>  Policy.
                            </FormLabel>
                            <FormControl className='w-max'>
                              <Input   {...field} type='checkbox' id='termsCheckbox'  className='  border-gray-500   data-[state=checked]:border-none w-4 h-4 data-[state=checked]:bg-[#008080]'/>
                            </FormControl>
                          <FormMessage className='font-medium text-base' />
                      </FormItem>
                        )}
                    /> */}

                    {/* <FormField 
                        control={form.control}
                        name='signMeCheckbox'
                        render={({ field }) => (

                          <FormItem className='w-full flex flex-row-reverse items-center justify-end gap-3'>
                            <FormLabel htmlFor='signMeCheckbox' className=' text-[17px] text-[#6E6E6E]/90 leading-[24px] font-light'>
                            Sign me up for email and browser job alerts.
                            </FormLabel>
                            <FormControl className='w-max'>
                              <input   {...field} type='checkbox' id='signMeCheckbox'  className='  border-gray-500   data-[state=checked]:border-none w-4 h-4 data-[state=checked]:bg-[#008080]'/>
                            </FormControl>
                          <FormMessage className='font-medium text-base' />
                      </FormItem>
                        )}
                    /> */}

                    
                      <div className=' space-x-3'>
                      <input  id='3' type="checkbox" />
                      <label htmlFor="3">By clicking Create Your Account, you agree to our and Privacy Policy.</label>
                    </div>
                    
                    <div className=' space-x-3'>
                      <input id='2' type="checkbox" />
                      <label htmlFor="2">Sign me up for email and browser Job alerts.</label>
                    </div>
      
              </div>
          </div>
          <button  type='submit' className='w-full cursor-pointer mx-auto mt-14 bg-[#008080] hover:bg-black  mb-8 text-white font-medium text-xl leading-[24px] rounded-md md:max-w-[400px] flex items-center justify-center  h-[50px]'>
              Create Account
          </button>
        </form>
    </Form>
    </div>
  )
}
