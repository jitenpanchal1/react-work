import React, { useEffect, useMemo, useState } from 'react'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router';
import { div } from 'three/tsl';


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

    }, [search, userdata])

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
                <div className='text-center py-5'>
                    <label htmlFor="serch" className='me-2'>Search Box </label>
                    <input
                        id='serch'
                        placeholder='search here...'
                        type="text"
                        value={search}
                        onChange={(e) => setsearch(e.target.value)} />
                </div>
                <MDBTable bordered >
                    <MDBTableHead>
                        <tr className='text-center fs-4 text-light'>
                            <th className='text-light' scope='col'>dat number</th>
                            <th className='text-light' scope='col'>Unique Id</th>
                            <th className='text-light' scope='col'>Name</th>
                            <th className='text-light' scope='col'>Email</th>
                            <th className='text-light' scope='col'>Password</th>
                            <th className='text-light' scope='col'>Action</th>
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
                                        <td className='text-light' >{index}</td>
                                        <td className='text-light' >{data.id}</td>
                                        <td className='text-light' >{data.name}</td>
                                        <td className='text-light' >{data.email}</td>
                                        <td className='text-light' >{data.password}</td>
                                        <td className='text-light' >
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
