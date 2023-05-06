import React, { useEffect, useState } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db, auth } from '../../Firebase/Firebase';
import StuNav from '../../component/Student/StuNav';
import StuSideBar from '../../component/Student/StuSideBar';
import TestCard from '../../component/Student/TestCard';
import Loading from '../../component/Loading ';

export default function tests() {
  const [tests, setTests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const studentId = user.uid;
        const instructorQuery = query(
          collection(db, 'Instructor'),
          where('myStudents', 'array-contains', studentId)
        );
        const instructorSnapshot = await getDocs(instructorQuery);
        const instructorIds = instructorSnapshot.docs.map((doc) => doc.id);

        const testsQuery = query(collection(db, 'tests'), where('instructorId', 'in', instructorIds.length > 0 ? instructorIds : ['']));
        const testsSnapshot = await getDocs(testsQuery);
        const testsList = testsSnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }));
        setTests(testsList);
        setLoading(false);
      } else {
        setTests([]);
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <StuNav />
      <div style={{ display: 'flex' }}>
        <StuSideBar />
        {loading ? (
          <Loading />
        ) : (
          <div style={{ flexGrow: 1, margin: '20px' }}>
            {tests.length > 0 ? (
              tests.map((test) => <TestCard key={test.id} test={test.data} />)
            ) : (
              <div>No tests available.</div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
