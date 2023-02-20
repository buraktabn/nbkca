import {createClient} from '@sanity/client'
import ImageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_API_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_API_DATASET,
    // token: process.env.SANITY_API_WRITE_TOKEN,
    useCdn: false,
    apiVersion: '2021-03-25',
})

export async function getPosts() {
  const posts = await client.fetch('*[_type == "post"]')
  return posts
}

export async function createPost(post: any) {
  const result = client.create(post)
  return result
}

export async function updateDocumentTitle(_id: any, title: any) {
  const result = client.patch(_id).set({title})
  return result
}

export const builder = ImageUrlBuilder({
  projectId: process.env.NEXT_PUBLIC_SANITY_API_PROJECT_ID as string,
  dataset: process.env.NEXT_PUBLIC_SANITY_API_DATASET as string,
  // baseUrl: 'https://sanity-nbkca.buraktaban.ca',
})

export const urlFor = (source: string) => builder.image(source)