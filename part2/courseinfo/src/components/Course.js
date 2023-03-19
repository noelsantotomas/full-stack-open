const Course = ({ course }) => {
  const parts = course.parts;
  const total = parts.reduce((sum, part) => sum + part.exercises, 0);
  return (
    <>
      <h1>{course.name}</h1>
      <ul>
        {parts.map((part) => (
          <li key={part.id}>
            {part.name} {part.exercises}
          </li>
        ))}
      </ul>
      <p>Total number of exercises: {total}</p>
    </>
  );
};

export default Course;
