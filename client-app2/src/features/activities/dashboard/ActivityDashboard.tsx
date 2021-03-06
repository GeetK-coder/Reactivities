import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import LoadingComponents from '../../../app/layout/loadingComponents';
import { useStore } from '../../../app/stores/store';
import ActivityFilters from './ActivityFilters';
import ActivityList from './ActivityList';





export default observer (function ActivityDashboard(){

    const{activityStore} = useStore();
    const{loadActivities,activityRegistry}=activityStore;

    
    useEffect(() => {
        if(activityRegistry.size ===0)loadActivities();
    } , [activityRegistry.size,loadActivities])

    if (activityStore.loadingInitial) return <LoadingComponents content='Loading app' />

    return(
        <Grid>
            <Grid.Column width='10'>
                <ActivityList 
                />
            </Grid.Column>
            <Grid.Column width='6'>
                <ActivityFilters />

            </Grid.Column>

            
        </Grid>
    )


})
