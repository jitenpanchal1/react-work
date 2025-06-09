import React, { useState, useEffect } from 'react'
import parse from "html-react-parser"
import services from '../../auth/config'
import { useSelector } from 'react-redux'
import { useParams, useNavigate, Link } from 'react-router'
import { Container, BasicButton } from '../Index'

function Post() {

    const [post, setpost] = useState(null)
    const { slug } = useParams()
    const navigate = useNavigate()
    const userData = useSelector((state) => state.auth.userData)

    const isAuth = post && userData ? post.userId === userData.$id : null

    useEffect(() => {
        if (slug) {
            services.Getpost(slug).then((post) => {
                if (post) {
                    setpost(post)
                } else {
                    navigate("/")
                }
            })
        } else {
            navigate("/")
        }
    }, [slug, navigate])

    const deletpost = () => {
        services.DeletPost(post.$id).then((status) => {
            if (status) {
                services.deletFile(post.featuredImg)
            }
        })
    }

    return post ? (
        <Container>
            <div>
                <img src={services.getfilepreview(post.featuredImg)} style={{ width: "100%" }} alt={post.title} />
            </div>
            <div>
                {isAuth && (
                    <div>
                        <Link to={`/edit-post/${post.$id}`}>
                            <button>
                                Edit
                            </button>
                        </Link>
                        <div>
                            <button onClick={deletpost}>
                                dellet
                            </button>
                        </div>
                    </div>
                )}
            </div>
            <div>
                <h3>
                    {post.title}
                </h3>
                <h1>
                    {parse(post.content)}
                </h1>

            </div>
        </Container>
    ) : null

}

export default Post
