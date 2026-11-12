import { SectionTitleProps } from './section-title.types';

export const SectionTitle = (props: SectionTitleProps) => {
  const { number, title } = props;

  return (
    <div>
      <h2>
        <span>{number} · </span>
        {title}
      </h2>
    </div>
  );
};
