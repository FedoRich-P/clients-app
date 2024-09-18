// @flow
import * as React from 'react';
import {ClientType} from "../../App";



type MainProps = {
    clientList: Array<ClientType>
};


export const Main = (props: MainProps) => {
    const {clientList} = props

    return (
        <div className='MainPage'>
            <h3>Клиенты</h3>
            <table className='table'>
                <thead className='sortButtons'>
                <tr>
                    <th>ID
                        <button>↑</button>
                    </th>
                    <th>Фамилия Имя Отчество
                        <button>↑</button>
                    </th>
                    <th>Дата и время создания
                        <button>↑</button>
                    </th>
                    <th>Последние изменения
                        <button>↑</button>
                    </th>
                    <th>Контакты
                        <button>↑</button>
                    </th>
                    <th>Контакты
                        <button>↑</button>
                    </th>
                    <th>Действия
                        <button>↑</button>
                    </th>
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
                            <td>{}</td>
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
                                <button>⊗Удалить</button>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
            <button>Добавить клиента</button>
        </div>
    );
};



