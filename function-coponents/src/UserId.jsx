import React from 'react'
import Hoccompo from './Hoccompo'
import './App.css'

import { MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit'

function UserId({ err, loading, data }) {

    if (loading) return <h1 className='text-center'>data loading....</h1>
    if (!data) return <h1 className='text-center'>Data Not find</h1>
    if (err) return <h1 className='text-center'>msg: {err}</h1>


    return (
        <>
            <MDBTable bordered="2" className='rrr' align='center' >
                <MDBTableHead>
                    <tr>
                        <th className='text-center fw-bolder fs-4'>User id</th>
                        <th className='text-center fw-bolder fs-4'>User Id</th>
                        <th className='text-center fw-bolder fs-4'>User title</th>
                        <th className='text-center fw-bolder fs-4'>User status</th>
                    </tr>
                </MDBTableHead>
                {data.map((use) => {
                    return (
                        <>

                            <MDBTableBody>
                                <tr key={use.id}>
                                    <td className='text-center'>{use.id}</td>
                                    <td className='text-center'>{use.userId}</td>
                                    <td className='text-center'>{use.title}</td>
                                    <td className='text-center'>{use.completed.toString()}</td>
                                </tr>
                            </MDBTableBody>


                            {/* <table className='rrr' width="80%">
                                    <tr>
                                        <td className='rrr'> {use.id}</td>
                                        <td className='rrr'> {use.userId}</td>
                                        <td className='rrr'> {use.title}</td>
                                        <td className='text-center'>{use.completed.toString()}</td>
                                    </tr>
                                </table> */}

                        </>
                    )
                })}
            </MDBTable >

        </>
    )
}

export default Hoccompo(UserId)
