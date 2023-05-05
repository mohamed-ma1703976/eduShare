import { useState } from "react";
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
import { db, doc, getDoc, setDoc } from "../../Firebase/Firebase";
import Loading from "../../component/Loading ";

const Test = () => {
  const router = useRouter();
  const { testId } = router.query;

  const [loading, setLoading] = useState(true);
  const [testData, setTestData] = useState(null);
  const [score, setScore] = useState(null);
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const handleAnswerSelect = (questionId, answer) => {
    setSelectedAnswers((prevState) => ({
      ...prevState,
      [questionId]: answer,
    }));
  };

  const handleTestSubmit = async () => {
    setLoading(true);
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

    setLoading(false);
  };

  if (loading || !testData) {
    return <Loading />;
  }

  const { title, questions } = testData;

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" sx={{ marginBottom: 4 }}>
        {title}
      </Typography>

      {questions.map((question) => (
        <Box key={question.id} sx={{ marginBottom: 4 }}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6">{question.title}</Typography>

              <FormControl component="fieldset">
                <RadioGroup
                  aria-label={`question-${question.id}-answers`}
                  name={`question-${question.id}-answers`}
                  value={selectedAnswers[question.id] || ""}
                  onChange={(e) =>
                    handleAnswerSelect(question.id, e.target.value)
                  }
                >
                  {question.options.map((option) => (
                    <FormControlLabel
                      key={option}
                      value={option}
                      control={<Radio />}
                      label={option}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
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
