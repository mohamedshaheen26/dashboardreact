import React, { useState, useEffect } from 'react';
import './drafts.css';

const Drafts = () => {
  const [drafts, setDrafts] = useState([]);

  // Load drafts from localStorage when the component mounts
  useEffect(() => {
    const storedDrafts = window.localStorage.getItem('Drafts');
    if (storedDrafts) {
      setDrafts(JSON.parse(storedDrafts));
    }
  }, []);

  // Delete draft
  const deleteDraft = (id) => {
    const updatedDrafts = drafts.filter(draft => draft.id !== id);
    setDrafts(updatedDrafts);
    // Update localStorage after deleting a draft
    window.localStorage.setItem('Drafts', JSON.stringify(updatedDrafts));
  };

  return (
    <>
      <div className="drafts d-flex flex-start m-20 gap-20">
        <div className="draft-content d-grid gap-20" id="drafts-content">
          {drafts.length > 0 ? (
            drafts.map(draft => (
              <div key={draft.id} className="box bg-white rad-10 p-10 p-relative">
                <span onClick={() => deleteDraft(draft.id)}>
                  <i className="fa-solid fa-circle-xmark delete"></i>
                </span>
                <h3>{draft.Title}</h3>
                <div className="pdf txt-c">
                  <p className="m-0 txt-l fs-15">
                    {draft.YourThought}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p>No drafts available</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Drafts;
