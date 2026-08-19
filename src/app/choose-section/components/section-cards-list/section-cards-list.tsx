'use client';

import { useSectionStore } from '../../page';
import { SectionCard } from '../section-card/section-card';

export const SectionCardsList = () => {
  const sections = useSectionStore((state) => state.sections);
  const pickedSection = useSectionStore((state) => state.pickedSection);
  const setSection = useSectionStore((state) => state.setSection);

  const handleClick = (sectionId: number) => {
    setSection(sectionId);
  };

  return (
    <div className="grid grid-cols-3 gap-3">
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
