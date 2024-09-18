import React, {useState} from 'react';
import './App.css';
import {Main} from "./layout/Main/Main";
import {clientList, IDgenerator} from "./state/state";
import {Header} from "./layout/Header/Header";

export type ClientNameType = {
    firstName: string
    lastName: string
    patronymic: string
}
export type ClientContactType = {
    VK?: string
    Facebook?: string
    phone?: string
    mail?: string
    LinkedIn?: string
}
export type ClientType = {
    id: number
    name: ClientNameType
    createDate: string
    lastChange: string
    contacts: ClientContactType
}

function App() {
    const [clientListState, setClientListState] = useState<Array<ClientType>>(clientList)

    const newClientAdder = (name: ClientNameType, contacts: ClientContactType) => {
        const newClient: ClientType = {
            id: IDgenerator(),
            name: name,
            createDate: new Date().toLocaleString('ru-RU'),
            lastChange: new Date().toLocaleString('ru-RU'),
            contacts: contacts
        }
        setClientListState([...clientListState, newClient])
    }
    const clientEditor = (id: number, name: ClientNameType, contacts: ClientContactType) => {
        setClientListState(clientListState.map(client => client.id === id ? {...client, name: name, contacts: contacts} : client))
    }
    const clientRemover = (id: number) => {
        setClientListState(clientListState.filter(client => client.id !== id))
    }

    return (
        <div className="App">
            <Header searchCallBack={(string) => alert(`Поиск имени ${string}`)}/>
            <Main clientList={clientListState} clientRemover={clientRemover}/>
        </div>
    );
}

export default App;
