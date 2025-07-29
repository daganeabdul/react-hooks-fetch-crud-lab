import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, onUpdateQuestion, onDeleteQuestion }) {
  return (
    <section>
      <h2>Questions</h2>
      <ul>
        {questions.map((question) => (
          <QuestionItem
            key={question.id}
            question={question}
            onUpdateQuestion={onUpdateQuestion}
            onDeleteQuestion={onDeleteQuestion}
          />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
