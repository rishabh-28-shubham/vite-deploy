//Optimized way of using images in react 
import {useState} from 'react';
import componentImg from "./assets/components.png";
import Header from "./components/Header/Header.jsx"; //imorting header
import CoreConcept from "./components/CoreConcept.jsx" 
// import TabButton from "./components/TabButton.jsx"
import TabButton from "./components/TabButton.jsx";

//import core_concepts
import { CORE_CONCEPTS } from "./data";

//OUT SOURCE CORE COMPONENT

//import examples
import { EXAMPLES } from './data';



function App() {

  const [selectedTopic, setselectedTopic] = useState();

  // let tabcontent = 'Please Click a button'
  function handelSelect(SelectedButton) {
        //SelectedButton => component, jsx, props, state
    // console.log(SelectedButton);
    // tabcontent = SelectedButton;
    setselectedTopic(SelectedButton);
    // console.log(selectedTopic)
    }
  return (
    <div>
      <Header />
      <main>
        <section id = "core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {/* title, Description and img are props at the part of this JSX code  */}
            {/* Dyanmically Generating this array */}
            {CORE_CONCEPTS.map((conceptItems) => <CoreConcept key={conceptItems.title} {...conceptItems} /> ) }

            {/* <CoreConcept
              title="Components"
              Description="The core UI building Block"
              img = {componentImg}
            />
            <CoreConcept
              title={CORE_CONCEPTS[1].title}
              Description={CORE_CONCEPTS[1].Description}
              img = {CORE_CONCEPTS[1].img}
            />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} /> */}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedTopic === 'components'}
              onSelect={() => handelSelect('components')}>
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'jsx'}
              onSelect={ () => handelSelect('jsx')}>
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'props'}
              onSelect={() => handelSelect('props')}>
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === 'state'}
              onSelect={() => handelSelect('state')}>
              State
            </TabButton>
          </menu>
        </section>
        {/* Dynamic Content */}
        {/* {selectedTopic} */}
        {/* { !selectedTopic ? <p>Please Click a Button</p> : <div id='tab-content'>
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>
              {EXAMPLES[selectedTopic].code}
            </code>
          </pre>
        </div>} */}

        {!selectedTopic && <p>Please Click a Button</p>}
        { selectedTopic && <div id='tab-content'>
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>
              {EXAMPLES[selectedTopic].code}
            </code>
          </pre>
        </div> }
      </main>
    </div>
  );
}

export default App;
