/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import { useDispatch } from "react-redux";
import { fridge } from "reducers/fridge";
import moment from "moment";
import { Button } from "lib/Button";
import styled from "styled-components";
import { CustomCheckbox } from "./CustomCheckbox";

const ListItem = styled.li`
  list-style: none;
  font-size: 20px;

  label {
    font-style: italic;
    font-size: 12px;
  }
`;

export const Item = (props) => {
  const { id, name, dueDate, category, needsMore, startDate } = props.item;

  const dispatch = useDispatch();

  const handleRemoveButtonClick = () => {
    dispatch(fridge.actions.removeItem(id));
  };

  return (
    <ListItem>
      <span>{category}: </span>
      <span>{name.toUpperCase()} </span>

      <label>buy more</label>
      <CustomCheckbox text="" needsMore={needsMore} id={id}></CustomCheckbox>

      <Button onClick={handleRemoveButtonClick}>remove</Button>

      <span>ADDED: {moment(startDate).format("MMM Do YYYY")}</span>
      {dueDate && <span> -> DUE: {moment(dueDate).format("MMM Do YYYY")}</span>}
    </ListItem>
  );
};
