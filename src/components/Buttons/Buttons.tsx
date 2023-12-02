import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import React from "react";
import {ButtonProps} from "../../types";

interface Props {
  buttonProps: ButtonProps;
}
const EditButton: React.FC<Props> = ({ buttonProps }) => (
  <Link to={`/quotes/${buttonProps}/edit`}>
    <Button color="primary">Edit Post</Button>
  </Link>
);

const DeleteButton = ({ id }: { id: string }) => (
  <Link to={`/quotes/${id}/edit`}>
    <Button color="danger">Delete Post</Button>
  </Link>
);

const Buttons = ({ id }: { id: string }) => (
  <>
    <EditButton id={id} />
    <DeleteButton id={id} />
  </>
);

export default Buttons;