import React from "react";

const FaqSingle = (props) => {
  return (
    <>
      <div className="card accordion-item">
        <div className="card-header" id={`accordion-heading-1-${props.index}`}>
          <button
            className="collapsed "
            data-bs-toggle="collapse"
            data-bs-target={`#accordion-collapse-1-${props.index}`}
            aria-expanded="false"
            aria-controls={`accordion-collapse-1-${props.index}`}
          >
            {props.title}
          </button>
        </div>
        <div
          id={`accordion-collapse-1-${props.index}`}
          className="collapse"
          aria-labelledby={`accordion-heading-1-${props.index}`}
          data-bs-target={`#accordion-1`}
        >
          <div className="card-body ">
            <p>{props.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqSingle;
