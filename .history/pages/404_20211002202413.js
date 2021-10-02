import Head from 'next/head'

const NotFound = () => {
    return (
        <>
            <Head>
                <title>Page Not Found 🤔 | 🍇🌎 Grapeworld NextJS Site</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>   
            <div className="not-found">
                <p>🤔</p>
                <h1>Sorry...</h1>
                <h2>That page does not exists </h2>
                <p>Go back to the <Link href="/">Homepage</Link></p>
            </div>
        </>
    )
}

export default NotFound
