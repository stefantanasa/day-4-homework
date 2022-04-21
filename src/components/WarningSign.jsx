import React, { Component } from "react";
import { Badge, Alert } from "react-bootstrap";
const WarningSign = ({ alertText }) => {
  return (
    <Alert variant="danger">
      <Alert.Heading>Hey, nice to see you</Alert.Heading>
      <p>
        Aww yeah, you successfully read this important alert message. This
        example text is going to run a bit longer so that you can see how
        spacing within an alert works with this kind of content.
      </p>
      <hr />
      <p className="mb-0">{alertText}</p>
    </Alert>
  );
};

export default WarningSign;
