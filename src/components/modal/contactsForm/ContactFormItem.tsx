import {useState} from "react";
import {ClientContactType} from "../../../App";

type ContactFormItemPropsType = {
    contactValue: string;
    inputValue: string | undefined;

};

export const contacts = {
    VK: 'string',
    Facebook: 'string',
    phone: 'string',
    mail: 'string',
    LinkedIn: 'string',
}

export const ContactFormItem = ({contactValue, inputValue}: ContactFormItemPropsType) => {
    const [optionsValue, setOptionsValue] = useState(contactValue);

    const createdOptions = Object.keys(contacts).map(value => {
        return (
            <option value={value}>{value}</option>
        )
    })

    return (
        <li key={contactValue}>
            <select onChange={(event) => {
                setOptionsValue(event.currentTarget.value)
            }} value={optionsValue}>
                {createdOptions}
            </select>
            <input value={inputValue} type="text" placeholder={'Введите данные контакта'}/>
            <button>x</button>
        </li>
    );
};