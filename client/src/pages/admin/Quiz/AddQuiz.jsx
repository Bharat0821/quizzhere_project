import React from 'react'
import { useState } from 'react';
import { Button } from '@/components/ui/button'

const AddQuiz = () => {
  const [quizData, setQuizData] = useState({
    quizTitle: '',
    subTitle: '',
    description: '',
    questions: [
      {
        question: '',
        options: [
          { option: '', isCorrect: false },
          { option: '', isCorrect: false },
          { option: '', isCorrect: false },
          { option: '', isCorrect: false }
        ]
      }
    ]
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuizData({
      ...quizData,
      [name]: value
    });
  };

  const handleQuestionChange = (index, e) => {
    const { name, value } = e.target;
    const updatedQuestions = [...quizData.questions];
    updatedQuestions[index][name] = value;
    setQuizData({
      ...quizData,
      questions: updatedQuestions
    });
  };

  const handleOptionChange = (qIndex, oIndex, e) => {
    const { name, value } = e.target;
    const updatedQuestions = [...quizData.questions];
    updatedQuestions[qIndex].options[oIndex][name] = value;
    setQuizData({
      ...quizData,
      questions: updatedQuestions
    });
  };

  const addQuestion = () => {
    setQuizData({
      ...quizData,
      questions: [
        ...quizData.questions,
        {
          question: '',
          options: [
            { option: '', isCorrect: false },
            { option: '', isCorrect: false },
            { option: '', isCorrect: false },
            { option: '', isCorrect: false }
          ]
        }
      ]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the quiz data to the server
  };
    return (
        <div className='flex flex-col mt-20 px-50 py-10 justify-center items-center'>
        <h1 className='text-4xl font-bold' >Add Quiz</h1>
        <form onSubmit={handleSubmit}>
            <input className='font-black'
            type="text"
            name="quizTitle"
            value={quizData.quizTitle}
            onChange={handleChange}
            placeholder="Quiz Title"
            />
            <input className='font-black'
            type="text"
            name="subTitle"
            value={quizData.subTitle}
            onChange={handleChange}
            placeholder="Sub Title"
            />
            <textarea 
            name="description"
            value={quizData.description}
            onChange={handleChange}
            placeholder="Description"
            />
            
            {quizData.questions.map((question, qIndex) => (
            <div key={qIndex}>
                <input className='font-black'
                type="text"
                name="question"
                value={question.question}
                onChange={(e) => handleQuestionChange(qIndex, e)}
                placeholder={`Question ${qIndex + 1}`}
                />
                {question.options.map((option, oIndex) => (
                <div key={oIndex}>
                    <input
                    type="text"
                    name="option"
                    value={option.option}
                    onChange={(e) => handleOptionChange(qIndex, oIndex, e)}
                    placeholder={`Option ${oIndex + 1}`}
                    />
                    <label>
                    <input
                        type="checkbox"
                        checked={option.isCorrect}
                        onChange={(e) => {
                        const updatedQuestions = [...quizData.questions];
                        updatedQuestions[qIndex].options[oIndex].isCorrect = e.target.checked;
                        setQuizData({
                            ...quizData,
                            questions: updatedQuestions
                        });
                        }}
                    />
                    Correct Answer
                    </label>
                </div>
                ))}
            </div>
            ))}
            
            <Button type="button"
             onClick={addQuestion}
             className='mt-4 mr-20'>Add Question</Button>
            <Button type="submit"
            className='mt-4'>Submit Quiz</Button>
        </form>
        </div>
    );
}

export default AddQuiz;
