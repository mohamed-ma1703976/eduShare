import React ,{useEffect,useState }from 'react'
import InstSidebar from '../../component/Instructors/InstSidebarr'
import InstNav from '../../component/Instructors/InstNav'
import Card from '../../component/Card'
import { Box, Stack } from "@mui/material"
import MyStudents from '../../component/Instructors/MyStudents'
import Loading from '../../component/Loading '
function mystudents() {
    const [search, setSearch] = React.useState("")
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 5000); // Set timeout to 5 seconds
    }, []);
  
    if (loading) {
      return <Loading />; // Render Loading component
    }

    return (

        <div >
            <Box>

                <InstNav setCourseSearch={setSearch} />

                <Stack direction="row" spacing={2} justifyContent="space-between">

                    <InstSidebar />

                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "20px 0 0 0" }}>
                        <MyStudents />
                    </div>
                </Stack>

            </Box>
        </div>
    )
}

export default mystudents