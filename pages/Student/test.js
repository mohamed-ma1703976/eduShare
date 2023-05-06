import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { db, collection } from '../../Firebase/Firebase'

import Loading from "../../component/Loading ";

const Test = () => {
  const router = useRouter();
  // const { testId } = router.query;
  //const { myParam: testId } = router.query;
  //console.log(testId)
  let testId = 'UT7VvQI3kawbvxQ24jJA'
  const [loading, setLoading] = useState(false);
  const [testData, setTestData] = useState([]);
  const [score, setScore] = useState(null);
  const [selectedAnswers, setSelectedAnswers] = useState({});

  console.log(testId)
  useEffect(() => {
    const fetchTest = async () => {
      const studentCollection = collection(db, 'tests');
      const studentSnapshot = await getDocs(studentCollection);
      const studentList = studentSnapshot.docs.map((doc) => ({
        id: doc.id,
        attributes: doc.data(),
      }));
      setTestData(studentList);
    };


    fetchTest();
  }, [])

  console.log(testData)
  const handleAnswerSelect = (questionId, answer) => {
    setSelectedAnswers((prevState) => ({
      ...prevState,
      [questionId]: answer,
    }));
  };

  const handleTestSubmit = async () => {
    //setLoading(true);
    const numCorrectAnswers = Object.values(selectedAnswers).reduce(
      (acc, val, idx) => {
        const question = testData.questions[idx];
        const isCorrectAnswer = question.answer === val;
        return isCorrectAnswer ? acc + 1 : acc;
      },
      0
    );

    const scorePercentage = Math.round(
      (numCorrectAnswers / testData.questions.length) * 100
    );

    setScore(scorePercentage);

    try {
      const testDocRef = doc(db, "tests", testId);
      await setDoc(testDocRef, {
        score: scorePercentage,
        completed: true,
      }, { merge: true });
    } catch (error) {
      console.error("Error submitting test: ", error);
    }

    //setLoading(false);
  };

  if (loading || !testData) {
    console.log(loading, testData)
    return <Loading />;
  }

  //const { title, questions } = testData;
  console.log(testData)
  return (
    <Box sx={{ padding: 4 }}>


      {testData.map((question) => (
        <Box key={question.id} sx={{ marginBottom: 4 }}>
          <Typography variant="h4" sx={{ marginBottom: 4 }}>
            {question.attributes.title}
          </Typography>
          <Card variant="outlined">
            <CardContent>
              {question.attributes
                .questions.map(questions => {
                  return <div>
                    <Typography variant="h6">{questions.title}</Typography>

                    <FormControl component="fieldset">
                      <RadioGroup
                        aria-label={`question-${questions.id}-answers`}
                        name={`question-${questions.id}-answers`}
                        value={selectedAnswers[questions.id] || ""}
                        onChange={(e) =>
                          handleAnswerSelect(questions.id, e.target.value)
                        }
                      >
                        {questions.answers.map((option) => (
                          <FormControlLabel
                            key={option.text}
                            value={option.text}
                            control={<Radio />}
                            label={option.text}
                          />
                        ))}
                      </RadioGroup>
                    </FormControl>

                  </div>

                })}

            </CardContent>
          </Card>
        </Box>
      ))}

      <Box sx={{ marginTop: 4 }}>
        <Button variant="contained" onClick={handleTestSubmit}>
          Submit Test
        </Button>
      </Box>

      {score !== null && (
        <Box sx={{ marginTop: 4 }}>
          <Typography variant="h5">Your Score: {score}%</Typography>
        </Box>
      )}
    </Box>
  );
};

export default Test;
