import { useCallback, useState } from 'react'
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { csharp } from "@replit/codemirror-lang-csharp";
import { githubDark } from '@uiw/codemirror-theme-github';



function App() {
  const [value, setValue] = useState("console.log('hello world!');");

  const onChange = useCallback((val:string, viewUpdate: unknown) => {
    console.log('val: ', val);
    console.log('view update: ', viewUpdate);
    setValue(val);
  }, []);

  const srcBoxExt = [javascript({ jsx: true })];
  const dstBoxExt = [csharp()];

  return (
    <main className='w-full h-full bg-gray-800 p-4 dark'>
      <div className='w-[600px] h-[720px] mx-auto bg-stone-200 border-4 border-white mb-8 rounded-md'>
        <CodeMirror 
          value={value}
          height="700px"
          theme={githubDark}
          extensions={srcBoxExt} 
          onChange={onChange} />
      </div>
      <div className='w-[600px] h-[720px] mx-auto bg-stone-200 border-2 border-white mb-8'>
        <CodeMirror 
          value={value}
          height="700px"
          theme={githubDark}
          extensions={dstBoxExt} 
          onChange={onChange} />
      </div>
    </main>
  )
}

export default App
