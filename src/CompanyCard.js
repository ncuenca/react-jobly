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
        <div className="CompanyCard">
            <h3>{company.name}</h3>
            <p>{company.description}</p>
        </div>
    );
}