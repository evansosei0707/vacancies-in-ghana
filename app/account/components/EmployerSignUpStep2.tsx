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
import { EmployerRegisterSchema2 } from '@/schemas';
import { GoArrowRight } from "react-icons/go";
import Link from 'next/link';
import { zodResolver } from '@hookform/resolvers/zod';
import { availability, currentJobFunction, jobQualifications, yearsOfExperience } from '@/app/lib/helper';
import { desiredJobFunction } from '@/app/lib/helper';
import { employerSignUpSet2 } from '@/actions/employerSignUp';




interface SignUpFormStep2Props {
  handleNext: () => void;
}

export default function EmployerSignUpStep2({handleNext }: SignUpFormStep2Props) {

  const [error, setError] = useState< string | undefined >();
  const [success, setSuccess] = useState< string | undefined >();
  const [isPending, startTransition] = useTransition();
  const [selectedOption, setSelectedOption] = useState();
  const form = useForm<z.infer<typeof EmployerRegisterSchema2>>({
    resolver: zodResolver(EmployerRegisterSchema2),
    defaultValues: {
      companyAddress: '',
      companyLogo: undefined,
      companyEmail: '',
      companyName: '',
      companyPhone: '',
      webUrl: '',
      sector: '',
      personnels: '',
      category: '',
      termsCheckbox: false,
      jobAlert: false,
      jobTips: false,
    }
});

const onSubmit = (values: z.infer<typeof EmployerRegisterSchema2>) => {
  setError("");
  setSuccess("");
  startTransition(() => {
      employerSignUpSet2(values)
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
            <p className=' font-medium text-[24px]  w-[80%] text-left leading-5'>Company information</p>
              <div className='flex flex-col items-center w-full justify-center gap-3 md:flex-row md:justify-center'>
                <FormField 
                    control={form.control}
                    name='companyName'
                    render={({ field }) => (
                        <FormItem className='w-full'>
                            <FormLabel htmlFor='companyName' className=' font-medium text-base'>Company Name</FormLabel>
                            <FormControl className='w-full'>
                                <Input
                                    {...field}
                                    disabled={isPending}
                                    type='text'
                                    id='companyNameName'
                                    placeholder='Company name'
                                    className='flex-1 w-full text-[20px] p-5 text-black border placeholder:text-[20px] leading-[24px] outline-none text-[#1A1A1A]/50'
                                />
                            </FormControl>
                            <FormMessage className='font-medium text-base' />
                        </FormItem>
                    )}
                  />
                  <FormField 
                    control={form.control}
                    name='sector'
                    render={({ field }) => (
                        <FormItem className='w-full'>
                            <FormLabel htmlFor='sector' className=' font-medium text-base'>Sector</FormLabel>
                            <FormControl className='w-full'>
                            <CustomSelect
                                className="border py-2 w-full px-4  text-[#1A1A1A]/50 outline-none rounded-[8px] border-[#D0D5DD]"

                              {...field} defaultValue="">
                              <option value="Choose your sector" hidden>
                                  Choose your sector
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
              <div className='flex flex-col items-center w-full justify-center gap-3 md:flex-row md:justify-center'>
                <FormField 
                    control={form.control}
                    name='personnels'
                    render={({ field }) => (
                        <FormItem className='w-full'>
                            <FormLabel htmlFor='numberOfPersonnes' className=' font-medium text-base'>Number of personnel</FormLabel>
                            <FormControl className='w-full'>
                            <CustomSelect 
                                className="border py-2 w-full px-4  text-[#1A1A1A]/50 outline-none rounded-[8px] border-[#D0D5DD]"

                              {...field} defaultValue="">
                              <option value="Select number of personnels" hidden>
                                  Select number of personnels
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
              <div className='items-start mx-auto flex  rounded-md flex-col w-full mt-9 justify-start gap-4'>
                <p className=' font-medium text-[24px] w-[80%] text-left leading-5'>Company information</p>
                <div className='border-2 rounded-md p-5 w-full flex items-start justify-center gap-2  flex-col '>
            
                  <div className='flex flex-col items-center w-full justify-center gap-3 md:flex-row md:justify-center'>
                    <FormField 
                        control={form.control}
                        name='webUrl'
                        render={({ field }) => (
                            <FormItem className='w-full'>
                                <FormLabel htmlFor='webUrl' className=' font-medium text-base'>Website URL</FormLabel>
                                <FormControl className='w-full'>
                                    <Input
                                        {...field}
                                        disabled={isPending}
                                        type='text'
                                        id='webUrl'
                                        placeholder='www.yourcompanywebsite.com'
                                        className='flex-1 w-full text-[20px] p-5 text-black border placeholder:text-[20px] leading-[24px] outline-none text-[#1A1A1A]/50'
                                    />
                                </FormControl>
                                <FormMessage className='font-medium text-base' />
                            </FormItem>
                        )}
                      />
                      <FormField 
                        control={form.control}
                        name='companyEmail'
                        render={({ field }) => (
                            <FormItem className='w-full'>
                                <FormLabel htmlFor='companyEmail' className=' font-medium text-base'>Company email</FormLabel>
                                <FormControl className='w-full'>
                                  <Input
                                      {...field}
                                      disabled={isPending}
                                      type='email'
                                      id='companyEmail'
                                      placeholder='Company name'
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
                        name='companyName'
                        render={({ field }) => (
                            <FormItem className='w-full'>
                                <FormLabel htmlFor='companyName' className=' font-medium text-base'>Company Name</FormLabel>
                                <FormControl className='w-full'>
                                    <Input
                                        {...field}
                                        disabled={isPending}
                                        type='text'
                                        id='companyNameName'
                                        placeholder='Company name'
                                        className='flex-1 w-full text-[20px] p-5 text-black border placeholder:text-[20px] leading-[24px] outline-none text-[#1A1A1A]/50'
                                    />
                                </FormControl>
                                <FormMessage className='font-medium text-base' />
                            </FormItem>
                        )}
                      />
                      <FormField 
                        control={form.control}
                        name='companyAddress'
                        render={({ field }) => (
                            <FormItem className='w-full'>
                                <FormLabel htmlFor='companyAddress' className=' font-medium text-base'>Company address</FormLabel>
                                <FormControl className='w-full'>
                                <CustomSelect
                                    className="border py-2 w-full px-4  text-[#1A1A1A]/50 outline-none rounded-[8px] border-[#D0D5DD]"

                                  {...field} defaultValue="">
                                  <option value="Choose your sector" hidden>
                                      Choose your sector
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

                  <div className='flex flex-col items-center w-full md:w-1/2  justify-center gap-3 md:flex-row md:justify-start'>
                    <FormField 
                        control={form.control}
                        name='companyLogo'
                        render={({ field : { value, ...fieldValues} }) => (
                        <FormItem className='w-full'>
                          <FormLabel htmlFor='companyLogo' className=' font-medium text-base'>Upload company logo</FormLabel>
                          <FormControl className='w-full'>
                              <input
                                  {...fieldValues}
                                  type='file'
                                  placeholder='upload your company logo'
                                  id='companyLogo'
                                  accept="application/pdf, application/docx"
                                  onChange={(e) => {
                                    const file =  e.target.files?.[0]
                                    fieldValues.onChange(file)
                                  }}
                                  className='flex-1 w-full text-[15px] rounded-md p-4 py-2 border placeholder:text-[20px] leading-[24px] outline-none text-[#1A1A1A]/50'
                              />
                          </FormControl>
                          <FormMessage className='font-medium text-base' />
                        </FormItem>
                      )}
                    /> 
                  </div>
                </div>

              </div>

             
              <div className='w-full mt-2 px-3 py-2 flex flex-col items-start gap-2 justify-center '>
                    <FormField 
                        control={form.control}
                        name='termsCheckbox'
                        render={({ field : { value, ...fieldValues} }) => (

                          <FormItem className='w-full flex flex-row-reverse items-center justify-end gap-3'>
                            <FormLabel htmlFor='termsCheckbox' className=' -mb-1 text-[17px] text-[#6E6E6E]/90 leading-[24px] font-light'>
                            By clicking &quot;Create Your Account&quot;, you agree to our<Link className=' font-normal hover:underline text-[#008080]' href={'/terms-and-condition'}>Terms</Link> and <Link className=' font-normal hover:underline text-[#008080]' href={'privacy-policy'}>Policy</Link>  Policy.
                            </FormLabel>
                            <FormControl className='w-max'>
                              <Input   {...fieldValues} type='checkbox' id='termsCheckbox'  className='  border-gray-500   data-[state=checked]:border-none w-4 h-4 data-[state=checked]:bg-[#008080]'/>
                            </FormControl>
                          <FormMessage className='font-medium text-base' />
                      </FormItem>
                        )}
                    />
                    <FormField 
                        control={form.control}
                        name='jobTips'
                        render={({ field : { value, ...fieldValues} }) => (
                          <FormItem className='w-full flex flex-row-reverse items-center justify-end gap-3'>
                            <FormLabel htmlFor='jobTips' className=' -mb-1 text-[17px] text-[#6E6E6E]/90 leading-[24px] font-light'>
                            I would like to receive top jobs and career tips                            </FormLabel>
                            <FormControl className='w-max'>
                              <input   {...fieldValues} type='checkbox' id='jobTips'  className='  border-gray-500   data-[state=checked]:border-none w-4 h-4 data-[state=checked]:bg-[#008080]'/>
                            </FormControl>
                          <FormMessage className='font-medium text-base' />
                      </FormItem>
                        )}
                    />
                    <FormField 
                        control={form.control}
                        name='jobAlert'
                        render={({ field : { value, ...fieldValues} }) => (

                          <FormItem className='w-full flex flex-row-reverse items-center justify-end gap-3'>
                            <FormLabel htmlFor='jobAlert' className=' -mb-1 text-[17px] text-[#6E6E6E]/90 leading-[24px] font-light'>
                            Sign me up for email and browser Job alerts.                            </FormLabel>
                            <FormControl className='w-max'>
                              <input   {...fieldValues} type='checkbox' id='jobAlert'  className='  border-gray-500   data-[state=checked]:border-none w-4 h-4 data-[state=checked]:bg-[#008080]'/>
                            </FormControl>
                          <FormMessage className='font-medium text-base' />
                      </FormItem>
                        )}
                    />

                    
                      {/* <div className=' space-x-3'>
                      <input  id='3' type="checkbox" />
                      <label htmlFor="3">By clicking Create Your Account, you agree to our and Privacy Policy.</label>
                    </div> */}
                    
                    {/* <div className=' space-x-3'>
                      <input id='2' type="checkbox" />
                      <label htmlFor="2">Sign me up for email and browser Job alerts.</label>
                    </div> */}
      
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
