import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>View List | Home</title>
        <meta name="keywords" content="view"></meta>
      </Head>
      <div className={styles.title}>

        <h1>Hello World</h1>
        <Link href='/view'>
          <a className={styles.btn}>See view Listing</a>
        </Link>
        <p className={styles.tile}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut facilisis arcu vitae leo interdum, ut hendrerit justo feugiat. Aliquam quis lorem ut velit tristique vulputate. Sed tristique tempor tellus, id auctor turpis pharetra ac. Pellentesque vitae metus et ipsum tempor varius eget ac dui. In vehicula lectus eu lorem feugiat porttitor. Donec at nisl id orci dapibus volutpat id id enim. Quisque eu risus egestas, congue nulla vel, porttitor mauris. Donec eget nulla vel eros pharetra tempor at eget mauris. Nunc aliquam vel dui a commodo.
      </p>

      </div>
    </>
  )
}
