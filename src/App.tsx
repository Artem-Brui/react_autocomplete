import React, { useCallback, useState } from 'react';
import './App.scss';
import PeopleList from './components/PeopleList';
import { Person } from './types/Person';
import Title from './components/Title';
import ErrorMessage from './components/ErrorMessage';

export const App: React.FC = () => {
  const [isShowError, setIsShowError] = useState(false);

  const [personToShow, setPersonToShow] = useState<null | Person>(null);

  const showErrorMessage = useCallback(
    (isEmpty: boolean) => setIsShowError(isEmpty),
    [],
  );

  const showPerson = useCallback(
    (pers: Person | null) => setPersonToShow(pers),
    [],
  );

  return (
    <div className="container">
      <main className="section is-flex is-flex-direction-column">
        <Title choise={personToShow} />
        <PeopleList
          delay={500}
          isListEmpty={showErrorMessage}
          choisePerson={showPerson}
        />
        <ErrorMessage isVisible={isShowError} />
      </main>
    </div>
  );
};
