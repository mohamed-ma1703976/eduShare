import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MycoursesCard({ courseTitle, InstName }) {
    return (
        <Card sx={{ width:'100%' ,backgroundColor:'#1ABC9C',color:'#454545'}}>
            <CardContent>
                <Typography gutterBottom variant="h7" component="div" sx={{fontWeight:'1000'}}>
                    Course Name : {courseTitle}
                </Typography>
                <Typography gutterBottom variant="h7" component="div" sx={{fontWeight:'700'}}>
                   Instructor Name :{InstName}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" sx={{backgroundColor:'#1ABC9C',color:'white',margin:'0 0 10px 0',border:'1px solid'}}>Learn More</Button>
            </CardActions>
        </Card>
    );
}