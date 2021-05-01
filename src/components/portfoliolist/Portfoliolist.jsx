import React from 'react'
import './portfoliolist.scss'
const Portfoliolist = ({title,active,setSelected,id}) => {
    return (
        <li className={active ? "portfoliolist active":"portfoliolist"} onClick={()=> setSelected(id)}>
                {title}
        </li>
    )
}

export default Portfoliolist
