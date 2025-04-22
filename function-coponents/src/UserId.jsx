import React from 'react'
import Hoccompo from './Hoccompo'
import './App.css'

import { MDBTable, MDBTableBody } from 'mdb-react-ui-kit'

function UserId({ err, loading, data }) {

    if (loading) return <h1 className='text-center'>data loading....</h1>
    if (!data) return <h1 className='text-center'>Data Not find</h1>
    if (err) return <h1 className='text-center'>msg: {err}</h1>


    return (
        <>
            {data.map((use) => {
                return (
                    <>
                        <div>
                            <MDBTable bordered="2" className='rrr' align='center' >
                                <MDBTableBody>
                                    <tr key={use.id}>
                                        <td className='text-center'>{use.id}</td>
                                        <td className='text-center'>{use.userId}</td>
                                        <td className='text-center'>{use.title}</td>
                                        <td className='text-center'>{use.completed.toString()}</td>
                                    </tr>
                                </MDBTableBody>
                            </MDBTable>
                        </div>

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
            })
            }
        </>
    )
}

export default Hoccompo(UserId)
