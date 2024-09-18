import {useState} from "react";
import {ClientContactType} from "../../../App";
import {ContactFormItem} from "./ContactFormItem";

type AddContactFormPropsType = {
    contacts?: ClientContactType;
};

export const ContactForm = (props: AddContactFormPropsType) => {

    const {contacts = {}} = props;

    const [optionsValues, setOptionValues] = useState<ClientContactType>(contacts);

    const addNewContact = () => {
        setOptionValues({
            ...optionsValues,
            VK: 'string',
        })
    }


    const valueList = Object.entries(optionsValues).map(([key, item]) => {
        return (
            <ContactFormItem
                contactValue={key}
                inputValue={item}
                key={key}/>
        )
    })

    return (
        <>
            <ul>
                {valueList}
            </ul>
            <button
                onClick={addNewContact}
            >Добавить контакт
            </button>
        </>
    );
};
