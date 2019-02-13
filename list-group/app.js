const Items = [{
    item: "Cras justo odio"
},
{
    item: "Dapibus ac facilisis in"
},
{
    item: "Morbi leo risus"
},
{
    item: "Vestibulum at eros"
}]

let ListGroupItem = ({itemRender}) => {
    return (
        <ul className="list-group">
              <li className="list-group-item"> { itemRender } </li>
        </ul>
    )
}

let ListGroup = ({items}) => {
    console.log(items)
    return (
    <span>
        {items.map(function(listRender, index) {
            return <ListGroupItem itemRender={listRender.item} key={index}/>
            })}
    </span>
    )
}


ReactDOM.render(<ListGroup items={Items} />, document.getElementById('root'))