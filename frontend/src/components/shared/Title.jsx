import React from "react";
import { Helmet } from "react-helmet-async";

const Title = ({
  title = "chat",
  description = "This is the chat app for FlexJOB",
}) => {
  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description}></meta>
      </Helmet>
    </div>
  );
};

export default Title;
