import Posts from '../components/posts/posts';
import { Suspense } from 'react';
import Loading from './loading';
import Sidebar from '@/components/sidebar/sidebar';

export default function Home() {
  return (
    <div className="justify-items-center min-h-screen pb-20 font-[family-name:var(--font-geist-sans)]">
      <div className="grid grid-cols-1 gap-4">
        <main className="pt-32 flex justify-center sm:items-start">
          <Suspense fallback={<Loading />}>
            <Posts />
          </Suspense>
        </main>
      </div>
      <Sidebar />
      <footer className="w-full fixed bottom-0 pb-4 flex justify-center items-center">
        <a
          href="https://github.com/garff"
          target="_blank">
          Mads Garff&trade; @ 2025
        </a>
      </footer>
    </div>
  );
}
