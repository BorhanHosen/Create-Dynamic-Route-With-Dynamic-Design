// src/App.js
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ViewForm from "./pages/ViewForm";
import EditForm from "./pages/EditForm";
import PendingRequestsTable from "./compentents/PendingRequestsTable";
import AcceptedRequestsTable from "./compentents/AcceptedRequestsTable";
import RejectedRequestsTable from "./compentents/RejectedRequestsTable";

const App = () => {
  const [pendingRequests, setPendingRequests] = useState([]);
  const [acceptedRequests, setAcceptedRequests] = useState([]);
  const [rejectedrequests, setRejectedRequests] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      const userid = "06344"; // Replace with actual user ID
      const response = await fetch(
        `http://localhost:8080/api/user/pending/${userid}`
      );
      const data = await response.json();
      setPendingRequests(data);
    };

    fetchRequests();
  }, []);

  useEffect(() => {
    const fetchRequests = async () => {
      const userid = "06177"; // Replace with actual user ID
      const response = await fetch(
        `http://localhost:8080/api/user/accepted/${userid}`
      );
      const data = await response.json();
      setAcceptedRequests(data);
    };

    fetchRequests();
  }, []);
  useEffect(() => {
    const fetchRequests = async () => {
      const userid = "06177"; // Replace with actual user ID
      const response = await fetch(
        `http://localhost:8080/api/user/rejected/${userid}`
      );
      const data = await response.json();
      setRejectedRequests(data);
    };

    fetchRequests();
  }, []);

  return (
    <Router>
      <div className="container">
        <div className="box">
          <h1>Pending Requests</h1>
          <Routes>
            <Route
              path="/"
              element={
                <PendingRequestsTable pendingRequests={pendingRequests} />
              }
            />
            <Route path="/:type/:formid/:requestid" element={<ViewForm />} />
            <Route path="/:type/:formid/:requestid" element={<EditForm />} />
          </Routes>
        </div>
        <div className="box">
          <h1>Accepeted Requests</h1>
          <Routes>
            <Route
              path="/"
              element={
                <AcceptedRequestsTable acceptedRequests={acceptedRequests} />
              }
            />
            <Route path="/:type/:formid/:requestid" element={<ViewForm />} />
            <Route path="/:type/:formid/:requestid" element={<EditForm />} />
          </Routes>
        </div>
        <div className="box">
          <h1>Rejected Requests</h1>
          <Routes>
            <Route
              path="/"
              element={
                <RejectedRequestsTable rejectedrequests={rejectedrequests} />
              }
            />
            <Route path="/:type/:formid/:requestid" element={<ViewForm />} />
            <Route path="/:type/:formid/:requestid" element={<EditForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
