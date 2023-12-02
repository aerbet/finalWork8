import React from 'react';

interface ButtonsProps {
  onEditClick: () => void;
  onDeleteClick: () => void;
}

const Buttons: React.FC<ButtonsProps> = ({ onEditClick, onDeleteClick }) => {
  return (
    <div className="btn-group">
      <button className="btn btn-secondary" onClick={onEditClick}>
        Edit
      </button>
      <button className="btn btn-danger" onClick={onDeleteClick}>
        Delete
      </button>
    </div>
  );
};

export default Buttons;