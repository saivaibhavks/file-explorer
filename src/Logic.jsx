const animals = ["Dog", "Cat", "Elephant", "Giraffe"];
const numbers = [1, 2, 3, 4, 5, 6];

const students = [
  { id: 1, name: "Alice", scores: [85, 90, 78] },
  { id: 2, name: "Bob", scores: [88, 76, 92] },
];

const employees = [
  { id: 1, name: "Alice", isManager: true, team: ["Bob", "Charlie"] },
  { id: 2, name: "David", isManager: false },
];

// Task: Render a list of employees. If an employee is a manager, display their
//  name in bold and include their team. If not, just display their name.

const Logic = () => {
  return (
    <div>
      {animals.map((item, index) => {
        return <li>{item}</li>;
      })}
      {numbers.map((val, ind) => {
        return (
          <div style={{ color: val % 2 === 0 ? "red" : "blue" }}>{val}</div>
        );
      })}
      {students.map((stud, id) => {
        return (
          <div>
            <div>ID - {stud.id}</div>
            <div>NAME - {stud.name}</div>

            <div>
              <div>Scores</div>
              {stud.scores &&
                stud.scores.map((score, scoreId) => {
                  return <div>{score}</div>;
                })}
            </div>
          </div>
        );
      })}
      <div>
        <div>Employees</div>
      </div>
    </div>
  );
};

export default Logic;
