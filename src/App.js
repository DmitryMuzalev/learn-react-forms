import { Alert, Button, Container, Typography } from '@mui/material';
import Textarea from '@mui/joy/Textarea';
import { useState } from 'react';

function submitForm(answer) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isAnswerCorrect = answer === 'lima';
      isAnswerCorrect
        ? resolve()
        : reject(new Error('Good guess but a wrong answer. Try again!'));
    }, 2000);
  });
}

function Quiz() {
  const [answer, setAnswer] = useState('');
  const [status, setStatus] = useState('typing');
  const [error, setError] = useState(null);

  const handlerSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      await submitForm(answer.toLowerCase().trim());
      setStatus('success');
    } catch (error) {
      setError(error);
      setStatus('rejected');
    }
  };

  const onChangeTextarea = (e) => {
    setAnswer(e.target.value);
    setStatus('typing');
  };

  return status === 'success' ? (
    <Alert security="success">That's right!</Alert>
  ) : (
    <form onSubmit={handlerSubmit}>
      <Typography
        component="h2"
        variant="h5"
        className="quiz__question"
        sx={{ marginBottom: '10px' }}
      >
        In which city is there a billboard that turns air into drinkable water?
      </Typography>
      <Textarea
        value={answer}
        onChange={onChangeTextarea}
        disabled={status === 'submitting'}
        sx={{ marginBottom: '10px' }}
      />
      <Button
        type="submit"
        variant="contained"
        disabled={!answer.length || status === 'submitting'}
        sx={{ width: 200, marginBottom: 1.5 }}
      >
        Submit
      </Button>
      {error && <Alert severity="error">{error.message}</Alert>}
    </form>
  );
}

function App() {
  return (
    <Container component="section" maxWidth="md">
      <Typography
        component="h1"
        variant="h3"
        sx={{ textAlign: 'center', marginBottom: 2 }}
      >
        Mini quiz
      </Typography>
      <Quiz />
    </Container>
  );
}

export default App;
