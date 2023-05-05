// DynamicForm.js
import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  IconButton,
  FormControlLabel,
  Checkbox,
  Select,
  MenuItem,
} from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const DynamicForm = ({ onSubmit }) => {
    const [questions, setQuestions] = useState([
        {
          id: uuidv4(),
          text: "",
          type: "multiple_choice",
          answers: [{ id: uuidv4(), text: "", isCorrect: false }],
        },
      ]);

  const addQuestion = () => {
    setQuestions([
      ...questions,
      { id: uuidv4(), text: "", type: "multiple_choice", answers: [{ id: uuidv4(), text: "", isCorrect: false }] },
    ]);
  };

  const removeQuestion = (id) => {
    setQuestions(questions.filter((question) => question.id !== id));
  };

  const updateQuestion = (id, newText) => {
    setQuestions(
      questions.map((question) =>
        question.id === id ? { ...question, text: newText } : question
      )
    );
  };

  const updateQuestionType = (id, newType) => {
    setQuestions(
      questions.map((question) =>
        question.id === id ? { ...question, type: newType } : question
      )
    );
  };

  const addAnswer = (questionId) => {
    setQuestions(
      questions.map((question) =>
        question.id === questionId
          ? { ...question, answers: [...question.answers, { id: uuidv4(), text: "", isCorrect: false }] }
          : question
      )
    );
  };

  const removeAnswer = (questionId, answerId) => {
    setQuestions(
      questions.map((question) =>
        question.id === questionId
          ? { ...question, answers: question.answers.filter((answer) => answer.id !== answerId) }
          : question
      )
    );
  };

  const updateAnswer = (questionId, answerId, newText, isCorrect) => {
    setQuestions(
      questions.map((question) =>
        question.id === questionId
          ? {
              ...question,
              answers: question.answers.map((answer) =>
                answer.id === answerId ? { ...answer, text: newText, isCorrect } : answer
              ),
            }
          : question
      )
    );
  };

  const updateTrueFalseAnswer = (questionId, isTrue) => {
    setQuestions(
      questions.map((question) =>
        question.id === questionId
          ? {
              ...question,
              answers: [{ id: uuidv4(), text: isTrue ? "True" : "False", isCorrect: isTrue }],
            }
          : question
      )
    );
  };
  const updateShortAnswer = (questionId, newText) => {
    setQuestions(
      questions.map((question) =>
        question.id === questionId
          ? {
              ...question,
              answers: [{ id: uuidv4(), text: newText, isCorrect: true }],
            }
          : question
      )
    );
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(questions);
  };

  return (
    <Box
      component="form"
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      onSubmit={handleSubmit}
    >
      {questions.map((question, index) => (
        <Box key={question.id} sx={{ width: "100%", mb: 2 }}>
          <TextField
            fullWidth
            required
            label={`Question ${index + 1}`}
            value={question.text}
            onChange={(event) => updateQuestion(question.id, event.target.value)}
            />
            <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
              <Typography>Type:</Typography>
              <Select
  value={question.type}
  onChange={(event) => updateQuestionType(question.id, event.target.value)}
>
  <MenuItem value="multiple_choice">Multiple Choice</MenuItem>
  <MenuItem value="true_false">True/False</MenuItem>
  <MenuItem value="short_answer">Short Answer</MenuItem>
  <MenuItem value="multiple_answers">Multiple Answers</MenuItem>
</Select>
            </Box>
            {question.type === "multiple_choice" &&
              question.answers.map((answer, answerIndex) => (
                <Box key={answer.id} sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                  <TextField
                    fullWidth
                    required
                    label={`Answer ${answerIndex + 1}`}
                    value={answer.text}
                    onChange={(event) =>
                      updateAnswer(question.id, answer.id, event.target.value, answer.isCorrect)
                    }
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={answer.isCorrect}
                        onChange={(event) =>
                          updateAnswer(question.id, answer.id, answer.text, event.target.checked)
                        }
                      />
                    }
                    label="Correct"
                  />
                  <IconButton onClick={() => removeAnswer(question.id, answer.id)}>
                    <RemoveIcon />
                  </IconButton>
                </Box>
              ))}
            {question.type === "multiple_choice" && (
              <Button
                sx={{ mt: 1 }}
                size="small"
                onClick={() => addAnswer(question.id)}
                startIcon={<AddIcon />}
              >
                Add Answer
              </Button>
            )}
            {question.type === "true_false" && (
              <Box sx={{ display: "flex", flexDirection: "column", mt: 1 }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={question.answers[0]?.isCorrect}
                      onChange={(event) =>
                        updateTrueFalseAnswer(question.id, event.target.checked)
                      }
                    />
                  }
                  label="True"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={!question.answers[0]?.isCorrect}
                      onChange={(event) =>
                        updateTrueFalseAnswer(question.id, !event.target.checked)
                      }
                    />
                  }
                  label="False"
                />
              </Box>
            )}
            {question.type === "short_answer" && (
  <Box sx={{ mt: 1 }}>
    <TextField
      fullWidth
      required
      label="Answer"
      value={question.answers[0]?.text}
      onChange={(event) => updateShortAnswer(question.id, event.target.value)}
    />
  </Box>
)}
{question.type === "multiple_answers" &&
  question.answers.map((answer, answerIndex) => (
    <Box key={answer.id} sx={{ display: "flex", alignItems: "center", mt: 1 }}>
      <TextField
        fullWidth
        required
        label={`Answer ${answerIndex + 1}`}
        value={answer.text}
        onChange={(event) =>
          updateAnswer(question.id, answer.id, event.target.value, answer.isCorrect)
        }
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={answer.isCorrect}
            onChange={(event) =>
              updateAnswer(question.id, answer.id, answer.text, event.target.checked)
            }
          />
        }
        label="Correct"
      />
      
      <IconButton onClick={() => removeAnswer(question.id, answer.id)}>
        <RemoveIcon />
      </IconButton>
      <Button
    sx={{ mt: 1 }}
    size="small"
    onClick={() => addAnswer(question.id)}
    startIcon={<AddIcon />}
  >
    Add Answer
  </Button>
    </Box>
  ))}
            <Button
              sx={{ mt: 1 }}
              color="error"
              size="small"
              onClick={() => removeQuestion(question.id)}
            >
              Remove Question
            </Button>
          </Box>
        ))}
        <Button sx={{ mb: 2 }} onClick={addQuestion}>
          Add Question
        </Button>
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </Box>
    );
  };
  
  export default DynamicForm;