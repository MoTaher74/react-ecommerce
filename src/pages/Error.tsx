import { Container } from "react-bootstrap";
import { Link,useRouteError,isRouteErrorResponse } from "react-router-dom";
// const Error =()=>{

// const error = useRouteError();
// if (isRouteErrorResponse(error)) {
//     return (
//       <Container className="notFound">
//         <h1><span>OOPS</span>,Error!</h1>
//         <h2>{error.status}</h2>
//         <p>{error.statusText}</p>
//         {error.data?.message && <p>{error.data.message}</p>}
//         <Link to="/" replace={true} className="btn btn-primary">
//             Go to Home
//         </Link>
//       </Container>
//     );
//   } else {
//     return <div>Oops</div>;
//   }


// }

const Error =()=>{
    const error = useRouteError();
    let errorStatus:number;
    let errorStatusText:string;
    if(isRouteErrorResponse(error)){
        errorStatus = error.status;
        errorStatusText = error.statusText;
    }
    else{
        errorStatus = 404;
        errorStatusText = "Page Not Fount"
    }

    return(
        <Container className="notFound">
            <h1>Error !!</h1>
            <h2>{errorStatus}</h2>
            <p>{errorStatusText}</p>
            {/* {isRouteErrorResponse(error) && error.data?.message && <p>{error.data.message}</p>} */}
            <Link to="/" replace={true} className="btn btn-primary">
                Go to Home
            </Link>
        </Container>
    )
}

export default Error ;