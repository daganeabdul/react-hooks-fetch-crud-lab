import React, { useEffect, useState } from "react";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [questions, setQuestions] = useState([]);

  const [showForm, setShowForm] = useState(false);


  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((res) => res.json())
      .then((data) => setQuestions(data));
  }, []);

  function handleAddQuestion(newQuestion) {
    setQuestions([...questions, newQuestion]);

    setShowForm(false);

  }

  function handleUpdateQuestion(updatedQuestion) {
    const updatedQuestions = questions.map((q) =>
      q.id === updatedQuestion.id ? updatedQuestion : q
    );
    setQuestions(updatedQuestions);
  }

 
  

  function handleDeleteQuestion(deletedQuestion) {
    const updatedQuestions = questions.filter((q) => q.id !== deletedQuestion.id);
    setQuestions(updatedQuestions);
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <nav>
        <button onClick={() => setShowForm(true)}>New Question</button>
        <button onClick={() => setShowForm(false)}>View Questions</button>
      </nav>
      {showForm ? (

        <QuestionForm onAddQuestion={handleAddQuestion} />
      ) : (
        <QuestionList
          questions={questions}

          onUpdateQuestion={handleUpdateQuestion}
          onDeleteQuestion={handleDeleteQuestion}
        />
      )}
    </section>

  );
}

export default App;
