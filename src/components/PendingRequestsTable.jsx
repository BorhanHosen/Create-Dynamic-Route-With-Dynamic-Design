import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const PendingRequestsTable = ({ pendingRequests }) => {
  // useEffect(() => console.log(pendingRequests), []);
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
            {pendingRequests.length > 0 ? (
              pendingRequests.map((request, index) => (
                <tr key={index}>
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

export default PendingRequestsTable;
