import React, { useCallback, useMemo, useState } from 'react';
import './App.scss';
import { peopleFromServer } from './data/people';
import PeopleList from './components/PeopleList';
import debounce from 'lodash.debounce';

export const App: React.FC = () => {
  const [query, setQuery] = useState('');
  const [filterQuery, setFilterQuery] = useState('');

  const { name, born, died } = peopleFromServer[0];

  const applyFilter = useCallback(debounce(setFilterQuery, 500), []);

  const filtredList = useMemo(() => {
    return peopleFromServer.filter(person =>
      person.name.toLowerCase().includes(filterQuery.toLowerCase()),
    );
  }, [filterQuery]);

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setQuery(e.target.value);
    applyFilter(e.target.value);
  };

  return (
    <div className="container">
      <main className="section is-flex is-flex-direction-column">
        <h1 className="title" data-cy="title">
          {`${name} (${born} - ${died})`}
        </h1>

        <div className="dropdown is-active">
          <div className="dropdown-trigger">
            <input
              onChange={handleInputChange}
              type="text"
              placeholder="Enter a part of the name"
              className="input"
              data-cy="search-input"
              value={query}
            />
          </div>

          <PeopleList list={filtredList} />
        </div>

        <div
          className="
            notification
            is-danger
            is-light
            mt-3
            is-align-self-flex-start
          "
          role="alert"
          data-cy="no-suggestions-message"
        >
          <p className="has-text-danger">No matching suggestions</p>
        </div>
      </main>
    </div>
  );
};
