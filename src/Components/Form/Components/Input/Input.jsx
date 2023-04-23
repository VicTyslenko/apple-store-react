import { Field, ErrorMessage } from 'formik';
import PropTypes from "prop-types";

import './Input.scss';


const Input = ({ type, placeholder, name,}) => {

	return (
        <div>
            <Field type={type} className="form-input" name={name} placeholder={placeholder}/>
            <ErrorMessage className='error-message' name={name} component='p'/>
        </div>
	)
}

Input.defaultProps = {
    type:'text'
}
  
Input.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string,
    className: PropTypes.string,
}

export default Input