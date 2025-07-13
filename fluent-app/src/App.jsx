import { useSelector, useDispatch } from 'react-redux';
import { initializeIcons } from '@fluentui/font-icons-mdl2';
import './App.css';
import { Checkbox, DefaultButton, Dropdown, PrimaryButton, Slider, Stack, TextField, Toggle } from '@fluentui/react';
import {
  incrementButtonClicks,
  setTextFieldValue,
  setIsChecked,
  setSelectedDropdownKey,
  setIsToggleOn,
  setSliderValue,
} from './features/ui/uiSlice';

initializeIcons();

const stackTokens = { childrenGap: 15 };
const stackStyles = {
  root: {
    width: 400,
    margin: '50px auto',
    padding: 20,
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    borderRadius: 8,
    backgroundColor: '#f5f5f5',
  },
};

const dropdownOptions = [
  { key: 'apple', text: 'Apple' },
  { key: 'orange', text: 'Orange' },
  { key: 'guava', text: 'Guava' },
  { key: 'banana', text: 'Banana' },
];

function App() {
  const dispatch = useDispatch();

  const buttonClicks = useSelector((state) => state.ui.buttonClicks);
  const textFieldValue = useSelector((state) => state.ui.textFieldValue);
  const isChecked = useSelector((state) => state.ui.isChecked);
  const selectedDropdownKey = useSelector((state) => state.ui.selectedDropdownKey);
  const isToggleOn = useSelector((state) => state.ui.isToggleOn);
  const sliderValue = useSelector((state) => state.ui.sliderValue);

  const onButtonClick = () => {
    dispatch(incrementButtonClicks());
    alert(`Button clicked ${buttonClicks + 1} times!`);
  };

  const onTextFieldChange = (event, newValue) => {
    dispatch(setTextFieldValue(newValue || ''));
  };

  const onCheckboxChange = (event, checked) => {
    dispatch(setIsChecked(checked));
    alert(`Checkbox is now: ${checked ? 'Checked' : 'Unchecked'}`);
  };

  const onDropdownChange = (event, item) => {
    dispatch(setSelectedDropdownKey(item.key));
    alert(`Selected: ${item.text}`);
  };

  const onToggleChange = (event, checked) => {
    dispatch(setIsToggleOn(checked));
    alert(`Toggle is now: ${checked ? 'On' : 'Off'}`);
  };

  const onSliderChange = (value) => {
    dispatch(setSliderValue(value));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Fluent UI React Components with Redux</h1>
      </header>

      <Stack tokens={stackTokens} styles={stackStyles}>
        <h2>Buttons (Redux Managed)</h2>
        <DefaultButton text="Default Button" onClick={onButtonClick} />
        <PrimaryButton text="Primary Button" onClick={onButtonClick} />
        <p>Button clicks: {buttonClicks}</p>
        <hr /> {/* Horizontal line for separation */}

        <h2>Text Field</h2>
        <TextField
          label="Enter your name"
          value={textFieldValue}
          onChange={onTextFieldChange}
          placeholder="Type something..."
          description="This is a basic text field."
        />
        <p>Text field value: {textFieldValue}</p>
        <hr />

        <h2>Checkbox</h2>
        <Checkbox
          label="Agree to terms and conditions"
          checked={isChecked}
          onChange={onCheckboxChange}
        />
        <p>Checkbox status: {isChecked ? 'Agreed' : 'Not Agreed'}</p>

        <h2>Dropdown</h2>
        <Dropdown
          placeholder="Select an option"
          label="Fruits"
          options={dropdownOptions}
          selectedKey={selectedDropdownKey}
          onChange={onDropdownChange}
        />
        <p>Selected fruit: {selectedDropdownKey ? dropdownOptions.find(o => o.key === selectedDropdownKey)?.text : 'None'}</p>
        <hr />

        <h2>Toggle</h2>
        <Toggle
          label="Enable Feature"
          onText="On"
          offText="Off"
          checked={isToggleOn}
          onChange={onToggleChange}
        />
        <p>Feature status: {isToggleOn ? 'Enabled' : 'Disabled'}</p>
        <hr />

        <h2>Slider</h2>
        <Slider
          label="Volume"
          min={0}
          max={100}
          step={1}
          defaultValue={0}
          showValue={true}
          value={sliderValue}
          onChange={onSliderChange}
        />
        <p>Current Volume: {sliderValue}</p>
      </Stack>
    </div>
  );
}

export default App;