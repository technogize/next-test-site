export const getStaticPaths = async () => {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await resp.join()

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

    const id = context.params.id

    const resp = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
    const data = await resp.json()

    return {
        props: { grapeFarms: data }
    }
}

const FarmDetails = props => {

    return (
        <div>
            <h1>Farm</h1>
            <p>daasdad</p>
        </div>
    )
}

export default FarmDetails
