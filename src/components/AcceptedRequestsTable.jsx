// src/components/PendingRequestsTable.js
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const AcceptedRequestsTable = ({ acceptedRequests }) => {
  // useEffect(() => console.log(acceptedRequests), []);
  return (
    <div>
      <div>
        <table>
          <thead>
            <tr>
              <th>SN</th>
              <th>User ID</th>
              <th>Form Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {acceptedRequests.length > 0 ? (
              acceptedRequests.map((request, index) => (
                <tr key={request.id}>
                  <td>{index + 1}</td>
                  <td>{request.userid}</td>
                  <td>{request.formname}</td>
                  <td>
                    <Link to={`/view/${request.formid}/${request.id}`}>
                      <button>View</button>
                    </Link>
                    <Link to={`/edit/${request.formid}/${request.id}`}>
                      <button>Edit</button>
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No pending requests found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AcceptedRequestsTable;
