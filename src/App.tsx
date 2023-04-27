import React, {useState} from 'react';
import './App.css';
import {Money} from "./Components/Money";

export type FilterType = 'All' |  'dollar' | 'ruble'

function App() {
    const [money, setMoney] = useState([
        {banknote: "dollar", nominal: 100, number: "a123456789"},
        {banknote: "dollar", nominal: 50, number: "b123456789"},
        {banknote: "ruble", nominal: 100, number: "c123456789"},
        {banknote: "dollar", nominal: 100, number: "d123456789"},
        {banknote: "dollar", nominal: 50, number: "e123456789"},
        {banknote: "ruble", nominal: 100, number: "f123456789"},
        {banknote: "dollar", nominal: 50, number: "j123456789"},
        {banknote: "ruble", nominal: 50, number: "h123456789"}
    ])
const [filter, setFilter] = useState<FilterType>('All')

    let currentMoney = money

    if(filter === 'dollar'){
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknote === 'dollar')
    }
    if(filter === 'ruble'){
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknote === 'ruble')
    }

    const onclickFilterHandler = (nameBtn: FilterType ) => {
        console.log(nameBtn)
        setFilter(nameBtn)
    }
    return (
        <div className="App">
            {/*{currentMoney.map((objForMoney, index) => {*/}
            {/*    return (*/}
            {/*        <li key={index}>*/}
            {/*            <span>*/}
            {/*                {objForMoney.banknote} {objForMoney.nominal} {objForMoney.number}*/}
            {/*            </span>*/}
            {/*        </li>*/}
            {/*    )*/}
            {/*})}*/}

            {/*<div>*/}
            {/*    <button onClick={() => onclickFilterHandler('All')}>All</button>*/}
            {/*    <button onClick={() => onclickFilterHandler('ruble')}>Ruble</button>*/}
            {/*    <button onClick={() => onclickFilterHandler('dollar')}>Dollar</button>*/}
            {/*</div>*/}
            <Money currentMoneyProps={currentMoney}
                   onclickFilterHandlerProps={onclickFilterHandler}
            />
        </div>
    );
}

export default App;
