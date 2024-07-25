const Moves = ({move}) => {
  let tag = {move}
  return (
    <div className="moves">
      <div className="turn">
      {move}
      </div>
    </div>
  )
}

export default Moves