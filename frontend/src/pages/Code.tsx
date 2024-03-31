import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { codePropType } from '.';

const Code = ({ code, language,step }:codePropType) => {
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (error) {
      console.error('Error copying to clipboard:', error);
    }
  };

  return (
    <div className='my-5'>
      <p>{step}</p>
      <div style={{ position: 'relative' }}>
        <SyntaxHighlighter language={language} style={vscDarkPlus}>
          {code}
        </SyntaxHighlighter>
        {copySuccess && <div style={{ position: 'absolute', top: '5px', right: '5px', color: 'green' }}>Copied!</div>}
      </div>
      <button onClick={handleCopy} className="bg-slate-500 text-white font-bold py-2 px-4 rounded mt-2">
        Copy 
      </button>
    </div>
  );
};

export default Code;
