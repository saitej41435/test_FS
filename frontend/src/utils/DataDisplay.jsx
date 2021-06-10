import ItemView from './ItemView'

function ListDisplay({data}){

    const items = data.map(item=><ItemView key={item.id}>{item.first_name + item.last_name}</ItemView>)
    return(
        <>
        <div>Display content</div>
        {items}
        </>
    )
}

export default React.memo(ListDisplay)