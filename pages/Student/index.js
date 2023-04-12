import React, { useContext } from "react";
import { Box, Card, Stack, Typography, Grid } from "@mui/material";
import StuNav from "../../component/Student/StuNav";
import StuSideBar from "../../component/Student/StuSideBar";
import CourseCard from "../../component/Student/CourseCard";
import useFetch from "../../hooks/useFetch";
import { AuthContext } from "../../hooks/AuthProvider";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageCarousel from "../../component/Student/ImageCarousel"; 

export default function studentDashboard() {
    const { userId } = useContext(AuthContext);
    const { data: courses, loading, error } = useFetch("http://localhost:1337/api/courses");

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    // Sort courses by the id attribute in descending order (latest first)
    const sortedCourses = courses.data.sort((a, b) => b.id - a.id);

    // Sort courses by the enrolledStudents attribute in descending order (most enrolled first)
    const trendingCourses = courses.data.sort((a, b) => b.attributes.enrolledStudents - a.attributes.enrolledStudents);

    // Slider settings
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div>
            <Box>
                <StuNav />
                <Grid container>
                    <Grid item xs={2}>
                        <StuSideBar />
                    </Grid>
                    <Grid item xs={10}>
                        <Box>
                        <ImageCarousel /> {/* Add the ImageCarousel component */}
                            <Card />
                            {/* Add "Latest Courses" heading */}
                            <Typography variant="h5" gutterBottom>
                                Latest Courses
                            </Typography>
                            {/* Wrap the CourseCard map in a Slider component */}
                            <Slider {...settings}>
                                {sortedCourses.map((course) => (
                                    <Box key={course.id} sx={{ padding: 1 }}>
                                        <CourseCard course={course} />
                                    </Box>
                                ))}
                            </Slider>
                            {/* Add "Trending Courses" heading */}
                            <Typography variant="h5" gutterBottom mt={4}>
                                Trending Courses
                            </Typography>
                            {/* Wrap the CourseCard map for trending courses in a Slider component */}
                            <Slider {...settings}>
                                {trendingCourses.map((course) => (
                                    <Box key={course.id} sx={{ padding: 1 }}>
                                        <CourseCard course={course} />
                                    </Box>
                                ))}
                            </Slider>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}
