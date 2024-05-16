import CodeMirror, { Extension } from '@uiw/react-codemirror';
import { useCallback, useState } from 'react';
import { githubDark } from '@uiw/codemirror-theme-github';
import { cn } from '@/lib/utils';

interface Props {
  extensions: Extension[];
  onValueChange: (val: string) => void;
  initValue?: string;
  className?: string;
}

export function CodeBox({
  extensions,
  onValueChange,
  initValue = "console.log('hello world!');",
  className,
}: Props) {
  const [value, setValue] = useState(initValue);

  const onChange = useCallback((input:string, viewUpdate: unknown) => {
    console.log('val: ', input);
    console.log('view update: ', viewUpdate);
    setValue(input);
    onValueChange(input);
  }, [onValueChange]);
  
  const classes = cn('w-full h-full bg-gray-800 p-4 dark', className);

  return (
    <div className={classes}>
      <CodeMirror 
        value={value}
        height="700px"
        theme={githubDark}
        extensions={extensions} 
        onChange={onChange} />
    </div>
  )
}