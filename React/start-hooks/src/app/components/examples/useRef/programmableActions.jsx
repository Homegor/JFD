import React, { useRef } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";
const ProgrammableActionsExample = () => {
    const inputRef = useRef();
    const handleClick = () => {
        console.log(inputRef.current);
        inputRef.current.focus();
    };
    const handleClickWidth = () => {
        inputRef.current.style.width = "100px";
    };
    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>
            <Divider />
            <label htmlFor="email" className={"form-label"}>
                email
            </label>
            <input
                ref={inputRef}
                type="email"
                className={"form-control"}
                id={"email"}
            />
            <button className={"btn btn-primary"} onClick={handleClick}>
                Фокус input
            </button>
            <button
                className={"btn btn-secondary m-4"}
                onClick={handleClickWidth}
            >
                Изменить ширину объекта
            </button>
        </CardWrapper>
    );
};

export default ProgrammableActionsExample;
