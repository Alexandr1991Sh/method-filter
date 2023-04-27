import React from "react";
import {FilterType} from "../App";

type MoneyTypeObj = {
    currentMoneyProps:  MoneyType[]
    onclickFilterHandlerProps: (nameBtn: FilterType)=> void
}

type MoneyType = {
    banknote: string
    nominal: number
    number: string
}




export const Money = (props: MoneyTypeObj) => {

    return(
       <div>
           {props.currentMoneyProps.map((objForMoney: any, index: any) => {
               return (
                   <li key={index}>
                        <span>
                            {objForMoney.banknote} {objForMoney.nominal} {objForMoney.number}
                        </span>
                   </li>
               )
           })}
           <div>
               <button onClick={() => props.onclickFilterHandlerProps('All')}>All</button>
               <button onClick={() => props.onclickFilterHandlerProps('ruble')}>Ruble</button>
               <button onClick={() => props.onclickFilterHandlerProps('dollar')}>Dollar</button>
           </div>
       </div>
    )
}