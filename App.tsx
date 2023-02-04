import * as React from 'react';

// formating styles (makes sure text stays inside editor box)
import 'codemirror/lib/codemirror.css';

// aesthetic styles
import 'codemirror/theme/material.css'; // syntax highlighting
import 'codemirror/mode/xml/xml'; // theme styles

import { Controlled as ControlledEditor } from 'react-codemirror2';

import './style.css';

export default function App() {
  const [value, setValue] = React.useState('bruh');
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <ControlledEditor
        onBeforeChange={(editor, data, value) => {
          setValue(value);
        }}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          mode: 'xml',
          theme: 'material',
          lineNumbers: true,
        }}
      />
    </div>
  );
}
