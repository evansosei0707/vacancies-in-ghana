import { createClient } from 'next-sanity'
import  ImageUrlBuilder from '@sanity/image-url'


export const client = createClient({
    projectId: 'v9uvvuks',
    dataset: 'production',
    apiVersion: '2024-03-08',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_API_TOKEN,
})

const builder = ImageUrlBuilder(client);

export function urlFor(source: any) {
    return builder.image(source)
}