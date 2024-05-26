import { useDarkMode } from '@/hooks/useDarkMode';
import { useEffect, useState } from 'react';

export function useBackgroundColor() {
  const isDarkMode = useDarkMode();

  const initialBackgroundColor = isDarkMode ? undefined : '#ffffff';
  const [backgroundColor, setBackgroundColor] = useState<string | undefined>(
    initialBackgroundColor
  );

  useEffect(() => {
    setBackgroundColor(initialBackgroundColor);
  }, []);

  return { backgroundColor, setBackgroundColor };
}
