// import React, { useState } from 'react';
// import './App.css';
// import { Checkbox, DefaultButton, PrimaryButton } from '@fluentui/react-components';

// function App() {
//   const [buttonClick, setButtonClick] = useState(0);
//   const [checkboxChecked, setCheckboxChecked] = useState(false);
//   const [isToggled, setIsToggled] = useState(false);
//   const [textValue, setTextValue] = useState('');

//   return (
//     <>
//       <div className='App'>
//         <header className='App-header'>
//           <h1>Fluent UI React Components</h1>
//         </header>

//         <PrimaryButton onClick={() => setButtonClick(buttonClick + 1)}>
//           Primary Button Clicked {buttonClick} times
//         </PrimaryButton>
//         <DefaultButton onClick={() => setButtonClick(0)}>
//           Reset Button Clicks
//         </DefaultButton>
//       </div>
//     </>
//   )
// }

// export default App

import React, { useState } from 'react';
import { Button, Input, Checkbox, Field } from '@fluentui/react-components';
import { Dismiss24Regular } from '@fluentui/react-icons'; // For a dismiss icon on the message

// Main App component
function App() {
  const [buttonClicks, setButtonClicks] = useState(0);
  const [textFieldValue, setTextFieldValue] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  // Function to display a temporary message
  const displayMessage = (msg) => {
    setMessage(msg);
    setShowMessage(true);
    // Automatically hide the message after 3 seconds
    setTimeout(() => {
      setShowMessage(false);
      setMessage('');
    }, 3000);
  };

  // Event handler for button clicks
  const onButtonClick = () => {
    const newClicks = buttonClicks + 1;
    setButtonClicks(newClicks);
    displayMessage(`Button clicked ${newClicks} times!`);
  };

  // Event handler for text field changes
  const onTextFieldChange = (event, data) => {
    setTextFieldValue(data.value || '');
  };

  // Event handler for checkbox changes
  const onCheckboxChange = (event, data) => {
    setIsChecked(data.checked);
    displayMessage(`Checkbox is now: ${data.checked ? 'Checked' : 'Unchecked'}`);
  };

  return (
    // Main container with Tailwind for responsive centering and font
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4 font-inter">
      {/* Header */}
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Fluent UI React Components Example</h1>
        <p className="text-lg text-gray-600">Showcasing basic Fluent UI v9 components with Tailwind CSS.</p>
      </header>

      {/* Message display area */}
      {showMessage && (
        <div className="fixed top-4 right-4 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-3 animate-fade-in-down z-50">
          <span>{message}</span>
          <Button
            appearance="transparent"
            icon={<Dismiss24Regular />}
            onClick={() => setShowMessage(false)}
            className="text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full p-1"
            aria-label="Dismiss message"
          />
        </div>
      )}

      {/* Main content stack/card */}
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg space-y-6 md:p-8">
        {/* Buttons Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Buttons</h2>
          <div className="flex flex-col space-y-4">
            {/* Default Button (now appearance="secondary") */}
            <Button appearance="secondary" onClick={onButtonClick} className="w-full">
              Default Button
            </Button>
            {/* Primary Button */}
            <Button appearance="primary" onClick={onButtonClick} className="w-full">
              Primary Button
            </Button>
          </div>
          <p className="mt-4 text-gray-600">Button clicks: <span className="font-medium text-blue-600">{buttonClicks}</span></p>
        </section>

        <hr className="border-t border-gray-200" />

        {/* Text Field Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Text Field</h2>
          {/* Using Field for label and description with Input */}
          <Field
            label="Enter your name"
            validationMessage="This is a basic text field." // Using validationMessage for description
          >
            <Input
              value={textFieldValue}
              onChange={onTextFieldChange}
              placeholder="Type something..."
              className="w-full"
            />
          </Field>
          <p className="mt-4 text-gray-600">Text field value: <span className="font-medium text-blue-600">{textFieldValue || 'Empty'}</span></p>
        </section>

        <hr className="border-t border-gray-200" />

        {/* Checkbox Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Checkbox</h2>
          <Checkbox
            label="Agree to terms and conditions"
            checked={isChecked}
            onChange={onCheckboxChange}
            className="text-gray-700"
          />
          <p className="mt-4 text-gray-600">Checkbox status: <span className="font-medium text-blue-600">{isChecked ? 'Agreed' : 'Not Agreed'}</span></p>
        </section>
      </div>

      {/* Tailwind CSS CDN for styling */}
      <script src="https://cdn.tailwindcss.com"></script>
      {/* Custom CSS for fade-in animation */}
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        .font-inter {
          font-family: 'Inter', sans-serif;
        }
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-down {
          animation: fadeInDown 0.5s ease-out forwards;
        }
        `}
      </style>
    </div>
  );
}

export default App;
