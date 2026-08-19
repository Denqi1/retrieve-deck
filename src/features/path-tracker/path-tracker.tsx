'use client';

import { usePathname } from 'next/navigation';

export function PathTracker() {
  const path = usePathname();

  const currentPath = 'retrieve-deck' + path;

  /**
   * TODO: Сделать так, чтобы цвет выделялся только для текущей страницы
   */
  return (
    <div className="ml-3 text-[#565b64]">
      <p>
        ~/
        <span className="text-[#8b909b] font-medium">{currentPath}</span>
      </p>
    </div>
  );
}
