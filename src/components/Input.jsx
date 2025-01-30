export default function Input() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const inputLetter = letters.map((letter, index) => {
    return (
      <button key={index} className="key-container">
        {letter}
      </button>
    );
  });

  return <section className="keyboard-container">{inputLetter}</section>;
}
