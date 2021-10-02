export const getStaticPaths = async () => {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await resp.json()

    // map data to an array of path objects with params (id)
    const paths = data.map(ninja => {
        return {
            params: { id: ninja.id.toString() }
        }
    })

    return {
        paths,
        fallback: false // you can have a fallback page, but by setting to false a user will see the 404 page if the route doesn't exist
    }
}

// Get the data for each farm
export const getStaticProps = async (context) => {
    //this will run for each path.

    // Get the ID from the context (this current path)
    const id = context.params.id

    // Add ID on the end of the request so we know which individual piece of data we need.
    const resp = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
    const data = await resp.json()

    return {
        props: { farm: data }
    }
}

const FarmDetails = props => {
    const {farm} = props
    return (
        <div>
            {grape.company?.name && 
                <h1>{`Company: ${grape.company.name}`}</h1>
            }
            
            {grape.name &&
                `Owner: ${grape.name}`
            }<br />
            {grape.email &&
                `Email: ${grape.email}`
            }<br />
            {grape.website &&
                `Website: ${grape.website}`
            }<br />
            {grape.phone &&
                `Phone: ${grape.phone}`
            }<br /><br />
            {grape.address &&
                <address>
                    {grape.address?.street}<br />
                    {grape.address?.suite}<br />
                    {grape.address?.city}<br />
                    {grape.address?.zipcode}
                </address>
            }
        </div>
    )
}

export default FarmDetails
