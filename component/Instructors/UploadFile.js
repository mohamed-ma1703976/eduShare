import React, { useEffect, useState } from 'react';
import { auth, collection, db, storage } from '../../Firebase/Firebase';
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { getDocs } from 'firebase/firestore';
import { CircularProgress } from '@mui/material';

const UploadFile = () => {
    const [file, setFile] = useState(null);
    // const [fileList, setFileList] = useState([]);

    const [instructors, setInstructors] = useState([]);
    const [loading, setLoading] = useState(true);

    console.log(instructors)
    const currentUser = auth.currentUser.uid;

    let currentInstructor = instructors?.find(ins => ins.id === currentUser)?.attributes.myCourse?.[0]?.coursname?.[0]?.replace(/\s+/g, '');
    console.log(currentInstructor)

    //const fileListRef = ref(storage, `${currentInstructor}/`); // Declare and initialize fileListRef

    // useEffect(() => {
    //     listAll(fileListRef).then((res) => {
    //         setFileList([]); // Clear fileList state
    //         res.items.forEach((item) => {
    //             getDownloadURL(item).then((url) => {
    //                 setFileList(pre => [...pre, url]);
    //             });
    //         });
    //     });
    // }, []); // Add fileListRef as a dependency

    useEffect(() => {
        const fetchInstructors = async () => {
            const instructorCollection = collection(db, 'Instructor');
            const instructorSnapshot = await getDocs(instructorCollection);
            const instructorsList = instructorSnapshot.docs.map((doc) => ({
                id: doc.id,
                attributes: doc.data(),
            }));
            setInstructors(instructorsList);
            setLoading(false);
        };

        fetchInstructors();
    }, []);

    if (loading) return <div><CircularProgress size={100} color="success" sx={{ margin: "200px 550px 0 0 " }} /></div>;



    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };
    console.log(file)
    console.log(currentUser)
    const handleUpload = () => {
        if (file === null) return;
        const fileRef = ref(storage, `${currentInstructor}/${file.name + v4()}`);
        uploadBytes(fileRef, file)
        
        // .then((snapshot) => {
        //         getDownloadURL(snapshot.ref).then((url) => {
        //             setFileList((pre) => [...pre, url])
        //         });
        //     });
    };

    return (
        <div>
            <h1>Instructor Component</h1>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload File</button>
            {/* {fileList.map((url, index) => {
                return (
                    <div key={index}>
                        <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>
                    </div>
                );
            })} */}
        </div>
    );
};

export default UploadFile;
