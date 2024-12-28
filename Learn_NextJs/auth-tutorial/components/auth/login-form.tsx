import React from "react";
import CardWrapper from "./card-wrapper";

type Props = {};

const LoginForm = (props: Props) => {
  return (
    <CardWrapper
      headerLabel="wellcome back"
      backButtonLable="dont have an account ?"
      backButtonHref="/auth/register"
      showSocial
    >
      LoginForm
    </CardWrapper>
  );
};

export default LoginForm;
