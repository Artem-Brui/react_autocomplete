import { Person } from '../types/Person';

interface Props {
  choise: Person | null;
}

const Title: React.FC<Props> = ({ choise }) => {
  let title = 'No selected person';

  if (choise !== null) {
    const { name, born, died } = choise;

    title = `${name} (${born} - ${died})`;
  }

  return (
    <h1 className="title" data-cy="title">
      {title}
    </h1>
  );
};

export default Title;
