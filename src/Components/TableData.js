import React from 'react'

const TableData = ({info,date}) => {
    // console.log(date,info)
    let dt=date.split(' ')
  return (
    <div>
      {/* TableData */}
      
      <table>

        <tr>
            <td>{dt[0]}, {dt[1]}</td>
            <td>{info['1. open']}</td>
            <td>{info['2. high']}</td>
            <td>{info['3. low']}</td>
            <td>{info['4. close']}</td>
            <td>{info['5. volume']}</td>
            
            
        </tr>
        </table>
    </div>
  )
}

export default TableData
