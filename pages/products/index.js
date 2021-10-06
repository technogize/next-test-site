import Head from 'next/head'
import { createClient } from 'contentful'
import ProductCard from '../../components/ProductCard'

import styles from '../../styles/Product.module.css'

export const getStaticProps = async (context) => {
  const contentfulClient = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  const resp = await contentfulClient.getEntries({
    content_type: 'productDetails'
  })

  return {
    props: {
      products: resp.items
    }
  }
}


const Products = ({ products }) => {
    return (
        <div>
        <Head>
            <title>Products | 🍇🌎 Fruits NextJS Site</title>
        </Head>      
        <main>
            <h2>Our Products (from Contentful)</h2>
            <div className={styles.productsContainer}>
                {products.map(product => {      
                    return (
                        <ProductCard key={product.sys.id} product={product} />
                    )
                })}
            </div>
        </main>
    </div>
  )
}

export default Products
