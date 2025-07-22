import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);

  function handleAddQuestion(newQuestion) {
    setQuestions([...questions, newQuestion]);
  }

  function handleDeleteQuestion(deletedId) {
    setQuestions(questions.filter((q) => q.id !== deletedId));
  }

  function handleUpdateCorrectAnswer(updatedQuestion) {
    const updatedList = questions.map((q) =>
      q.id === updatedQuestion.id ? updatedQuestion : q
    );
    setQuestions(updatedList);
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? (
        <QuestionForm onAddQuestion={handleAddQuestion} />
      ) : (
        <QuestionList
          questions={questions}
          setQuestions={setQuestions}
          onDelete={handleDeleteQuestion}
          onUpdate={handleUpdateCorrectAnswer}
        />
      )}
    </main>
  );
}

export default App;
