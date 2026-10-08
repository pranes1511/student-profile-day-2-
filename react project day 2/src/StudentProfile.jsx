import { useEffect } from "react";

function StudentProfile({ name, department, year, count, setCount }) {
  useEffect(() => {
    const previousTitle = document.title;

    document.title = `Practice Sessions: ${count}`;

    return () => {
      document.title = previousTitle;
    };
  }, [count]);

  return (
    <div>
      <h2>Student Profile</h2>

      <p>Name: {name}</p>
      <p>Department: {department}</p>
      <p>Year: {year}</p>

      <h3>Practice Sessions: {count}</h3>

      <button onClick={() => setCount(count + 1)}>
        Complete Practice
      </button>

      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}

export default StudentProfile;