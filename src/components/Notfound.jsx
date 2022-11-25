import { Link } from "react-router-dom";
const NotFound = () => {
    return ( 
        <div className="not-found flex flex-col mx-auto pt-4">
            <h2 className="text-3xl font-bold  m-auto p-4"> 404 - Page Not Found</h2>
            <Link to="/signin" className="text-2xl underline font-semibold m-auto p-2">Back to Homepage</Link>
        </div>
     );
}
 
export default NotFound;
