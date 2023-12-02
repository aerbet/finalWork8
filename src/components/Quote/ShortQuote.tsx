import React, { useState } from 'react';

interface ShortQuoteProps {
  text: string;
  id: string;
  author: string;
  onDelete: () => void;
  onEdit: (newText: string, newAuthor: string) => Promise<void>;
}

const ShortQuote: React.FC<ShortQuoteProps> = ({ text, author, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);
  const [editedAuthor, setEditedAuthor] = useState(author);

  const handleEdit = async () => {
    await onEdit(editedText, editedAuthor);
    setIsEditing(false);
  };

  return (
    <div className="card mb-3">
      <div className="card-body">
        {isEditing ? (
          <>
            <textarea
              className="form-control mb-2"
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
            />
            <input
              type="text"
              className="form-control mb-2"
              value={editedAuthor}
              onChange={(e) => setEditedAuthor(e.target.value)}
            />
            <button className="btn btn-success mr-2" onClick={handleEdit}>
              Save
            </button>
            <button className="btn btn-secondary" onClick={() => setIsEditing(false)}>
              Cancel
            </button>
          </>
        ) : (
          <>
            <p className="card-text">"{text}" - {author}</p>
            <button className="btn btn-danger mr-2" onClick={onDelete}>
              Delete
            </button>
            <button className="btn btn-primary" onClick={() => setIsEditing(true)}>
              Edit
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ShortQuote;