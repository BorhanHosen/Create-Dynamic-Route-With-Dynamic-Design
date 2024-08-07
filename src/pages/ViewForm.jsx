// src/components/ViewForm.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DynamicFormLoader from "./DynamicFormLoader";

const ViewForm = () => {
  const { formid, type, requestid } = useParams();

  return (
    <div>
      {formid ? (
        <DynamicFormLoader formId={formid} type={type} requestid={requestid} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ViewForm;
