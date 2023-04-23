import './ConfirmButton.scss'
import PropTypes from 'prop-types';

const ConfirmButton = (props) => {

    const { text, onClick, type, onSubmit, className } = props
    return (

        <>
            <button className={className} onClick={onClick} type={type} onSubmit={onSubmit}>{text}</button>

        </>
    )

};
ConfirmButton.propTypes = {
    onClick: PropTypes.func,

}
export default ConfirmButton