const MyFirstComponent = (props) => {
    return (
        <div>
            <h2 className="blog-title">
                This is a {props.name} that I made.
            </h2>
            <div className="blog-body">
                {props.children}
            </div>
        </div>
    )
}

const myElement = (<div>
    Hello World! {3 + 5}
    <h1>My name is Erika</h1>
    <MyFirstComponent name="boo"/>
        <span>Monkeys</span>
    <MyFirstComponent name="lollipop"/>
    <MyFirstComponent name="wtv"/>
</div>)

ReactDOM.render(myElement, document.getElementById('root'))