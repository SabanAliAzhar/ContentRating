
const Arrays = () => {
    const items=['summer','autumn','winter','spring']
  return (
    <div>
        <ul>
            {items.map((index,item)=>{
                <li key={index}>{item}</li>
})
            }
        </ul>
      
    </div>
  )
}

export default Arrays
