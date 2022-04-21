import React from 'react'

const Clock = (props) => {
  return (
    <div>
        <div>
            <table border="1">
                <tr>
                <th>ADI</th>
                <th>SOYADI</th>
                <th>YAŞ</th>
                </tr>

                 <tr>
                <td className="adi">{props.adi}</td>
                <td className="soyadi">{props.soyadi}</td>
                <td className="yas">{props.yas}</td>
                </tr>


            </table>
        </div>

    </div>
  )
}

export default Clock