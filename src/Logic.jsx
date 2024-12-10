const animals = ["Dog", "Cat", "Elephant", "Giraffe"];
const numbers = [1, 2, 3, 4, 5, 6];

const Logic = () => {
  return (
    <div>
      {animals.map((item, index) => {
        return <li>{item}</li>;
      })}
    </div>
  );
};

export default Logic;
