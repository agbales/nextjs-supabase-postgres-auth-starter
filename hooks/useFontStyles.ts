import { useState } from 'react';

export function useFontStyles() {
  const [styleClasses, setStyleClasses] = useState<string[]>([
    'font-black',
    'font-arial',
  ]);

  // const addStyleClass = (style: string) => {
  //   setStyleClasses(prev => [...prev, style]);
  // };
  // const removeStyleClass = (style: string) => {
  //   setStyleClasses(prev => prev.filter(s => s !== style));
  // };

  const swapStyleClass = (oldClass: string, newClass: string) => {
    const updatedClasses = styleClasses.map(c =>
      c === oldClass ? newClass : c
    );
    setStyleClasses(updatedClasses);
  };

  return {
    styleClassesString: styleClasses.join(' '),
    setStyleClasses,
    swapStyleClass,
  };
}
