// src/components/RejectedRequestsTable.js
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const RejectedRequestsTable = ({ rejectedRequests }) => {
  useEffect(() => console.log(rejectedRequests), []);
  return (
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
          {rejectedRequests.length > 0 ? (
            rejectedRequests.map((request, index) => (
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
              <td colSpan="4">No rejected requests found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default RejectedRequestsTable;

// src/components/PendingRequestsTable.js
// import React, { useEffect } from "react";
// import { Link } from "react-router-dom";

// const RejectedRequestsTable = ({ rejectedrequests }) => {
//   useEffect(() => console.log(rejectedrequests), []);
//   return (
//     <div>
//       <div>
//         <table>
//           <thead>
//             <tr>
//               <th>SN</th>
//               <th>User ID</th>
//               <th>Form Name</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {rejectedrequests.length > 0 ? (
//               rejectedrequests.map((request, index) => (
//                 <tr key={request.id}>
//                   <td>{index + 1}</td>
//                   <td>{request.userid}</td>
//                   <td>{request.formname}</td>
//                   <td>
//                     <Link to={`/view/${request.formid}/${request.id}`}>
//                       <button>View</button>
//                     </Link>
//                     <Link to={`/edit/${request.formid}/${request.id}`}>
//                       <button>Edit</button>
//                     </Link>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="4">No pending requests found.</td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default RejectedRequestsTable;
