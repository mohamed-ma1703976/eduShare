import React from 'react';
import { Card, CardContent, Typography, CardMedia , Grid} from '@mui/material';
import { Box } from '@mui/system';
import Link from 'next/link';
import { motion } from 'framer-motion';

const EventCard = ({ event }) => {
    const defaultImage = 'https://i.ibb.co/RN7HqQT/Edu-Share-Logo.png'; // Add the default image URL here

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Link href="/Student/Event/[id]" as={`/Student/Event/${event.id}`} passHref>
                <motion.div variants={cardVariants} initial="hidden" animate="visible" style={{ textDecoration: 'none' }}>
                    <Card
                        sx={{
                            minHeight: '100%',
                            maxHeight: '400px',
                            minWidth: '300px',
                            display: 'flex',
                            flexDirection: 'column',
                            boxShadow: 2,
                            borderRadius: 2,
                            overflow: 'hidden',
                            bgcolor: '#ffffff',
                        }}
                        component="a"
                    >
                        <CardMedia
                            component="img"
                            height="200"
                            image={event.coverImage || defaultImage}
                            alt="Event cover"
                        />
                        <CardContent sx={{ flex: 1 }}>
                            <Typography variant="h6" gutterBottom>
                                {event.title}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Start Time: {event.start}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                End Time: {event.end}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Description: {event.description}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Link: {event.link}
                            </Typography>
                        </CardContent>
                    </Card>
                </motion.div>
            </Link>
        </Grid>
    );
};

export default EventCard;
