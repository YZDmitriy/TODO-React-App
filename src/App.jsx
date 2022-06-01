import React from 'react';
import AppContent from './components/AppContent';
import AppHeader from './components/AppHeader';
import PageTitle from './components/PageTitle';
import styles from './styles/modules/app.module.scss';

function App(props) {
  return (
    <div className='container'>
      <PageTitle>TODO LIST</PageTitle>
      <div className={styles.app_wrapper}>
        <AppHeader/>
        <AppContent/>
      </div>
    </div>
  );
}

export default App;
