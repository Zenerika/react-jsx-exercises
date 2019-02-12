let TextInput = () => {
    return <span>
        <form>
            First name: <input type="text" name="fname"></input><br></br>
            Last name: <input type="text" name="lname"></input><br></br>
            DOB: <input type="date" name="dob"></input><br></br>
        </form>
    </span>
}

let YesNoRadio = () => {
    return <span>
        <form>
            <input type="radio" name="yes" value="yes"></input> Yes    
            <input type="radio" name="yes" value="no"></input> No
        </form>
        </span>
}

let SubmitButton = () => {
    return <span>
        <form>
            <input type="submit" value="submit"></input>
        </form>
    </span>
}

let Form = () => {
    return <span>
        <TextInput />
        <YesNoRadio />
        <SubmitButton />
         </span>
}


ReactDOM.render(<Form />, document.getElementById('root'))