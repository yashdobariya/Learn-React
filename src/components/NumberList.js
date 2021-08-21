import React from "react";
import LiastItem from "./ListItem";

export default function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => (
    <LiastItem key={number.toString()} value={number} />
  ));
  return <ul>{listItems}</ul>;
}
