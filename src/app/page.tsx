import Link from 'next/link';
import { lusitana } from '@/old/ui/fonts/fonts';

export default function Page() {
  return (
    <div className="flex flex-col gap-8">
      <Link href={'/setup'}>Go to achieve your goals</Link>

      <p className={`${lusitana.className}`}>good luck mate!</p>

      {/* <Image
        width={400}
        height={400}
        alt=""
        src={'./'}
        className="block md:hidden"
      /> */}
    </div>
  );
}
