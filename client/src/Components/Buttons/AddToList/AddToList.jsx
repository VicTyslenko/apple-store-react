
import PropTypes from 'prop-types';
import './AddToList.scss'
const AddToList = (props) => {

    const { text, onClick } = props;
    return (
        <>
            <div className="btn-wrapper">
                <button className='add-btn' data-testid="add-btn" onClick={onClick}>{text}</button>
            </div>
        </>

    )

};
AddToList.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,

}


export default AddToList