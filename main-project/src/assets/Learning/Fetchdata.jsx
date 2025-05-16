import React, { useEffect, useState } from 'react'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import '../Css/App.Css'

function Fetchdata() {

    const [data, setdata] = useState([])
    const [loading, setloading] = useState(true)
    const [err, seterr] = useState("")

    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/users")

            .then((res) => {
                if (!res.ok) {
                    throw new Error("data not found")
                }

                return res.json()
            })

            .then((data) => {
                setdata(data)
                setloading(false)
            })

            .catch(() => {
                seterr("data not found")
                setloading(false)
            })

    }, []);


    return (
        <>
            <div className='table-responsive text-white pt-5 '>
                <MDBTable bordered >
                    <MDBTableHead >
                        <tr className='text-center  fs-5 sm-fs-1'>
                            <th className='text-white'>Id</th>
                            <th className='text-white'>Name</th>
                            <th className='text-white'>Username</th>
                            <th className='text-white'>Email</th>
                            <th className='text-white'>Street</th>
                            <th className='text-white'>Zipcode</th>
                        </tr>
                    </MDBTableHead>
                    {data.map((dd) => {
                        return (
                            <>
                                <MDBTableBody>
                                    <tr className='text-center'>
                                        <td className='tblwrp text-white'>{dd.id}</td>
                                        <td className='tblwrp text-white'>{dd.name}</td>
                                        <td className='tblwrp text-white'>{dd.username}</td>
                                        <td className='tblwrp text-white'>{dd.email}</td>
                                        <td className='tblwrp text-white'>{dd.address.street}</td>
                                        <td className='tblwrp text-white'>{dd.address.zipcode}</td>
                                    </tr>
                                </MDBTableBody>
                            </>
                        )

                    })}

                </MDBTable>
                <div className='text-center py-5'>
                    {loading && <h1>data loading....</h1>}
                    {err && <h1>{err}</h1>}
                </div>
            </div>
        </>
    )
}

export default React.memo(Fetchdata)
