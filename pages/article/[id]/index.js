import {useRouter} from 'next/router'


const article = () => {
    const router = useRouter()
    const {id} = router.query
    return (
        <div>
            <h1>Article {id}</h1>
        </div>
    )
}

export const getServerSideProps = async (context) => {

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    
    const article = await res.json()
    return{
        props: {
            article
        }
    }
}
export default article
