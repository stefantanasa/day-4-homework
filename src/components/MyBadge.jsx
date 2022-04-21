import React, { Component } from "react";
import { Badge } from "react-bootstrap";

const MyBadge = ({ color, textBadge }) => {
  return (
    <Badge pill variant={color}>
      {textBadge}
    </Badge>
  );
};

export default MyBadge;
