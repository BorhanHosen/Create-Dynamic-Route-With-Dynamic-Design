// src/components/EditForm.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DynamicFormLoader from "./DynamicFormLoader";

const EditForm = () => {
  const { formid, type } = useParams();
  //   const [formData, setFormData] = useState(null);

  //   useEffect(() => {
  //     const fetchFormData = async () => {
  //       // Fetch form data based on formid and requestid here
  //       const response = await fetch(`YOUR_API_URL/${formid}/${requestid}`);
  //       const data = await response.json();
  //       setFormData(data);
  //     };

  //     fetchFormData();
  //   }, [formid, requestid]);

  return (
    <div>
      {formid ? (
        <DynamicFormLoader formId={formid} type={type} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default EditForm;
