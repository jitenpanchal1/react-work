import React, { useContext } from 'react'
import Data from './context'
import '../Css/App.css'
import { MDBListGroup, MDBListGroupItem, MDBBtn, MDBInput } from 'mdb-react-ui-kit';


function ToDolist() {

    const { todo, Addlist, settodo, multi, Dletbtn } = useContext(Data)
    return (
        <>
            <div className='d-flex align-items-center justify-content-center h-100'>
                <div className='todoovrf w-50 h-75 mx-auto pt-2 pb-2 px-5 text-center bg-secondary'>
                    <div className='my-4 d-flex align-items-center justify-content-center'>
                        <label htmlFor="name" className=' fw-bolder text-uppercase'>enter to do</label>
                        <input
                            className='mx-3 text-uppercase py-1 px-2 rounded-6 '
                            id='name'
                            type="text"
                            value={todo}
                            onChange={(e) => settodo(e.target.value)}
                        />
                        <MDBBtn
                            className='py-2 px-2 shadow-0'
                            color='success'
                            onClick={Addlist}>
                            click to add
                        </MDBBtn>
                    </div>
                    <div className='text-uppercase'>
                        <MDBListGroup>
                            {(multi ?? []).map((data, index) => (
                                <MDBListGroupItem
                                    key={`${data.text}-${index}`}
                                    noBorders
                                    rounded
                                    color='success'
                                    className='mt-2 p-0 rounded-1 d-flex align-items-center justify-content-between'
                                >
                                    <div className='ps-3'>{index + 1}.</div>
                                    <div>{data.text}</div>
                                    <MDBBtn color='warning' onClick={() => Dletbtn(index)}>
                                        delete
                                    </MDBBtn>
                                </MDBListGroupItem>
                            ))}
                        </MDBListGroup>
                    </div>
                </div>
            </div>
        </>
    )
}

export default React.memo(ToDolist)
