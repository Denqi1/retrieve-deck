'use client';

import { usePathname } from 'next/navigation';

export function PathTracker() {
  const path = usePathname();

  const currentPath = 'retrieve-deck' + path;

  const pathSegments = currentPath.split('/');

  const pathForDisplay = pathSegments
    .filter((_v, index) => index !== pathSegments.length - 1)
    .join('/');

  const lastSegment = pathSegments.at(-1);

  /**
   * TODO: Сделать так, чтобы цвет выделялся только для текущей страницы
   */
  return (
    <div className="ml-3 text-[#565b64]">
      <p>
        ~/{pathForDisplay}
        {lastSegment && (
          <span className="text-[#8b909b] font-medium">/{lastSegment}</span>
        )}
      </p>
    </div>
  );
}
