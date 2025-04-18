import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>AI Lesson Planner - Save Time, Enhance Teaching</title>
        <meta name="description" content="Transform your teaching with AI-powered lesson planning. Save hours every week while creating more engaging lessons." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.hero}>
          <h1 className={styles.title}>
            Transform Your Teaching with AI
          </h1>
          <p className={styles.subtitle}>
            Create better lessons in minutes, not hours
          </p>
        </div>

        <div className={styles.features}>
          <div className={styles.featureCard}>
            <h2>Save Precious Time</h2>
            <p>Reduce lesson planning time by up to 80%. What would you do with those extra hours each week?</p>
          </div>
          
          <div className={styles.featureCard}>
            <h2>Personalized Learning</h2>
            <p>Create lessons that adapt to your students' needs and learning styles, all while maintaining your unique teaching voice.</p>
          </div>
          
          <div className={styles.featureCard}>
            <h2>Stay Current</h2>
            <p>Access the latest educational research and best practices, automatically incorporated into your lesson plans.</p>
          </div>
        </div>

        <div className={styles.cta}>
          <h2>Ready to Transform Your Teaching?</h2>
          <p>Join thousands of teachers who are saving time and creating better lessons with AI.</p>
          <button className={styles.ctaButton}>
            Get Started Free
          </button>
        </div>
      </main>
    </>
  )
}
