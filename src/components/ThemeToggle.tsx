import { FC } from 'react';
import { useTheme } from 'next-themes';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem } from './ui/DropDownMenu';
import { DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import Button from './ui/button';
import { Laptop, Moon, Sun } from 'lucide-react';

interface ThemeToggleProps {

}

const ThemeToggle: FC<ThemeToggleProps> = ({ }) => {

    const { setTheme } = useTheme()

    return <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant='ghost' size='sm'>
                <Sun className='rotate-0 scale-100 transition-all hover:text-slate-900 dark:-rotate-90 dark:scale-0 dark:text-slate-400 dark:hover:text-slate-100' />
                <Moon className='absolute rotate-90 scale-0 transition-all hover:text-slate-900 dark:rotate-0 dark:scale-100 dark:text-slate-400 dark:hover:text-slate-100'></Moon>
                <span className='sr-only'>Toggle Theme</span>
            </Button>
            <DropdownMenuContent align='end' forceMount>
                <DropdownMenuItem onClick={() => setTheme('light')}>
                    <Sun className='mr-2 h-4 w-4'></Sun>
                    <span>Light</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('dark')}>
                    <Sun className='mr-2 h-4 w-4'></Sun>
                    <span>Dark</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('system')}>
                    <Laptop className='mr-2 h-4 w-4'></Laptop>
                    <span>System</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenuTrigger>
    </DropdownMenu>
}

export default ThemeToggle