import Moves from "./Moves"

const Board = () => {
    let move = "Code improvement"
    let chal = "Challenge"
  return (
    <div className="board">
        <div className="item1">
            <Moves move={"Bug space"}/>
            <Moves move={move}/>
            <Moves move={chal}/>
            <Moves move={"Bug space"}/>
            <Moves move={chal}/>
            <Moves move={move}/>
            <Moves move={chal}/>
            <Moves move={"START"}/>
        </div>
        <div className="item2">
            <Moves move={move}/>
            {/* <Moves move={"Bug space"}/> */}
        </div>
        <div className="item3"></div>
        <div className="item4">
        {/* <Moves move={move}/> */}
            <Moves move={"Bug space"}/>
        </div>
        <div className="item5"></div>
        <div className="item6">
        <Moves move={"boost"}/>
            <Moves move={move}/>
            <Moves move={"penalty"}/>
            <Moves move={"Bug space"}/>
            <Moves move={"1 step"}/>
            <Moves move={"Bug space"}/>
            <Moves move={move}/>
            <Moves move={"END"}/>
        </div>
    </div>
)
}

export default Board