// @flow
import * as React from 'react';
import {ClientType} from "../../App";
import {useState} from "react";
import {ClientDeleteModal} from "../../components/ClientDeleteModal/ClientDeleteModal";


type MainProps = {
    clientList: Array<ClientType>
    clientRemover: (id: number) => void
};


export const Main = (props: MainProps) => {

    const [removeId, setRemoveId] = useState<null | number>(null)
    const removeClickHandler = (id: number) => {
        props.clientRemover(id)
        setRemoveId(null)
    }

    const {clientList} = props

    return (
        <div className='mainPage'>
            <h3>Клиенты</h3>
            <table className='table'>
                <thead className='sortButtons'>
                <tr>
                    <th>ID
                        <button>↑</button>
                    </th>
                    <th>Фамилия Имя Отчество
                        <button>↑А-Я</button>
                    </th>
                    <th>Дата и время создания
                        <button>↑</button>
                    </th>
                    <th>Последние изменения
                        <button>↑</button>
                    </th>
                    <th>Контакты</th>
                    <th>Действия</th>
                </tr>
                </thead>
                <tbody className='tableBody'>
                {clientList.map((client) => {
                    return (
                            <tr>
                                <td>{client.id}</td>
                                <td>{`${client.name.lastName} ${client.name.firstName} ${client.name.patronymic}`}</td>
                                <td>{client.createDate}</td>
                                <td>{client.lastChange}</td>
                                <td>
                                    <div>
                                        {client.contacts.VK &&
                                            <a href={client.contacts.VK}><img src='VK.png'/></a>}
                                        {client.contacts.Facebook &&
                                            <a href={client.contacts.Facebook}><img src='facebook.png'/></a>}
                                        {client.contacts.phone &&
                                            <a href={client.contacts.phone}><img src='phone.png'/></a>}
                                        {client.contacts.mail &&
                                            <a href={client.contacts.mail}><img src='mail.png'/></a>}
                                        {client.contacts.LinkedIn &&
                                            <a href={client.contacts.LinkedIn}><img src='LinkedIn.png'/></a>}
                                    </div>
                                </td>
                                <td>
                                    <button>✎Редактировать</button>
                                    <button onClick={() => setRemoveId(client.id)}>⊗Удалить</button>
                                </td>
                            </tr>
                    )
                })}
                </tbody>
            </table>
            <button>Добавить клиента</button>
            {removeId
                ? <ClientDeleteModal
                    confirmDelete={() => removeClickHandler(removeId)}
                    cancelDelete={() => setRemoveId(null)}/>
                : null}
        </div>
    );
};



