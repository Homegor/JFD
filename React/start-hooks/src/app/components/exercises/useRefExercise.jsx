import React, { useRef } from "react";
import CollapseWrapper from "../common/collapse";
const UseRefExercise = () => {
    const blockRef = useRef();
    const handleClickWidthAndHeigth = () => {
        blockRef.current.style.width = "150px";
        blockRef.current.style.height = "80px";
        blockRef.current.textContent = "text";
    };

    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содержимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                ref={blockRef}
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
            >
                <small>Блок</small>
            </div>
            <button
                className={"btn btn-primary mt-3"}
                onClick={handleClickWidthAndHeigth}
            >
                Фокус input
            </button>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
