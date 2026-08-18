'use client';

import { useState } from 'react';
import { SectionCard } from '../section-card/section-card';

const sections = [
  { name: 'javascript', color: 'text-yellow-400', id: 0 },
  { name: 'browser', color: 'text-purple-500', id: 1 },
  { name: 'security', color: 'text-red-500', id: 2 },
  { name: 'react', color: 'text-cyan-500', id: 3 },
  { name: 'next.js', color: 'text-gray-900', id: 4 },
  { name: 'typescript', color: 'text-blue-600', id: 5 },
  { name: 'html', color: 'text-orange-500', id: 6 },
  { name: 'css', color: 'text-pink-500', id: 7 },
  { name: 'network', color: 'text-emerald-500', id: 8 },
  { name: 'architecture', color: 'text-stone-600', id: 9 },
  { name: 'performance', color: 'text-amber-500', id: 10 },
];

export const SectionCardsList = () => {
  const [pickedSection, setPickedSection] = useState<null | number>(null);

  const handleClick = (sectionId: number) => {
    setPickedSection(sectionId);
  };

  return (
    <div className="grid grid-cols-3 gap-3 cursor-pointer">
      {sections.map((section) => {
        const { color, id, name } = section;

        return (
          <SectionCard
            key={id}
            id={id}
            name={name}
            color={color}
            onClick={handleClick}
            isPicked={pickedSection === id}
          />
        );
      })}
    </div>
  );
};
