import React from 'react'
import {connect} from 'react-redux'
import { Modal, ModalHeader, ModalBody, } from "reactstrap";

const CustomModel=(props)=>{
    const {isOpen,toggle,title,FormComponent,type} = props

    return(
        <Modal isOpen={isOpen} toggle={toggle}>
            <ModalHeader toggle={toggle}>{title}</ModalHeader>
                <ModalBody>
                    <FormComponent closeModel={toggle} type={type}/>
                </ModalBody>
        </Modal>
    )
}

export default React.memo(connect()(CustomModel))