export const IDgenerator = () => {
    return Math.floor(Date.now() * Math.random() / 100000)
}


export const clientList = [
    {
        id: IDgenerator(),
        name: {
            firstName: 'Игорь',
            lastName: 'Фролов',
            patronymic: 'Сергевич',
        },
        createDate: '2000.05.01',
        lastChange: 'string',
        contacts: {
            VK: 'string',
            Facebook: 'string',
            phone: 'string',
            mail: 'string',
            LinkedIn: 'string',
        }
    },
    {
        id: IDgenerator(),
        name: {
            firstName: 'Олег',
            lastName: 'Иванович',
            patronymic: 'Мостин',
        },
        createDate: '2002.03.15',
        lastChange: 'string',
        contacts: {
            VK: 'string',
            Facebook: 'string',
            phone: 'string',
            mail: 'string',
            LinkedIn: 'string',
        },
    },
    {
        id: IDgenerator(),
        name: {
            firstName: 'Юлия',
            lastName: 'Александровна',
            patronymic: 'Воронина',
        },
        createDate: '2000.03.15',
        lastChange: 'string',
        contacts: {
            VK: 'string',
            Facebook: 'string',
            phone: 'string',
            mail: 'string',
            LinkedIn: 'string',
        }
    }
]