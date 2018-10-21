import React from 'react';
import { Redirect } from 'react-router-dom'

import ListNews from '../containers/ListNews';
import News from '../containers/News';
import AdministratorMain from '../containers/AdministratorMain';
import AdministratorNews from '../containers/AdministratorNews';

export default [
  {
    path: '/listNews',
    component: ListNews,
  },
  {
    path: '/news/:newsId',
    component: News,
    exact: true
  },
  {
    path: '/administratorMain',
    component: AdministratorMain,
  },
  {
    path: '/administratorNews',
    component: AdministratorNews,
    exact: true
  },
  {
    path: '/administratorNews/:newsId',
    component: AdministratorNews,
  },
  {
    render: () => <Redirect to='/listNews' />
  }
]
