// src/components/DynamicFormLoader.js
import React from "react";
import AccessRightsRequestForm from "./AccessRightsRequestForm";
import AccessControlRequestForm from "./AccessControlRequestForm";
import ChangeRequestForm from "./ChangeRequestForm";
import AccessControlRequestFormEdit from "./AccessControlRequestFormEdit";
import AccessRightsRequestFormEdit from "./AccessRightsRequestFormEdit";
import ChangeRequestFormEdit from "./ChangeRequestFormEdit";

const DynamicFormLoader = ({ formId, type }) => {
  //   switch (formId) {
  //     case "1001":
  //       return <AccessRightsRequestForm data={data} />;
  //     case "1002":
  //       return <AccessControlRequestForm data={data} />;
  //     case "1003":
  //       return <ChangeRequestForm data={data} />;
  //     default:
  //       return <div>Form not found</div>;
  //   }
  switch (true) {
    case formId === "1001" && type === "view":
      return <AccessRightsRequestForm />;
    case formId === "1001" && type === "edit":
      return <AccessRightsRequestFormEdit />;
    case formId === "1002" && type === "view":
      return <AccessControlRequestForm />;
    case formId === "1002" && type === "edit":
      return <AccessControlRequestFormEdit />;
    case formId === "1003" && type === "view":
      return <ChangeRequestForm />;
    case formId === "1003" && type === "edit":
      return <ChangeRequestFormEdit />;
      break;
    default:
      return <div>Form not found</div>;
  }
};

export default DynamicFormLoader;
