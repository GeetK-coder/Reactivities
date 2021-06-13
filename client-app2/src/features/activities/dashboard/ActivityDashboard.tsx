import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';
import ActivityDetails from '../details/ActivityDetail';
import ActivityForm from '../form/ActivityForm';
import ActivityList from './ActivityList';


interface Props{
    activities:Activity[];
    selectedActivity:Activity | undefined;
    selectActivity:(id:String)=>void;
    cancelSelectActivity: ()=>void;
    editMode:Boolean;
    openForm:(id:string)=>void;
    closeForm:()=>void;
    createOrEdit:(activity:Activity)=>void;
    deleteActivity:(id:String)=>void;
}


export default function ActivityDashboard({activities,selectActivity,selectedActivity, deleteActivity,cancelSelectActivity,editMode,openForm,closeForm,createOrEdit}:Props){
    return(
        <Grid>
            <Grid.Column width='10'>
                <ActivityList activities={activities}  selectActivity={selectActivity}  deleteActivity={deleteActivity}/>
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedActivity &&  !editMode &&
            <ActivityDetails activity={selectedActivity} 
            cancelSelectActivity={cancelSelectActivity}
            openForm={openForm}

            />}
            {editMode &&
            <ActivityForm  closeForm={closeForm} activity={selectedActivity} createOrEdit={createOrEdit}/>}

            </Grid.Column>

            
        </Grid>
    )


}
