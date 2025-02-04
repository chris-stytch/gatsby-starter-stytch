import React from "react";
import { Stytch } from "@stytch/stytch-react";

const Login = () => {
  const stytchProps = {
    config: {
      loginConfig: {
        magicLinkUrl: "http://localhost:8000/api/authenticate",
        expirationMinutes: 30,
      },
      createUserConfig: {
        magicLinkUrl: "http://localhost:8000/api/authenticate",
        expirationMinutes: 30,
      },
    },
    style: {
      fontFamily: '"Helvetica New", Helvetica, sans-serif',
      button: { backgroundColor: "#106ee9" },
      input: { textColor: "#090909" },
      headerText: {
        visible: true,
      },
    },
    publicToken: process.env.STYTCH_PUBLIC_TOKEN,
    callbacks: {
      onEvent: (data) => {
        // TODO: check whether the user exists in your DB
        // const userExists = false;
        // if (data.eventData.type === 'USER_EVENT_TYPE' && !userExists) {
        //   fetch("/users", {
        //     method: "POST",
        //     body: JSON.stringify({
        //       userId: data.eventData.userId,
        //       email: data.eventData.email,
        //     }),
        //   });
        // }
      },
      onSuccess: (data) => console.log(data),
      onError: (data) => console.log(data),
    },
  };

  return (
    <div className="sign-in-container">
      <Stytch
        publicToken={stytchProps.publicToken}
        config={stytchProps.config}
        style={stytchProps.style}
        callbacks={stytchProps.callbacks}
      />
    </div>
  );
};

export default Login;
