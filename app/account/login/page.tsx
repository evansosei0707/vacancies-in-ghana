import Image from 'next/image'
import React from 'react'
import loginLogo from '@/public/Frame 22.png'
import googleLogo from '@/public/google_image.png'
import linkedInLogo from '@/public/linked_image.png'
import eyeLogo from '@/public/Icon.png'
import mailLogo from '@/public/mail.png'
import frameLogo from '@/public/Frame.png'
import Link from 'next/link'
import LoginClientSlider from '../components/LoginClientSlider'

export default function loginPage() {
  return (
    <main className='w-full h-[760px]  flex items-center justify-center'>
        <section className='lg:w-[60%] w-full flex flex-col items-center pb-16 justify-center pt-[6rem] h-full gap-4 bg-white'>
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
                            />
                            <p className=' font-medium text-[#1A1A1A]'>Sign in with LinkedIn</p>
                        </div>
                    </div>
                    <div className=" flex items-center mt-6 w-full lg:w-[430px]">
                        <span className=' flex-1 border-t border-[#111111]/20 mx-2'></span>
                        <span className='whitespace- text-[#1A1A1A]/50 '>Or continue with email</span>
                        <span className=' flex-1 border-t border-[#111111]/20 mx-2'></span>
                    </div>
                    <form className='flex flex-col items-start w-full justify-center gap-4' >
                        <div className='flex flex-col gap-2 w-full items-start justify-center'>
                            <label htmlFor="email" className=' text-text-[#1A1A1A] font-medium'>Email</label>
                            <div className='flex px-3 items-center w-full justify-center border rounded-md '>
                                <Image
                                    src={mailLogo}
                                    width={17}
                                    height={13}
                                    alt='mail-icon'
                                />
                                <input 
                                    type="email"
                                    id='email'
                                    className='flex-1 p-3 w-full outline-none text-[#1A1A1A]/50'
                                    placeholder='eg.support@gmail.com'
                                />
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 items-start w-full justify-center'>
                            <label htmlFor="password" className=' text-text-[#1A1A1A] font-medium'>Password</label>
                            <div className='flex items-center w-full justify-center border rounded-md p-3'>
                                <Image
                                    src={frameLogo}
                                    width={20}
                                    height={20}
                                    className=''
                                    alt='mail-icon'
                                />
                                <input 
                                    type="password"
                                    id='password'
                                    className='text-[#1A1A1A]/50 flex-1 pl-3 font-thin w-full  outline-none'
                                    placeholder='************'
                                />
                                 <Image
                                    src={eyeLogo}
                                    width={20}
                                    height={20}
                                    alt='mail-icon'
                                />
                            </div>
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
                            <button className=' bg-[#008080] mt-5 text-white rounded-md p-3 w-full'>Log In</button>
                            <Link href='/account/signup' className="font-medium mx-auto mt-6 text-center text-[#6E6E6E]">Don&apos;t have account? <span className='text-[#008080] hover:underline'>Get Started</span></Link>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        <LoginClientSlider />
    </main>
  )
}
