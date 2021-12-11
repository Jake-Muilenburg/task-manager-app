
const Task = ({Index, Title, Date, Description, Priority, EditTask, CompleteTask}) => {
    return (
        <div style={{color: "grey",backgroundColor: "white", width: "400px", border: "4px solid", borderRadius: "10px", padding: "10px", margin: "10px auto"}}>
            <p style={{position: "center"}}>Task Number {Index+1}</p>
            <h2>{Title}</h2>
            <p>{Date}</p>
            <p>{Description}</p>
            <p>Priority Level {Priority}</p>
            
            <button style={{border:"0px", fontSize:"20px", color:"white",backgroundColor:"orange"}} onClick={() => EditTask(Index)}>Edit</button> 
            <button style={{border:"0px", fontSize:"20px", color:"white",backgroundColor:"green"}} onClick={()=> CompleteTask(Index)}>Complete task</button>
           
        </div>
    )
}
export default Task
