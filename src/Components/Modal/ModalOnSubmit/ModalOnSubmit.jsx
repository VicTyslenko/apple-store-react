
import ConfirmButton from "../../Buttons/ConfirmButton/ConfirmButton"

import "../Modal.scss"
const ModalOnSubmit = ({ text, onConfirm, onCancel }) => {


    return (
        <div className="total-wrapper" onClick={onCancel} >
            <div className='modal-wrapper' onClick={(e) => {
                e.stopPropagation()
            }}>

                <div className="main-wrapper">
                    {text}

                </div>
                <div className="btn-wrapper">
                    <ConfirmButton text='ok' onClick={onConfirm} className="confirm-btn" />

                </div>
            </div>
        </div>
    )
}

export default ModalOnSubmit