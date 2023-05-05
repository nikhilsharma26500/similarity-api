import { FC } from 'react';
import { useTheme } from 'next-themes';

interface ThemeToggleProps {
  
}

const ThemeToggle: FC<ThemeToggleProps> = ({}) => {

const {setTheme} = useTheme()

  return <div>ThemeToggle</div>
}

export default ThemeToggle