import React, { useEffect, useMemo, useState } from 'react'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router';


function Showdata() {

    const [userdata, setuserdata] = useState([])
    const [msg, setmsg] = useState("")
    const [search, setsearch] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        Fetchdata()
    }, [])

    const Fetchdata = async () => {
        try {
            const red = await fetch("http://localhost:5000/users")
            const read = await red.json()
            setuserdata(read)
        }
        catch (err) {
            setmsg("Failed to load data")
        }
    }

    const filterdata = useMemo(() => {
        return userdata.filter((data) => {
            return (
                data.id.toLowerCase().includes(search.toLowerCase()) ||
                data.name.toLowerCase().includes(search.toLowerCase()) ||
                data.email.toLowerCase().includes(search.toLowerCase())
            )
        })
        // userdata.filter((data) => data.id.toLowerCase().includes(search.toLowerCase()))

    })

    const delet = async (id) => {
        try {
            await fetch(`http://localhost:5000/users/${id}`, {
                method: "DELETE",
            });
            setuserdata(userdata.filter((item) => item.id !== id))
        } catch (err) {
            setmsg("Failed to delet data")
        }
    }

    const detail = (id) => {
        navigate(`../seedata/${id}`)
    }


    return (
        <>
            <div>
                <div>
                    <input
                        placeholder='search here...'
                        type="text"
                        value={search}
                        onChange={(e) => setsearch(e.target.value)} />
                </div>
                <MDBTable bordered >
                    <MDBTableHead>
                        <tr className='text-center fs-4'>
                            <th scope='col'>dat number</th>
                            <th scope='col'>Unique Id</th>
                            <th scope='col'>Name</th>
                            <th scope='col'>Email</th>
                            <th scope='col'>Password</th>
                            <th scope='col'>Action</th>
                        </tr>
                    </MDBTableHead>
                    {/* {userdata.map((data, index) => {
                        return (
                            <>
                                <MDBTableBody>
                                    <tr className='text-center' key={data.id} >
                                        <td>{index}</td>
                                        <td>{data.id}</td>
                                        <td>{data.name}</td>
                                        <td>{data.email}</td>
                                        <td>{data.password}</td>
                                        <td>
                                            <button onClick={() => delet(data.id)}>click to delet {msg}</button>
                                            <button onClick={() => detail(data.id)}>click to detail </button>
                                        </td>
                                    </tr>
                                </MDBTableBody>
                            </>
                        )
                    })} */}
                    {filterdata.map((data, index) => {
                        return (
                            <>
                                <MDBTableBody>
                                    <tr className='text-center' key={data.id} >
                                        <td>{index}</td>
                                        <td>{data.id}</td>
                                        <td>{data.name}</td>
                                        <td>{data.email}</td>
                                        <td>{data.password}</td>
                                        <td>
                                            <button onClick={() => delet(data.id)}>click to delet {msg}</button>
                                            <button onClick={() => detail(data.id)}>click to detail </button>
                                        </td>
                                    </tr>
                                </MDBTableBody>
                            </>
                        )
                    })}
                </MDBTable>
            </div>
        </>
    )
}


export default Showdata
