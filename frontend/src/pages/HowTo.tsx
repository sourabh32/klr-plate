
import Container from './Container';

import step1 from "../assets/step1.png"
import step2 from "../assets/step2.png"
import step3 from "../assets/step3.png"
import step4 from "../assets/step4.png"
import step5 from "../assets/step5.png"
import step6 from "../assets/step6.png"
import Code from './Code';
import { code1, code2, code3 } from '.';




const HowTo = () => {
  return (
    <Container>

    
    <div className="flex flex-col gap-10 mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">How to Use <span className="underline">klr-plate</span>?</h1>
      
      {/* Step 1: Open Old / Initialize New Project */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Step 1: Open Old / Initialize New Project</h2>
        <p className="mb-4">Start by opening your existing project or initializing a new one.</p>
        <img src={step1} alt="Step 1" className="mb-4 rounded-lg border  " />
      </div>
      
      {/* Step 2: Create Context and Set Up Context Providers */}
      
      
      {/* Step 3: Add Variable and Setting Initial Color Code */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Step 3: Add Variable and Set Initial Color Code</h2>
        <p className="mb-4">Add a new variable to your project and set the initial color code for the corresponding variable.</p>
        <img src={step2} alt="Step 3" className="mb-4 rounded-lg border " />
      </div>
      
      {/* Step 4: Updating Existing Variable */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Step 4: Updating Existing Variable</h2>
        <p className="mb-4">Update the existing variable with the desired color code.</p>
        <img src={step3} alt="Step 4" className="mb-4 rounded-lg border " />
      </div>
      
      {/* Step 5: Copying the Provided URL */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Step 5: Copying the Provided URL</h2>
        <p className="mb-4">Copy the provided URL and paste it into the frontend of your user project. Make a GET request to this URL.</p>
        <img src={step4} alt="Step 5" className="mb-4 rounded-lg border " />
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Step 2: Create Context and Set Up Context Providers</h2>
        <p className="mb-4">Create a context in React/Next.js and set up context providers to manage application-wide state.</p>
        <Code step={"Create a new context file named ColorContext.js"} code={code1} language={"javascript"} />
        <Code step={"Wrap your application with the ColorProvider in your main component (e.g., App.js):"} code={code2} language={"javascript"} />
        <Code step={"Now, you can consume the color variables from any component within your application. For example, in YourComponent.js"} code={code3} language={"javascript"} />
      </div>
      
      {/* Step 6: Repeating Steps 3 and 4 */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Step 6: Repeating Steps 3 and 4</h2>
        <p className="mb-4">Repeat steps 3 and 4 until you are satisfied with the color schema.</p>
        <img src={step5} alt="Step 6" className="mb-4 rounded-lg border " />
      </div>
      
      {/* Step 7: Get Schema */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Step 7: Get Schema</h2>
        <p className="mb-4">Copy and use the schema generated for your product.</p>
        <img src={step6} alt="Step 6" className="mb-4 rounded-lg border " />
      </div>
    </div>

    <div>
    
        <p className="mb-4">Leave a star one <a href="#" className='text-blue underline'>repo</a></p>
    </div>
    </Container>
  );
};

export default HowTo;
