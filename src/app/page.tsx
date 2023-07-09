import { Inter } from 'next/font/google'
import type { Metadata } from "next";
import LargeHeading from "../app/components/ui/LargeHeading";
import '../styles/globals.css'
import Paragraph from './components/ui/Paragraph';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Similarity API | Home",
  description: "Similarity API is a free and open source text similarity API",
}

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-x-hidden">
      <div className='container pt-32 max-w-7xl mx-auto w-full h-full'>
        <div className='h-full gap-6 flex flex-col justify-start lg:justify-center items-center lg:items-start'>
          <LargeHeading size='lg' className='three-d text-black dark:text-light-gold'>
            Easily determine <br /> text similarity.
          </LargeHeading>
          <Paragraph className='max-w-xl lg:text-left'>
            With the text similarity api you can easily determine the similarity between two peices of text with a free {' '}
            <Link href='/login' className='underline underline-offset-2 text-black dark:text-gold'></Link>
          </Paragraph>
        </div>
      </div>
    </div>
  )
}
