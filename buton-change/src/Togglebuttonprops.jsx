function Button({ disabled }) {
    return (
        <>
            <button disabled={disabled}> 
            {disabled ? "disable" : "active"}
            </button>
        </>
    )
}

export default Button;