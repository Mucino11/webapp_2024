import { useState } from "react";

type TitleProps = {
  title?: string;
};
export default function Title(props: TitleProps) {
  const { title = "Default title" } = props;
  return (
    <>
      <h2>{title}</h2>
      <p>{username}</p>
    </>
  );
}
