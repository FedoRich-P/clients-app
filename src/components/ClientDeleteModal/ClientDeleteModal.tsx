// @flow
import * as React from 'react';

type ClientDeleteModalPropsType = {
    confirmDelete: () => void
    cancelDelete: () => void
};


export const ClientDeleteModal = (props: ClientDeleteModalPropsType) => {


    return (
        <div className='modal'>
            <div className='modalContent'>
                <h3>Удалить клиента</h3>
                <span>Вы действительно хотите удалить клиента?</span>
                <div className='modalControlButtons'>
                    <button className='modalAcceptButton' onClick={props.confirmDelete}>Удалить</button>
                    <button className='modalDeclineButton' onClick={props.cancelDelete}>Отмена</button>
                </div>
                <button className='modalX' onClick={props.cancelDelete}>x</button>
            </div>
        </div>
    );
};