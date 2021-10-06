import Link from 'next/link'
import Image from 'next/image'

import styles from '../styles/ProductCard.module.css'

const ProductCard = props => {
    const { product } = props
    const { images, slug, title } = product.fields
    
    return (
        <Link href={`/products/${slug}`}>
            <div className={styles.productCard}>
                <div
                    className={styles.image}
                    style={{
                        backgroundImage: `url(https:${images[0].fields.file.url})`
                    }}
                ></div>
                <h5>{title}</h5>
            </div>
        </Link>
    )
}

export default ProductCard
