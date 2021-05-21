import React from "react";
import { Redirect, Route, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ ...props }) => {
  const location = useLocation();
  const account = useSelector((state) => state.account.data);

  return account.token ? (
    <Route path={props.path} exact={props.exact} component={props.component} />
  ) : (
    <Redirect
      to={{
        pathname: "/auth/login",
        state: { from: location },
      }}
    />
  );
};

export default PrivateRoute;
