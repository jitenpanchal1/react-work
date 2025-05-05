import React, { useContext } from 'react'
import Data from './context'

function ToDolist() {

    const { todo, Addlist, settodo, multi, Dletbtn } = useContext(Data)
    return (
        <div className='text-center'>
            <div className='mt-5'>
                <label htmlFor="name" className='me-3'>enter to do</label>
                <input
                    id='name'
                    type="text"
                    value={todo}
                    onChange={(e) => settodo(e.target.value)}
                />
            </div>
            <div className='my-5'>
                <button
                    onClick={Addlist}>
                    click to add
                </button>
            </div>

            <div>
                <ul>
                    {multi.map((data, index) => {
                        return (
                            <>
                                <li key={data.toString()}>{data.text}
                                    <button
                                        onClick={() => Dletbtn(index)}>
                                        delet
                                    </button>
                                </li>
                            </>
                        )
                    })}
                </ul>
            </div>

        </div>
    )
}

export default React.memo(ToDolist)
