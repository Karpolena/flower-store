import React from "react";
import PropTypes from "prop-types";


const BasketCalc = (props) => (
    <div className="calc counter__item" onClick={props.onClick}>
        {props.label}
    </div>
);

export default BasketCalc;

BasketCalc.propTypes = {
    label: PropTypes.string,
    onClick: PropTypes.func
}
