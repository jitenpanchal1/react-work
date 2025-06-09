import React from 'react'
import { useState, useEffect } from 'react'
import { Container, PostCard } from '../Index'
import services from '../../auth/config'
import "../../App.css"
import { useNavigate } from 'react-router'

function Home() {

    const [post, setpost] = useState([])
    const navgate = useNavigate()

    useEffect(() => {
        services.getposts().then((item) => {
            setpost(item.documents)
            // console.log(item.documents)
        })
    }, [])

    if (post.length === 0) {
        return (
            <>
                <div className="d-flex justify-content-center align-items-center" style={{ height: "300px" }}>
                    <h1 className="text-center">There is no post Here .........</h1>
                </div>
            </>
        )
    }
    return (
        <>

            <Container>
                <div className='home-color row pt-3'>
                    {post.map((item) =>
                    (
                        <div key={item.$id} className="mx-auto col-sm-6 col-md-4 col-lg-4 ">
                            <PostCard {...item} fileId={item.featuredImg}  id={item.$id} className="post-card" />
                        </div>
                    ))}
                </div>
            </Container>

        </>
    )
}

export default Home
