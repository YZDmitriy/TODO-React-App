import React from 'react';
import AppHeader from './components/AppHeader';
import PageTitle from './components/PageTitle';
import style from './styles/modules/app.module.scss';

function App(props) {
  return (
    <div className='container'>
      <PageTitle>TODO LIST</PageTitle>
      <div className={style.app_wrapper}>
        <AppHeader/>
      </div>
    </div>
  );
}

export default App;
