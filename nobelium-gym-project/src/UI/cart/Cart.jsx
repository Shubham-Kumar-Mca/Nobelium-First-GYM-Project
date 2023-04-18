import { Link } from "react-router-dom"
import {AiFillCaretRight} from "react-icons/ai"
import "./cart.css"

const Cart = ({ className, title, icon, info, path  }) => {
    return (
        <article className={`cart ${className}`}>
            <span>{icon}</span>
            <h4>{title}</h4>
            <small>{info}</small>
            {path && <Link to={path} className="btn sm"> Learn More <AiFillCaretRight /></Link>}
        </article>
    )
}

export default Cart