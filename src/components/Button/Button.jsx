import Box from "components/Box/Box";
import PropTypes from "prop-types";
import { StyledButton } from "./Button.styled";

const Button = ({onLoadMore}) => {
    return ( <Box display="flex" alignItems="center" justifyContent="center">
        <StyledButton  type="buttton" onClick={onLoadMore}>Load more</StyledButton>
    </Box> );
}

Button.propTypes = {
    onLoadMore: PropTypes.func.isRequired,
}
 
export default Button;