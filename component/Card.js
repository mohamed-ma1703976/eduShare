import React from 'react'
import { Grid } from '@mui/material'
import CourseDialog from './CourseDialog'
import EventDialog from './EventDialog'
import AnnounceDialog from './AnnounceDialog'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import AchievementCard from './AchievementCard';
import CheckCircleSharpIcon from '@mui/icons-material/CheckCircleSharp';
import TodoList from './TodoList/TodoList'
import useFetch from '../hooks/useFetch'

function Card() {
    const { data } = useFetch('http://localhost:1337/api/courses')
    const NumberOfCourses = data.data?.length
    return (
        <Grid container spacing={1}>
            <Grid container spacing={2} sx={{marginLeft:"9px"}}>
                <Grid item xs={3}>
                    <CourseDialog />
                </Grid>
                <Grid item xs={3}>
                    <EventDialog />
                </Grid>
                <Grid item xs={3}>
                    <AnnounceDialog />
                </Grid>
                <div style={{margin:"8px 10px 0 auto" ,width:"22%"}}  >
                    <Calendar />
                </div>
                
            </Grid>
           
            <Grid container alignContent={'center'} style={{ marginTop: "-250px" }}>
                <Grid item xs={3}>
                    <AchievementCard number={NumberOfCourses} description="Compeleted Courses" color="#1ABC9C"

                    />
                </Grid>
                <Grid item xs={3}>
                    <AchievementCard number="-" description="Compeleted Events" color="#FEC64F" />
                </Grid>
                <Grid item xs={3}>
                    <AchievementCard number="-" description="Publised Announcments" color="#374557" />
                </Grid>
            </Grid>
            <Grid container style={{ marginLeft: "-200px" }}>
                <TodoList />
            </Grid>
        </Grid>
    )
}

export default Card 