import { useStoreState, useStoreActions } from "easy-peasy";

const About = () => {
  const todos = useStoreState((state) => state.todos);

  return (
    <ul>
    {todos.map((todo) => (
      <li>{todo.text}</li>
    ))}
  </ul>
  );
};
export default About;
