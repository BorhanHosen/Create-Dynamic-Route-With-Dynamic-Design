// src/App.js
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ViewForm from "./pages/ViewForm";
import EditForm from "./pages/EditForm";
import PendingRequestsTable from "./components/PendingRequestsTable";
import AcceptedRequestsTable from "./components/AcceptedRequestsTable";
import RejectedRequestsTable from "./components/RejectedRequestsTable";
import data from "./components/data";

const App2 = () => {
  const [pendingRequests, setPendingRequests] = useState([]);
  const [acceptedRequests, setAcceptedRequests] = useState([]);
  const [rejectedrequests, setRejectedRequests] = useState([]);
  const [unitHeadStatus, setUnitHeadStatus] = useState("");
  const [formid, setFormid] = useState("");

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
  }, [data]);

  useEffect(() => {
    // Check if pendingRequests is an array and log unitheadstatus for each request
    if (Array.isArray(data)) {
      data.forEach((request) => {
        if (request.unitheadstatus === "pending") {
          console.log(request.unitheadstatus);
          setUnitHeadStatus(request.unitheadstatus);
        } else if (request.unitheadstatus === "accepted") {
          console.log(request.unitheadstatus);
          setUnitHeadStatus(request.unitheadstatus);
        } else if (request.unitheadstatus === "rejected") {
          console.log(request.unitheadstatus);
          setUnitHeadStatus(request.unitheadstatus);
        }
      });
    }
  }, [data]);

  // useEffect(() => {
  //   // Set the accepted requests to the imported data array
  //   if (data) {
  //     setUnitHeadStatus(data.unitheadstatus);
  //   }
  // }, [data]);

  // useEffect(() => {
  //   // Set the accepted requests to the imported data array
  //   console.log(data);
  //   if (data.unitheadstatus === "accepted") {
  //     setAcceptedRequests(data);
  //   }
  // }, [data]);

  // useEffect(() => {
  //   // Set the accepted requests to the imported data array
  //   if (data.unitheadstatus === "pending") {
  //     setPendingRequests(data);
  //   }
  // }, [data]);
  // useEffect(() => {
  //   // Set the accepted requests to the imported data array
  //   if (data.unitheadstatus === "rejected") {
  //     setRejectedRequests(data);
  //     console.log(data);
  //   }
  // }, [data]);

  // useEffect(() => {
  //   const fetchRequests = async () => {
  //     const userid = "06344"; // Replace with actual user ID
  //     const response = await fetch(
  //       `http://localhost:8080/api/user/pending/${userid}`
  //     );
  //     const data = await response.json();
  //     setPendingRequests(data);
  //   };

  //   fetchRequests();
  // }, []);

  // useEffect(() => {
  //   const fetchRequests = async () => {
  //     const userid = "06177"; // Replace with actual user ID
  //     const response = await fetch(
  //       `http://localhost:8080/api/user/accepted/${userid}`
  //     );
  //     const data = await response.json();
  //     setAcceptedRequests(data);
  //   };

  //   fetchRequests();
  // }, []);

  // useEffect(() => {
  //   const fetchRequests = async () => {
  //     const userid = "06177"; // Replace with actual user ID
  //     const response = await fetch(
  //       `http://localhost:8080/api/user/rejected/${userid}`
  //     );
  //     const data = await response.json();
  //     setRejectedRequests(data);
  //   };

  //   fetchRequests();
  // }, []);

  return (
    <Router>
      <div className="container">
        {pendingRequests && unitHeadStatus === "pending" && (
          <div className="box">
            <h3>Pending Requests</h3>
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
        )}
        {acceptedRequests && unitHeadStatus === "accepted" && (
          <div className="box">
            <h3>Accepeted Requests</h3>
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
        )}
        {rejectedrequests && unitHeadStatus === "rejected" && (
          <div className="box">
            <h3>Rejected Requests</h3>
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
        )}
      </div>
    </Router>
  );
};

export default App2;
