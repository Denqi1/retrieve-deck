import Link from 'next/link';

export default function Page() {
  /**
   * TODO: Реализовать главную страницу
   */
  return (
    <div className="flex flex-col gap-8">
      <Link href={'/choose-section'}>Go to achieve your goals</Link>
    </div>
  );
}
