import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'


import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head></Head>
      <div className={utilStyles.main_container}>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <div className={utilStyles.main}>

            <div className={utilStyles.catalog}>
              <div className={utilStyles.Books}>Books</div>
              <div className={utilStyles.categories}>
                <Link href="/posts/classics">
                  <a>Classics</a>
                </Link>
                <Link href="/posts/philosophy">
                  <a>Philosophy</a>
                </Link>
                <Link href="/posts/romance">
                  <a>Romance</a>
                </Link>
              </div>
            </div>
            <ul className={utilStyles.list}>
              {allPostsData.map(({ id, title, author, img }) => (
                <li className={utilStyles.listItem} key={id}>
                  <img className={utilStyles.img} src={img} />
                  <Link href={`/posts/${id}`}>
                    <a className={utilStyles.book_title}>{title}</a>
                  </Link>

                  <div className={utilStyles.book_author}>{author}</div>

                </li>
              ))}
            </ul>

          </div>
        </section>
      </div>
    </Layout>
  )
}


