import React, { useCallback } from 'react'
import { useState } from 'react'

function Paawordgenerator() {

    let [lenght, setlenght] = useState(8)
    let [char, setchar] = useState(false)
    let [num, setnum] = useState(false)
    let [password, setpassword] = useState("")

    const Passwordgenerator = useCallback((e) => {
        e.preventDefault()
        let pass = ""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

        if (num) {
            str += "1234567890"
        }

        if (char) {
            str += "<>,./?:;'{}[]|\_+=-*/~`!@#$%^&*()"
        }

        for (let i = 1; i <= lenght; i++) {
            let code = Math.floor(Math.random() * str.length)
            pass += str.charAt(code)
        }

        setpassword(pass)

    }, [lenght, num, char, password])

    const Addnum = () => {
        setnum(pre => !pre)
    }

    const Addchar = () => {
        setchar(pre => !pre)
    }

    const Addlenght = (e) => {
        setlenght(e.target.value)
    }
    return (
        <>
            <div className='d-flex justify-content-center align-items-center h-100'>
                <div className='bg-success d-flex justify-content-center align-items-center px-5 h-25'>
                    <div className='text-center'>
                        <form className=''>
                            <div>
                                <input
                                    className='w-75'
                                    readOnly
                                    type="text"
                                    value={password} />
                                <button
                                    onClick={Passwordgenerator}>
                                    Generate
                                </button>
                            </div>
                            <div className='d-flex mt-2 justify-content-between align-items-center'>
                                <input
                                    className='w-25'
                                    value={lenght}
                                    type="range"
                                    min={8}
                                    max={50}
                                    onChange={Addlenght} />
                                {lenght}

                                <div>
                                    Add number
                                    <input
                                        type="checkbox"
                                        value={num}
                                        onClick={Addnum} />
                                </div>
                                <div>
                                    Add symbol
                                    <input
                                        type="checkbox"
                                        value={char}
                                        onClick={Addchar}
                                    />
                                </div>
                            </div>

                            <div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Paawordgenerator
