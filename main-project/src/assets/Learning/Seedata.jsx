import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';


function Seedata() {
    const { id } = useParams()
    const [data, setdata] = useState({})
    const [msg, setmsg] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        Fetchdata()
    }, [])

    const Fetchdata = async () => {
        try {
            const call = await fetch(`http://localhost:5000/users/${id}`)
            const read = await call.json()
            setdata(read)
        } catch (err) {
            setmsg('data not fetched')
        }
    }

    const edit = (id) => {
        navigate(`../editdata/${id}`)
    }


    return (
        <>
            <div className='text-center'>
                <MDBTable bordered >
                    <MDBTableHead>
                        <tr className='text-center fs-4'>
                            <th scope='col'>Unique Id</th>
                            <th scope='col'>Name</th>
                            <th scope='col'>Email</th>
                            <th scope='col'>Password</th>
                            <th scope='col'>Action</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        <tr>
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>{data.password}</td>
                            <td><button onClick={() => edit(id)}>click to Edit</button></td>
                        </tr>
                    </MDBTableBody>
                </MDBTable>
                <div>
                    <h1>{msg}</h1>
                </div>
            </div>
        </>
    )
}

export default Seedata
