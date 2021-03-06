import Head from 'next/head'
import { server } from '../config'
import ArticleList from '../components/ArticleList'


export default function Home({articles}) {
  // console.log(articles);
  return (
    <div>
      {/* <Head>
        <title>Home page</title>
      </Head>
      <h1>Home</h1>
      {articles.map((article) => (
        <h3>{article.title}</h3>
        ))} */}

      <ArticleList articles={articles} />
    </div>
  )

}
export const getStaticProps = async () => {
  // const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
  const res = await fetch(`${server}/api/articles`)
  const articles = await res.json()
  return {
    props: {
      articles
    }
  }
}
