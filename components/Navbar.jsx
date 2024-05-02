import { Link } from "react-router-dom";
import react from 'react';

const Navbar= () => {

    return (
        <>
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to = "/">HOme</Link>
                    </li>
                    <li>
                        <Link to = "/disciplines">Disciplines</Link>
                    </li>
                    <li>
                        <Link to = "/joboffer">Job Offer</Link>
                    </li>
                    <li>
                        <Link to ="/help">Help</Link>
                    </li>
                    <li></li>
                </ul>
            </nav>
        </div>
        </>
    )
}