import React, {useState} from 'react';
import './App.css';
import {Main} from "./layout/main/Main";
import {clientList, IDgenerator} from "./state/state";
import {ContactForm} from "./components/modal/contactsForm/ContactForm";

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
            {/*<Header/>*/}
            {/*<Main clientList={clientListState}/>*/}

            <ContactForm contacts={clientList[0].contacts}/>
        </div>
    );
}

export default App;
