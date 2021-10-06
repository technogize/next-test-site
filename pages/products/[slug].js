import { createClient } from 'contentful'
import Head from 'next/head'

const contentfulClient = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
})

export const getStaticPaths = async () => {
  const resp = await contentfulClient.getEntries({
    content_type: 'productDetails'
  })

  const pagePaths = resp.items.map(item => {
    return {
      params: { slug: item.fields.slug }
    }
  })

  return {
    paths: pagePaths,
    fallback: true,
  }
}

// Get the data for each farm
export const getStaticProps = async (context) => {
    const { items } = await contentfulClient.getEntries({
      content_type: 'productDetails',
      'fields.slug': context.params.slug
    })

    return {
      props: { product: items[0] },
      revalidate: 1
    }
}

const ProductDetails = props => {
    const { product } = props

    if (!product) return <div>Nothing...</div>
    
    const { title, description } = product.fields
    return (
      <>
        <Head>
          <title>{title} | 🍇🌎 Fruits NextJS Site</title>
        </Head>
        <div>
          <h1>{title}</h1>
          <div>
            {description}
          </div>
        </div>
      </>
    )
}

export default ProductDetails

