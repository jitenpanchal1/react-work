import React, { useState } from 'react'


function Hoccompo(Child) {

    return function click() {

        const [count, setcount] = useState(0)

        const Add = () => {
            setcount(count + 1)
        }

        return (
            <Child count={count} Add={Add} />
        )

    }
}

export default Hoccompo
