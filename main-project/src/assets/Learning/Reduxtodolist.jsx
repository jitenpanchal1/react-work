import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, editTodo, deleteTodo } from "../refuxfeature/Todoredus"
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';

function Reduxtodolist() {

    const todos = useSelector(state => state.todo)
    const dispatch = useDispatch()

    const [text, settext] = useState("")
    const [edtext, setedtext] = useState("")
    const [edid, setedid] = useState(null)

    const addtodo = () => {
        if (text.trim()) {
            dispatch(addTodo(text));
            settext("");
        }
    }

    const allowedit = (id, text) => {
        setedid(id);
        setedtext(text);
    }

    const saveedit = (id) => {
        if (edtext.trim()) {
            dispatch(editTodo({ id, newtext: edtext }));
            setedid(null);
            setedtext("");
        }
    }

    const canseled = () => {
        setedid(null)
        setedtext("")
    }


    return (
        <>
            <div className='d-flex align-items-center justify-content-center h-100'>
                <div className='todoovrf w-50 h-75 mx-auto pt-2 pb-2 px-5 text-center bg-primary'>
                    <div className='my-4 d-flex align-items-center justify-content-center'>
                        <input
                            className='mx-3 w-50 text-uppercase border-0 py-1 px-2 rounded-6'
                            type="text"
                            placeholder=' Enter todo...'
                            value={text}
                            onChange={(e) => settext(e.target.value)} />
                        <button
                            className='py-1 px-1 shadow-0'
                            onClick={addtodo}>click to add
                        </button>
                    </div>
                    <div>
                        <MDBListGroup>
                            {todos.map(item => (
                                <MDBListGroupItem key={item.id} className='mt-3' >
                                    {edid === item.id ? (
                                        <>
                                            <div
                                               className='p-1 m-0 w-100 p-0 rounded-1 d-flex align-items-center justify-content-between bg-info'>
                                                <input
                                                    className=' w-50'
                                                    value={edtext}
                                                    onChange={(e) => setedtext(e.target.value)}
                                                />
                                                <div>
                                                    <button
                                                        onClick={() => saveedit(item.id)}>Save</button>
                                                    <button
                                                        onClick={canseled}>Cancel</button>
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <span
                                                className='p-1 w-100 p-0 rounded-1 d-flex align-items-center justify-content-between bg-secondary'
                                            >
                                                {item.text}
                                                <div>
                                                    <button
                                                        onClick={() => allowedit(item.id, item.text)}>Edit</button>
                                                    <button
                                                        onClick={() => dispatch(deleteTodo(item.id))}>Delete</button>
                                                </div>
                                            </span>


                                        </>
                                    )}
                                </MDBListGroupItem>
                            ))}
                        </MDBListGroup>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Reduxtodolist
