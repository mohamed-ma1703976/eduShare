// DynamicForm.js
import React, { useState , useEffect} from "react";
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

const DynamicForm = ({
    onSubmit,
    initialTitle = "",
    initialDescription = "",
    initialDueDate = "",
    initialQuestions = [],
    userId,
    fetchCourseName,
  }) => {
    const [questions, setQuestions] = useState(
      initialQuestions.length > 0
        ? initialQuestions
        : [
            {
              id: uuidv4(),
              text: "",
              type: "multiple_choice",
              answers: [{ id: uuidv4(), text: "", isCorrect: false }],
            },
          ]
    );
    const [title, setTitle] = useState(initialTitle);
    const [description, setDescription] = useState(initialDescription);
    const [dueDate, setDueDate] = useState(initialDueDate);
    const [courseName, setCourseName] = useState("");  
    useEffect(() => {
      setQuestions(initialQuestions);
    }, [initialQuestions]);
    useEffect(() => {
        setQuestions(initialQuestions);
      }, [initialQuestions]);
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
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = questions.map((q) => ({ question: q.text, answers: q.answers }));
    onSubmit({ title, description, dueDate, courseName, questions: data });
  };

    

  return (
    <form onSubmit={handleSubmit}>
        <TextField
          label="Title"
          fullWidth
          margin="dense"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <TextField
          label="Description"
          fullWidth
          multiline
          rows={4}
          margin="dense"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
<TextField
        label="Due Date"
        type="datetime-local"
        fullWidth
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        InputLabelProps={{
          shrink: true,
        }}
      />
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
        <Button variant="contained" type="submit" sx={{ backgroundColor: '#1abc9c', marginRight: '16px' }}>
          Submit
        </Button>
      </form>
    );
  };
  
  export default DynamicForm;