// import React from "react";
// import ChangeRequestForm from "./ChangeRequestForm";
// import ChangeRequestFormEdit from "./ChangeRequestFormEdit";
// import AccessRightsRequestForm from "./AccessRightsRequestForm";
// import AccessRightsRequestFormEdit from "./AccessRightsRequestFormEdit";
// import AccessControlRequestForm from "./AccessControlRequestForm";
// import AccessControlRequestFormEdit from "./AccessControlRequestFormEdit";

// const DynamicFormLoader = ({ formId, type }) => {
//   switch (true) {
//     case formId === "1001" && type === "view":
//       return <AccessRightsRequestForm />;
//     case formId === "1001" && type === "edit":
//       return <AccessRightsRequestFormEdit />;
//     case formId === "1002" && type === "view":
//       return <AccessControlRequestForm />;
//     case formId === "1002" && type === "edit":
//       return <AccessControlRequestFormEdit />;
//     case formId === "1003" && type === "view":
//       return <ChangeRequestForm />;
//     case formId === "1003" && type === "edit":
//       return <ChangeRequestFormEdit />;
//       break;
//     default:
//       return <div>Form not found</div>;
//   }
// };

// export default DynamicFormLoader;

import React from "react";
import ChangeRequestForm from "./ChangeRequestForm";
import ChangeRequestFormEdit from "./ChangeRequestFormEdit";
import AccessRightsRequestForm from "./AccessRightsRequestForm";
import AccessRightsRequestFormEdit from "./AccessRightsRequestFormEdit";
import AccessControlRequestForm from "./AccessControlRequestForm";
import AccessControlRequestFormEdit from "./AccessControlRequestFormEdit";

const DynamicFormLoader = ({ formId, type }) => {
  if (formId === "1001") {
    return type === "view" ? (
      <AccessRightsRequestForm />
    ) : (
      <AccessRightsRequestFormEdit />
    );
  } else if (formId === "1002") {
    return type === "view" ? (
      <AccessControlRequestForm />
    ) : (
      <AccessControlRequestFormEdit />
    );
  } else if (formId === "1003") {
    return type === "view" ? <ChangeRequestForm /> : <ChangeRequestFormEdit />;
  } else {
    return <div>Form not found</div>;
  }
};

export default DynamicFormLoader;
