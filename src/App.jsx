// src/App.js
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ViewForm from "./pages/ViewForm";
import EditForm from "./pages/EditForm";
import PendingRequestsTable from "./components/PendingRequestsTable";
import AcceptedRequestsTable from "./components/AcceptedRequestsTable";
import RejectedRequestsTable from "./components/RejectedRequestsTable";
import data from "./components/data";

const App = () => {
  const [pendingRequests, setPendingRequests] = useState([]);
  const [acceptedRequests, setAcceptedRequests] = useState([]);
  const [rejectedRequests, setRejectedRequests] = useState([]);
  const [unitHeadStatus, setUnitHeadStatus] = useState("");
  const [formId, setFormId] = useState("");

  useEffect(() => {
    // Filter requests based on unitheadstatus
    const accepted = data.filter(
      (request) => request.unitheadstatus === "accepted"
    );
    const pending = data.filter(
      (request) => request.unitheadstatus === "pending"
    );
    const rejected = data.filter(
      (request) => request.unitheadstatus === "rejected"
    );
    setAcceptedRequests(accepted);
    setPendingRequests(pending);
    setRejectedRequests(rejected);
    console.log(rejectedRequests);
  }, [data]);

  useEffect(() => {
    // Check if pendingRequests is an array and log unitheadstatus for each request
    if (Array.isArray(data)) {
      data.forEach((request) => {
        console.log(request.unitheadstatus);
        setUnitHeadStatus(request.unitheadstatus); // This will set the status to the last request's status
      });
    }
  }, [data]);

  return (
    <Router>
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <div className="container">
                {pendingRequests.length > 0 && (
                  <div className="box">
                    <h3>Pending Requests</h3>
                    <PendingRequestsTable pendingRequests={pendingRequests} />
                  </div>
                )}
                {acceptedRequests.length > 0 && (
                  <div className="box">
                    <h3>Accepted Requests</h3>
                    <AcceptedRequestsTable
                      acceptedRequests={acceptedRequests}
                    />
                  </div>
                )}
                {rejectedRequests.length > 0 && (
                  <div className="box">
                    <h3>Rejected Requests</h3>
                    <RejectedRequestsTable
                      rejectedRequests={rejectedRequests}
                    />
                  </div>
                )}
              </div>
            }
          />
          <Route path="/:type/:formId/:requestId" element={<ViewForm />} />
          <Route path="/:type/:formId/:requestId" element={<EditForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
