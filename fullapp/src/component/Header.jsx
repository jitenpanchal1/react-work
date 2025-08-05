import React, { use } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router'

function Header() {

    const status = useSelector((state) => state.user.status)
    const dispatch = useDispatch()
    // const users = useSelector((state) => state.user.users)

    const navigate = useNavigate()

    const items = [
        {
            id: 1,
            name: "Home",
            link: "home",
            status: !status
        },
        {
            id: 2,
            name: "Login",
            link: "login",
            status: status
        },
        {
            id: 3,
            name: "my Produst",
            link: "myprodust",
            status: !status
        },
        {
            id: 4,
            name: "Add Produst",
            link: "addprodust",
            status: !status
        },
        {
            id: 5,
            name: "cart",
            link: "cart",
            status: !status
        },
    ]

    const userdetail = () => {

        localStorage.getItem("user")
        const user = JSON.parse(localStorage.getItem("user"))
        if (user) {
            navigate(`/userdetail/${user.id}`)
        }
        else {
            console.log("No user found")
        }
    }

    return (
        <div >
            <header className='flex justify-between items-center bg-gray-800 text-white p-4'>
                <h1 className='text-xl font-bold'>My App</h1>
                <nav>
                    <ul className='flex space-x-4'>
                        {items.map((item) => (
                            item.status && (
                                <li key={item.id}>
                                    <button
                                        onClick={() => navigate(`${item.link}`)}
                                        className='hover:underline'
                                    >
                                        {item.name}
                                    </button>

                                </li>
                            )
                        ))}
                        {!status && (
                            <button
                                onClick={() => userdetail()}
                                className='hover:underline'>
                                Userdetail
                            </button>
                        )}
                    </ul>
                </nav>
            </header>
            <Outlet />
        </div>
    )
}

export default Header;