import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, doc, getDoc, updateDoc } from 'firebase/firestore';
import { db, auth } from '../../Firebase/Firebase';
import Loading from '../../component/Loading';
import DynamicForm from '../../component/Instructor/DynamicForm';

export default function TakeTest() {
  const { testId } = useParams();
  const [testData, setTestData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submissionData, setSubmissionData] = useState([]);

  useEffect(() => {
    const getTest = async () => {
      const docRef = doc(db, 'tests', testId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setTestData({ id: docSnap.id, data: docSnap.data() });
      } else {
        console.log('No such document!');
      }

      setLoading(false);
    };

    getTest();
  }, [testId]);

  const handleFormSubmit = (data) => {
    setSubmissionData(data);
  };

  const handleSubmission = async () => {
    const user = auth.currentUser;
    const studentId = user.uid;
    const { questions } = testData.data;
    let score = 0;

    for (let i = 0; i < submissionData.length; i++) {
      const submittedAnswer = submissionData[i].answers.find((a) => a.isCorrect);
      const correctAnswer = questions[i].answers.find((a) => a.isCorrect);

      if (submittedAnswer.text === correctAnswer.text) {
        score += 1;
      }
    }

    const docRef = doc(db, 'tests', testId, 'submissions', studentId);
    await updateDoc(docRef, {
      score: score,
      submittedAnswers: submissionData,
      submittedAt: new Date(),
    });

    alert(`Your score is ${score}/${questions.length}`);
  };

  if (loading) {
    return <Loading />;
  }

  const { title, description, questions } = testData.data;

  return (
    <div style={{ margin: '20px' }}>
      <h2>{title}</h2>
      <p>{description}</p>
      <DynamicForm onSubmit={handleFormSubmit} initialQuestions={questions} />
      <button onClick={handleSubmission}>Submit Test</button>
    </div>
  );
}
