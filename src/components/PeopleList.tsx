import React from 'react';
import { Person } from '../types/Person';

interface ListProps {
  list: Person[];
}

const PeopleList: React.FC<ListProps> = React.memo(({ list }) => {
  console.log('render list');

  return (
    <div className="dropdown-menu" role="menu" data-cy="suggestions-list">
      <div className="dropdown-content">
        {list.map((person, i) => {
          return (
            <div key={i} className="dropdown-item" data-cy="suggestion-item">
              <p className="has-text-link">{person.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
});

PeopleList.displayName = 'PeopleList';

export default PeopleList;
