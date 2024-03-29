import React from 'react'
import PartnerWithUs from '../../Components/PartnerWithUs'
import { outsourcingPageQuery } from '@/app/lib/query';
import { client } from '@/lib/client';
import { outSourceDataType } from '@/type';


async function getData() {
    const data =  await client.fetch(outsourcingPageQuery);

    return data;
}

export default async function 
PartnerSection() {

    const outsourceData: outSourceDataType = await getData();

  return (
    <div className='w-full mx-auto my-9 mb-12'>
        <PartnerWithUs partnerData={outsourceData.partnerWithUs}/>
    </div>
  )
}
