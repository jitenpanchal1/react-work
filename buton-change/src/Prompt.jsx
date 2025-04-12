function Pro({
    NmeOne = "not added",
    NmeTwo = "not added",
    NmeThree = "not added",
    NmeFour = "not added",
    NmeFive = "not added"
}) {
    return (<>
        <div>
            <h1 className="text-center">hi my name is {NmeOne}</h1>
            <h1 >hi my name is {NmeTwo}</h1>
            <h1>hi my name is {NmeThree}</h1>
            <h1>hi my name is {NmeFour}</h1>
            <h1>hi my name is {NmeFive}</h1>
        </div>
    </>
    )
}

export default Pro;