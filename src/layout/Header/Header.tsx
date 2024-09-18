import React from 'react';
import {useState} from "react";

type Props = {
    searchCallBack: (search: string) => void
};
export const Header = (props: Props) => {
    const [search, setSearch] = useState('');

    const imgSrc = 'https://upload.wikimedia.org/wikipedia/de/thumb/8/8c/Green_Party_of_England_and_Wales_Logo.svg/800px-Green_Party_of_England_and_Wales_Logo.svg.png'

    return (
        <div className='header'>
            <img src={imgSrc} alt="Green Party logo" width='65px'/>
            <input
                type="text"
                placeholder="Введите имя"
                value={search}
                onChange={(e) => setSearch(e.currentTarget.value)}
                onKeyUp={(e) => e.key === 'Enter' ? props.searchCallBack(search) : undefined}
            />
        </div>
    );
};