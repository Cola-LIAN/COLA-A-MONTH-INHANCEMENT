import React from 'react';
import './Table.css'

const Table = (props) => {
    const { usages } = props

    return(
        <div>
            <table className='table' border='1'>      
                <thead>
                    <tr >
                        <th>Component </th>
                        <th>Time </th>
                    </tr>
                </thead>
                {/* {props.usages.map((item) =>{
                    return (
                        <tbody>
                            <tr >
                                <th>{item.name} </th>
                                <th>{item.time} </th>
                            </tr>
                        </tbody>    
                    )
                })} */}
            </table>
        </div>
    )
}

export default Table