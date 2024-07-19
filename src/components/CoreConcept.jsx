import "./CoreConcept.css";

//Component Function
    //performing destructuring an object
export default function CoreConcept({img,title,Description}) {
return (
    <li>
    <img src={img} alt= {title} />
    <h3>{title}</h3>
    <p>{Description}</p>
    </li>
)}