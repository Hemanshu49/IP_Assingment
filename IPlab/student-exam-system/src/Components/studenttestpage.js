import React, { useState } from 'react';
import './StudentTestPage.css'; // Import your custom CSS file

const StudentTestPage = () => {
  const [testData, setTestData] = useState({
    questions: [
      {
        id: 1,
        question: 'What is 2 + 2?',
        options: ['3', '4', '5', '6'],
        correctAnswer: '4',
        selectedAnswer: null,
      },
      {
        id: 2,
        question: 'What is the capital of France?',
        options: ['Madrid', 'Rome', 'Paris', 'Berlin'],
        correctAnswer: 'Paris',
        selectedAnswer: null,
      },
      // Add more questions here
    ],
    score: 0,
    isSubmitted: false,
  });

  const handleSelectAnswer = (questionId, selectedAnswer) => {
    setTestData((prevData) => ({
      ...prevData,
      questions: prevData.questions.map((question) => {
        if (question.id === questionId) {
          return {
            ...question,
            selectedAnswer,
          };
        }
        return question;
      }),
    }));
  };

  const handleSubmitTest = () => {
    let score = 0;
    
    testData.questions.forEach((question) => {
      if (question.selectedAnswer === question.correctAnswer) {
        score++;
      }
    });

    setTestData((prevData) => ({
      ...prevData,
      score,
      isSubmitted: true,
    }));
  };

  return (
    <div className="student-test-page">
      <h2>Test Title</h2>
      <form onSubmit={handleSubmitTest}>
        {testData.questions.map((question) => (
          <div key={question.id} className="question">
            <p>{question.question}</p>
            <ul className="options">
              {question.options.map((option) => (
                <li key={option}>
                  <label>
                    <input
                      type="radio"
                     name={`question-${question.id}`}
                      value={option}
                      checked={question.selectedAnswer === option}
                      onChange={(e) =>
                        handleSelectAnswer(question.id, e.target.value)
                      }
                    />
                    {option}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <button type="submit" className="submit-button">
          Submit Test
        </button>
      </form>
      {testData.isSubmitted && (
        <div className="result">
          <p>Your score: {testData.score}/{testData.questions.length}</p>
          <p>Correct Answers:</p>
          <ul className="correct-answers">
            {testData.questions.map((question) => (
              <li key={question.id}>
                {question.question}: {question.correctAnswer}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default StudentTestPage;