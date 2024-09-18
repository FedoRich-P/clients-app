type ModalProps = {
    title: string;
    id: string;
    firstName: string;
    lastName: string;
    patronymic: string;
};
export const Modal = (props: ModalProps) => {
    const {
        title,
        id,
        firstName,
        lastName,
        patronymic,
        ...children
    } = props;
    return (
        <div>
            <div>
                <h3>{<title></title>}</h3>
                <span>{id}</span>
            </div>

            <form>
                <label>
                    <input type='text' name={firstName}/>
                </label>
                <label>
                    <input type='text' name={lastName}/>
                </label>
                <label>
                    <input type='text' name={patronymic}/>
                </label>

                {/*<ul>*/}
                {/*</ul>*/}

                {/*<button>Добавить контакт</button>*/}

                <button>Сохранить</button>
                <button>Удалить клиента</button>
            </form>
        </div>
    );
};
