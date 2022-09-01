import React from "react";
import "./Content.css";

function Content() {
  return (
    <div className="content">
      <div>
        <p> Hi, </p>
      </div>
      <div>
        <h6>Welcome to</h6>
      </div>
      <div>
        <h2>FilesUpload</h2>
      </div>
      <div className="row">
        <div className="status">
          <div className="text-muted">Question Count</div>
          <div className="quantity">28 Questions</div>
        </div>

        <div className="status">
          <div className="text-muted">Section Count</div>
          <div className="quantity">5 Sections</div>
        </div>

        <div className="status">
          <div className="text-muted">Time Duration</div>
          <div className="quantity">6 minutes</div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Content;
