import React from "react";
import CardWrapper from "../../common/Card";

const withFunctions = (Component) => (props) => {
    const isAuth = localStorage.getItem("item");
    const handleLogin = () => {
        localStorage.setItem("auth", "item");
    };
    const handleLoginOut = () => {
        localStorage.removeItem("item");
    };
    return (
        <CardWrapper>
            <Component
                {...props}
                isAuth={isAuth}
                login={handleLogin}
                logOut={handleLoginOut}
            />
        </CardWrapper>
    );
};

export default withFunctions;
