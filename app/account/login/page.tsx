import Image from 'next/image'
import React from 'react'
import loginLogo from '@/public/Frame 22.png'
import googleLogo from '@/public/google_image.png'
import linkedInLogo from '@/public/linked_image.png'
import LoginClientSlider from '../components/LoginClientSlider'
import LoginForm from '../components/LoginForm'

export default function loginPage() {
  return (
    <main className='w-full min-h-[800px] h-[800px]  flex items-center justify-center'>
        <section className='lg:w-[60%] w-full flex flex-col items-center pb-16 justify-center pt-[7rem] h-full gap-4 bg-white'>
            <div className=' flex flex-col w-full  items-center justify-center gap-4'>

                <div className='flex flex-col items-start justify-center'> 
                    <div className=' w-[250px]  md:w-[312px] h-[35px]'>
                        <Image
                            src={loginLogo}
                            alt='login-logo'
                            width={312}
                            height={35}
                        />
                    </div>
                    <div className='flex flex-col mt-4  md:mt-6 items-start w-full justify-center gap-2'>
                        <h2 className='md:text-[40px] md:leading-[50px] sm:leading-[40px] leading-[30px] text-[25px] sm:text-[30px] text-[#1A1A1A]  font-semibold'>Log in to your Account</h2>
                        <p className=' text-[#1A1A1A]/50 font-medium'>Welcome back! Select method to log in:</p>
                    </div>
                </div>
                <div className='flex flex-col w-[80%] lg:w-[60%] items-center justify-start mt-5 max gap-5'>
                    <div className=' flex flex-col md:flex-row lg:gap-3 gap-5 items-start  justify-center w-full'>
                        <div className='flex gap-4 whitespace-nowrap w-full cursor-pointer hover:bg-slate-400/30 transition-colors duration-100 p-2 rounded-lg border items-center justify-center'>
                            <Image 
                                src={googleLogo}
                                width={24}
                                height={24}
                                alt='google logo'
                            />
                            <p className=' font-medium text-[#1A1A1A]'>Sign in with Google</p>
                        </div>
                        <div className='flex gap-4 w-full cursor-pointer hover:bg-slate-400/30 transition-colors duration-100 whitespace-nowrap p-2 rounded-lg border items-center justify-center'>
                            <Image 
                                src={linkedInLogo}
                                width={24}
                                height={24}
                                alt='linkedIn logo'
                                className='shrink-0'
                            />
                            <p className=' font-medium text-[#1A1A1A]'>Sign in with LinkedIn</p>
                        </div>
                    </div>
                    <div className=" flex items-center mt-6 w-full lg:w-[430px]">
                        <span className=' flex-1 border-t border-[#111111]/20 mx-2'></span>
                        <span className='whitespace- text-[#1A1A1A]/50 '>Or continue with email</span>
                        <span className=' flex-1 border-t border-[#111111]/20 mx-2'></span>
                    </div>
                    <LoginForm />
                </div>
            </div>
        </section>
        <LoginClientSlider />
    </main>
  )
}
