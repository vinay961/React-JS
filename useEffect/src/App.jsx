import React, { useState, useEffect } from 'react';

function DocumentTitleUpdater() {
  const [title, setTitle] = useState(''); // State to hold the title

  // useEffect to update the document title when 'title' changes
  useEffect(() => {
    document.title = title; // Update the document title
  }, [title]); // Runs whenever 'title' changes

  // Handler to update the title as the user types
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <div>
      <h1>Document Title Updater</h1>
      <input
        type="text"
        placeholder="Enter a new document title"
        value={title}
        onChange={handleTitleChange}
      />
    </div>
  );
}

export default DocumentTitleUpdater;
