import React, { useEffect, useState } from 'react';
import { auth, collection, db, storage } from '../../Firebase/Firebase';
import { getDownloadURL, listAll, ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';
import { getDocs } from 'firebase/firestore';
import { CircularProgress, Button } from '@mui/material';

const UploadFile = ({ setFileList }) => {
    const [file, setFile] = useState(null);
    const [instructors, setInstructors] = useState([]);
    const [loading, setLoading] = useState(true);

    const currentUser = auth.currentUser.uid;

    let currentInstructor = instructors?.find(ins => ins.id === currentUser)?.attributes.myCourse?.[0]?.coursname?.[0]?.replace(/\s+/g, '');

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

    useEffect(() => {
        if (currentInstructor) {
            const fileListRef = ref(storage, `${currentInstructor}/`);
            listAll(fileListRef).then((res) => {
                const promises = res.items.map((item) => getDownloadURL(item));
                Promise.all(promises).then((urls) => {
                    const files = urls.map((url, index) => ({ name: res.items[index].name, url }));
                    setFileList(files);
                    });
                    });
                    }
                    }, [currentInstructor, setFileList]);
                    if (loading)
    return (
        <div>
            <CircularProgress size={100} color="success" sx={{ margin: '200px 550px 0 0 ' }} />
        </div>
    );

const handleFileChange = (e) => {
    setFile(e.target.files[0]);
};

const handleUpload = () => {
    if (file === null) return;
    const fileRef = ref(storage, `${currentInstructor}/${file.name + v4()}`);
    uploadBytes(fileRef, file).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
            setFileList((prev) => [...prev, { name: file.name, url }]);
        });
    });
};

return (
    <div>
        <input type="file" onChange={handleFileChange} />
        <Button variant="contained" color="primary" onClick={handleUpload}>
            Upload File
        </Button>
    </div>
);
};
export default UploadFile;