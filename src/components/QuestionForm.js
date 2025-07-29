import React, { useState } from "react";

function QuestionForm({ onAddQuestion }) {
  const [prompt, setPrompt] = useState("");
  const [answers, setAnswers] = useState(["", "", "", ""]);
  const [correctIndex, setCorrectIndex] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    const newQuestion = {
      prompt,
      answers,
      correctIndex: parseInt(correctIndex),
    };
    onAddQuestion(newQuestion);

    // Reset form
    setPrompt("");
    setAnswers(["", "", "", ""]);
    setCorrectIndex(0);
  }

  function handleAnswerChange(index, value) {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = value;
    setAnswers(updatedAnswers);
  }

  return (
    <section>
      <h2>New Question</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Prompt:
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
        </label>

        {answers.map((answer, index) => (
          <label key={index}>
            Answer {index + 1}:
            <input
              type="text"
              value={answer}
              onChange={(e) => handleAnswerChange(index, e.target.value)}
            />
          </label>
        ))}

        <label>
          Correct Answer:
          <select
            value={correctIndex}
            onChange={(e) => setCorrectIndex(e.target.value)}
          >
            {answers.map((_, index) => (
              <option key={index} value={index}>
                {`Answer ${index + 1}`}
              </option>
            ))}
          </select>
        </label>

        {/* ✅ Crucial: type must be submit for test to work */}
        <button type="submit">Add Question</button>
      </form>
    </section>
  );
}

export default QuestionForm;
