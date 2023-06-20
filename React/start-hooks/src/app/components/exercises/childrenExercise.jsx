import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";
const ChildrenExercise = () => {
    const SerialNumber = ({ children }) => {
        return React.Children.map(children, (child, num) => {
            return (
                <>
                    {num + " Номер:"} {child}
                </>
            );
        });
    };
    SerialNumber.propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node
        ])
    };
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <SerialNumber>
                <Component />
                <Component />
                <Component />
            </SerialNumber>
        </CollapseWrapper>
    );
};

const Component = () => {
    return <div>Компонент списка</div>;
};

export default ChildrenExercise;
