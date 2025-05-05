import React from 'react'
import { useNavigate, useNavigation } from 'react-router'

export default function Navigatecustome() {

    const navigation = useNavigate()
    return {
        gotousestate: () => navigation("../usestate"),
        gotouseffect: () => navigation("../useeffect"),
        gotousecontext: () => navigation("../usecontext"),
        gotoinputcnt: () => navigation("../input"),
        gotohoc: () => navigation("../hoc"),
        gotousereduce: () => navigation("../usereduce"),
        gotouseref: () => navigation("../useref"),
        gotocustom: () => navigation("../custom"),
        gotothemechanger: () => navigation("../theme"),
        gotoToDolist: () => navigation("../todolist"),
        gotoApifetch: () => navigation("../hoc"),
        
    }

}
