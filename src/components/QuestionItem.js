import React, { useState } from "react";

function QuestionItem({ question, onUpdateQuestion, onDeleteQuestion }) {
  const { id, prompt, answers, correctIndex } = question;

  const [selectedIndex, setSelectedIndex] = useState(correctIndex);

  function handleChange(event) {
    const newCorrectIndex = parseInt(event.target.value, 10);
    setSelectedIndex(newCorrectIndex);

    fetch(`http://localhost:4000/questions/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ correctIndex: newCorrectIndex }),
    })
      .then((res) => res.json())
      .then((updatedQuestion) => {
        onUpdateQuestion(updatedQuestion);
      });
  }

  function handleDelete() {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "DELETE",
    }).then(() => onDeleteQuestion(question));
  }

  return (
    <li>
      <h4>{prompt}</h4>
      <label>
        Correct Answer:
        <select value={selectedIndex} onChange={handleChange}>
          {answers.map((answer, index) => (
            <option key={index} value={index}>
              {answer}
            </option>
          ))}
        </select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
