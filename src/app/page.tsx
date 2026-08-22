import Link from 'next/link';

export default function Page() {
  /**
   * TODO: Реализовать главную страницу
   * @see DEV-70
   */
  return (
    <div className="flex flex-col gap-8">
      <Link href={'/setup'}>Go to achieve your goals</Link>
    </div>
  );
}
