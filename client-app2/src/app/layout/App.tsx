import React , { Fragment, useEffect, useState } from 'react';
import {Container} from 'semantic-ui-react';
import { Activity } from '../models/activity';
import NavBar from './navbar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import agent from '../api/agent';
import LoadingComponents from './loadingComponents';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';

function App() {
const {activityStore} = useStore();
const{deleteActivity,loading}=activityStore;

  
  useEffect(() => {
    activityStore.loadActivities();
  } , [activityStore])

  

  

if (activityStore.loadingInitial) return <LoadingComponents content='Loading app' />

  return (
    <Fragment>
      <NavBar />
      <Container style={{marginTop:'7em'}}>
        
      <ActivityDashboard 
      />

      </Container>
      
      
    </Fragment>
  );
}

export default observer(App);
