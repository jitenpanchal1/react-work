import React, { useCallback, useState } from 'react'

export default function ustomhook() {

    const [count, setcount] = useState(0)

    const Hndle = () => {
        setcount(count + 1)
    }

    return {
        count,
        Hndle
    }

}
