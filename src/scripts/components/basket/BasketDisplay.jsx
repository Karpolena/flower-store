import React from "react";
import PropTypes from "prop-types";

const BasketDisplay = (props) => (
    <div className="display counter__item">
       Всего: {props.value}
    </div>
);

export default BasketDisplay;

BasketDisplay.propTypes = {
    value: PropTypes.number
}