import React, { useCallback, useState } from 'react'

export default function ustomhook() {

    const [count, setcount] = useState(0)

    const Hndle = useCallback(() => {
        setcount(count + 1)
    }, [count])

    return {
        count,
        Hndle
    }

}
