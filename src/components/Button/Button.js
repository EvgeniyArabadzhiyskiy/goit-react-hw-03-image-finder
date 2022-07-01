import PropTypes from "prop-types";

const Button = ({onClickIncrementBtn}) => {
    return ( <div>
        <button className="Button" type="buttton" onClick={onClickIncrementBtn}>Load more</button>
    </div> );
}

Button.propTypes = {
    onClickIncrementBtn: PropTypes.func.isRequired,
}
 
export default Button;