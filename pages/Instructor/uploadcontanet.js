import React ,{useEffect,useState }from 'react'
import Loading from '../../component/Loading ';
import {
    Box,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Card,
    Typography,
    Paper,
    Button,
} from '@mui/material';
import InstNav from '../../component/Instructors/InstNav';
import InstSidebar from '../../component/Instructors/InstSidebarr';
import UploadFile from '../../component/Instructors/UploadFile';

function UploadContent() {
    const [fileList, setFileList] = React.useState([]);
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
        <div>
            <Box>
                <InstNav />

                <Stack direction="row" justifyContent="center">
                    <InstSidebar />

                    <Box sx={{ flexGrow: 1, marginLeft: 2, marginRight: 2 }}>
                        <Typography variant="h5" sx={{ flexGrow: 1, padding: 2 }}>
                            Upload Content
                        </Typography>

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '20px 0 0 0' }}>
                            <UploadFile setFileList={setFileList} />
                        </div>

                        <TableContainer component={Paper} sx={{ marginTop: 2, marginBottom: 2, marginLeft: 1, width: '100%' }}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>File Name</TableCell>
                                        <TableCell>Download Link</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {fileList.map((file, index) => (
                                        <TableRow key={index}>
                                            <TableCell>{file.name}</TableCell>
                                            <TableCell>
                                                <Button variant="outlined" color="primary" href={file.url} target="_blank" rel="noopener noreferrer">
                                                    Download
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                </Stack>
            </Box>
        </div>
    );
}

export default UploadContent;
