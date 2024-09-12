import Title from "./Title";
import { useState } from "react";

type CardProps = {
  title: string;
  description: string;
  username: string;
  setUsername: string;
};

export default function Card(props: CardProps) {
  const {
    title = "Title",
    description = "Description",
    setUsername,
    username,
  } = props;
  const [username, setUsername] = useState("En ny title");

  const changeUsername = () => {
    setUsername("Endret Title");
  };
  return (
    <article>
      <Title title={title} />
      <p>{description}</p>
      <button onClick={changeUsername}>Logg ut</button>
    </article>
  );
}
