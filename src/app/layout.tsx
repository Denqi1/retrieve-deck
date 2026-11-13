import type { Metadata } from 'next';

// import { PathTracker } from '@/old/features/path-tracker';
import { inter } from '@/old/ui/fonts/fonts';

import './main.css';

export const metadata: Metadata = {
  title: 'Retrieve Deck',
  description:
    'A service for preparing for interviews and studying material using active recall techniques',
};

export default function RootLayout(props: LayoutProps<'/'>) {
  const { children } = props;

  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <main className="container mx-auto my-auto flex justify-center items-center py-6">
          <div className="w-3xl bg-surface-main rounded-2xl border border-default mx-auto">
            <div className="flex items-center gap-2.5 px-3.5 py-4 bg-surface-main border-default border-b rounded-t-2xl">
              <div className="w-2.5 h-2.5 rounded-full bg-[#e85d5d]"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#e8b04f]"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#7ee787]"></div>
              {/* <PathTracker /> */}
            </div>
            <div className="p-8">{children}</div>
          </div>
        </main>
      </body>
    </html>
  );
}
