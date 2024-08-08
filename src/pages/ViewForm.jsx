// src/components/ViewForm.js
import React from "react";
import { useParams } from "react-router-dom";
import DynamicFormLoader from "./DynamicFormLoader";

const ViewForm = () => {
  const { formId, type } = useParams();

  return (
    <div>
      {formId ? (
        <DynamicFormLoader formId={formId} type={type} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ViewForm;
