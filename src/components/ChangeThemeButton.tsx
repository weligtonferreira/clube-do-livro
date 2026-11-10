'use client';

import { BsFillMoonFill } from 'react-icons/bs';
import { PiSunBold } from 'react-icons/pi';

import { useTheme } from '../hooks/useTheme';

export function ChangeThemeButton() {
  const { theme, setLightTheme, setDarkTheme } = useTheme();

  return (
    <div className='absolute right-10 top-10'>
      {theme == 'light' ? (
        <BsFillMoonFill
          size={24}
          onClick={setDarkTheme}
          className='text-indigo-900 hover:text-indigo-950 transition-colors cursor-pointer'
        />
      ) : (
        <PiSunBold
          size={28}
          onClick={setLightTheme}
          className='text-yellow-400 hover:text-yellow-500 transition-colors cursor-pointer'
        />
      )}
    </div>
  );
}
