"use client"

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { employersList, helperCenterList, jobSeekersList, serviceLinks, serviceList } from '../lib/helper';
import logo from '@/public/vig-logo.png'
import Link from 'next/link';
import { FaRegNewspaper } from "react-icons/fa6";
import { Sling as Hamburger } from 'hamburger-react'
import { cn } from "@/lib/utils"
import { MdKeyboardArrowUp } from "react-icons/md";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
  } from "@/components/ui/navigation-menu";


export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);


  return (
    <header className='w-full flex justify-between items-center relative h-[70px] px-8 pl-0 bg-white shadow-sm'>
      <div className='flex items-center justify-center gap-5'>
        <Link href={'/'} className=' w-[100px] h-[55px]'>
            <Image 
                src={logo}
                alt='vig-logo'
                width={100}
                height={55}
                className='w-full h-full object-contain'
            />
        </Link>
        <nav className='hidden lg:flex items-center text-lg justify-center h-full '>
        <NavigationMenu  className=' mt-4'>
      <NavigationMenuList>
      <NavigationMenuItem className='text-lg'>
          <NavigationMenuTrigger> <span className='text-lg leading-5 text-[#4A4A48]'>Job Seekers</span></NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className=" grid w-[250px] gap-2 p-4 md:w-[350px] md:grid-cols-2 lg:w-[450px] ">
              {jobSeekersList.map((item, idx) => (
                <ListItem
                  key={idx}
                  title={item.title}
                  href={item.href}
                >
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
       
        <NavigationMenuItem className='text-lg'>
          <NavigationMenuTrigger> <span className='text-lg text-[#4A4A48]'>Our Service</span></NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {serviceList.map((component: serviceListType, idx: any) => (
                <ListItem
                  key={idx}
                  title={component.title}
                  href={component.href}
                >
                  {component.desc}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger> <p className='text-lg'>Career</p></NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-2">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full text-white w-full blog-bg select-none flex-col justify-end rounded-md bg-gradient-to-b overflow-hidden from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/blog"
                  >
                    <FaRegNewspaper className="h-6 text-white z-20 w-6" />
                    <div className="mb-2 mt-4 z-20 text-lg text-white font-medium">
                      Corporate News
                    </div>
                    <p className="text-sm z-20  text-white leading-tight text-muted-foreground">
                    Discover the latest in our Corporate News where updates meet opportunity.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/discover/career-development" title="Career Development">
                Fuel your career growth with our concise and impactful Career Development resources
              </ListItem>
              <ListItem href="/discover/events" title="Events">
              Stay informed about upcoming industry events and networking opportunities through our Events section
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        
        <NavigationMenuItem className='text-lg'>
          <NavigationMenuTrigger> <span className='text-lg text-[#4A4A48]'>Employers</span></NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className=" grid w-[250px] gap-2 p-4 md:w-[350px] md:grid-cols-2 lg:w-[450px] ">
              {employersList.map((item, idx) => (
                <ListItem
                  key={idx}
                  title={item.title}
                  href={item.href}
                >
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
         </NavigationMenuItem>
       {/* <NavigationMenuItem className='text-lg'>
          <NavigationMenuTrigger> <span className='text-lg text-[#4A4A48]'>Help Center</span></NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className=" grid w-[250px] gap-2 p-4 md:w-[350px] md:grid-cols-2 lg:w-[450px] ">
              {helperCenterList.map((item, idx) => (
                <ListItem
                  key={idx}
                  title={item.title}
                  href={item.href}
                >
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem> */}
      </NavigationMenuList>
    </NavigationMenu>
        </nav>
      </div>
        <div className='hidden lg:flex items-center justify-center gap-3'>
            <Link href={'/account/login'} className=' border-none outline-none px-2 border-r border-2 bg-transparent text-black whitespace-nowrap'>Log In</Link>
            <Link href={'/account/register'} className='border-none outline-none  bg-transparent text-black px-2'>Register</Link>
            <Link  href={'/account/employer/jobs/create'} className=" rounded-lg  bg-[#008080] text-white px-5 py-2">Post a Job</Link>
        </div>
        <div ref={ref} className="min-[1174px]:hidden  ">
          <Hamburger toggled={isOpen} size={30} color="#008080" toggle={setOpen} /> 
          <div
          className={`${
            isOpen ? 'right-0' : '-right-full'
          } transition-all transform  duration-300 ease-in w-[85%]   overflow-x-hidden border-black h-[80vh] absolute top-[4.3rem] bg-black`}
        >
          {/* ... (your menu content) */}
        </div>
        </div> 
    </header>
  )
}


const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className=" font-medium text-lg leading-none">{title}</div>
          <p className="line-clamp-2 text-base leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
