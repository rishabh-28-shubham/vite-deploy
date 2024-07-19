import reactimg from "../../assets/react-core-concepts.png"
import  "./Header.css"

const greet = ['Fundemantal', 'Crucial', 'Core'];


//to generate a random number between a certain value
function getRandom(max) {
  return Math.floor(Math.random() * (max+1))
}
// let rnd = Math.floor(Math.random() * greet.length + 1)


export default function Header() {
const descp = greet[getRandom(2)];
return (
    <header>
        <img src={reactimg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
        {descp} React concepts you will need for almost any app you are
        going to build!
        </p>
    </header>
)}