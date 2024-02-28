import React from 'react'

const Treatments = () => {
  return ( 
    <>
    <div className="flex mx-16 my-64">
        <div>Diagnostic Results</div>
        <div className="text-xl py-1 font-bold">Placeholder</div>
    </div>

    <div className="treatments">
      <div className="quick-facts">
        <h2>Quick Facts</h2>
        <textarea
          className="quick-facts-textbox"
          placeholder="Enter quick facts here..."
          rows={5}
          cols={5}
        />
      </div>
      <div className="steps">
        <h2>Next Steps</h2>
        <textarea
          className="steps-textbox"
          placeholder="Enter steps here..."
          rows={5}
          cols={5}
        />
      </div>
    </div>
    </>
  );
};

export default Treatments