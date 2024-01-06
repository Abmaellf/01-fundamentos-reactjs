import './style.css'
export function Post (props) {
    return (
        <>
           <strong> <p> {props.author} </p> </strong>
            <p> {props.content} </p>
        </>
    )
    
} 