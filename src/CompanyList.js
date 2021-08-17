import CompanyCard from './CompanyCard';

/** Renders list of companies
 * 
 * Props:
 *  - companies
 * 
 * CompaniesContainer -> CompanyList -> CompanyCard
 */
export default function CompanyList({ companies }) {
    return companies.map(company => <CompanyCard key={company.handle} company={company}/>);
}