import React, { useEffect, useMemo, useState } from 'react'

function Searchdata() {

    const [data, setdata] = useState([])
    const [search, setsearch] = useState("")

    useEffect(() => {
        const Fetchdata = async () => {
            const fetching = await fetch("http://localhost:5000/users")
            const read = await fetching.json()
            setdata(read)
        }
        Fetchdata();
    }, [])

    const filterdata = useMemo(() => {
        return data.filter((user) => user.id.toLowerCase().includes(search.toLowerCase()))
    }, [data, search])
    return (
        <>
            <div>
                <div>
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setsearch(e.target.value)} />
                </div>
                <div>
                    <h1>
                        {filterdata.map((item) => {
                            return (
                                <>
                                    <h3>{item.id}</h3>
                                </>
                            )
                        })}
                    </h1>
                </div>
            </div>
        </>
    )
}

export default Searchdata
