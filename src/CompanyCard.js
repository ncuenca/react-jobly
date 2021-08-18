import { Link } from "react-router-dom"
import "./CompanyCard.css"

/** Renders CompanyCard
 * 
 * Contains information about the company
 * 
 * Props:
 *  - company
 * 
 * CompanyList -> CompanyCard
 */

export default function CompanyCard({ company }) {
    return (
        <div className="CompanyCard container mb-4" style={{width: "60%"}}>  
            <Link to={`/companies/${company.handle}`} style={{textDecoration:"none"}}>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{company.name}</h5>
                    <small className="card-text">{company.description}</small>
                </div>
            </div>
            </Link>
        </div>
        
    );
}