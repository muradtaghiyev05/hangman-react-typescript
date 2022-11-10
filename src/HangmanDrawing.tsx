const HEAD = (
    <div style={{
        backgroundColor: "white",
        position: "absolute",
        right: "-30px",
        top: "50px",
        height: "50px",
        width: "50px",
        borderRadius: "100%",
        border: "10px solid black"
    }} />)

const BODY = (
    <div style={{
        backgroundColor: "black",
        position: "absolute",
        right: "0",
        top: "120px",
        height: "100px",
        width: "10px",
    }} />)

const RIGHT_ARM = (
    <div style={{
        backgroundColor: "black",
        position: "absolute",
        right: "-100px",
        top: "150px",
        height: "10px",
        width: "100px",
        transform: "rotate(-30deg)",
        transformOrigin: "left bottom"
    }} />)

const LEFT_ARM = (
    <div style={{
        backgroundColor: "black",
        position: "absolute",
        right: "10px",
        top: "150px",
        height: "10px",
        width: "100px",
        transform: "rotate(30deg)",
        transformOrigin: "right bottom"
    }} />)
    
const LEFT_LEG = (
    <div style={{
        backgroundColor: "black",
        position: "absolute",
        right: "0px",
        top: "210px",
        height: "10px",
        width: "100px",
        transform: "rotate(-60deg)",
        transformOrigin: "right bottom"
    }} />)

const RIGHT_LEG = (
    <div style={{
        backgroundColor: "black",
        position: "absolute",
        right: "-90px",
        top: "210px",
        height: "10px",
        width: "100px",
        transform: "rotate(60deg)",
        transformOrigin: "left bottom"
    }} />)

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawingProps = {
    numberOfGuesses: number
}

export const HangmanDrawing = ({numberOfGuesses}: HangmanDrawingProps) => {
  return (
    <div style={{position: "relative"}}>
        {BODY_PARTS.slice(0, numberOfGuesses)}
        <div style={{height: "50px", width: "10px", backgroundColor: "black", position: "absolute", right: '0'}} />
        <div style={{height: "10px", width: "200px", backgroundColor: "black", marginLeft: "120px"}} />
        <div style={{height: "400px", width: "10px", backgroundColor: "black", marginLeft: "120px"}} />
        <div style={{height: "10px", width: "250px", backgroundColor: "black"}} />
    </div>
  )
}
