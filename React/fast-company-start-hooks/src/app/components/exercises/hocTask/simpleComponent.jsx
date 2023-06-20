import React, { useEffect } from "react";
import PropTypes from "prop-types";

const SimpleComponent = ({ onLogin, onLogOut, isAuth }) => {
    useEffect(() => {
        console.log(onLogin);
        console.log(onLogOut);
        console.log(isAuth);
    });
    return (
        <>
            {isAuth ? (
                <button className={"btn btn-primary"} onClick={onLogin}>
                    Войти
                </button>
            ) : (
                <button className={"btn btn-danger"} onClick={onLogOut}>
                    Выйти
                </button>
            )}
        </>
    );
};
SimpleComponent.propTypes = {
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func,
    isAuth: PropTypes.bool
};
export default SimpleComponent;
