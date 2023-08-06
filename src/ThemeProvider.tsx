import { MantineProvider, ColorSchemeProvider, ColorScheme } from "@mantine/core";
import { ModalsProvider } from '@mantine/modals';
import { useLocalStorage } from '@mantine/hooks';
import { myTheme } from '@/themeManagment/themeConfiguration';

import { Notifications } from '@mantine/notifications';
import { ModalContainer } from "@/components/Modal";
import { ThemeProviderProps } from "@/type";


export function ThemeProvider({ children }: ThemeProviderProps) {

  self.addEventListener('fetch',() => {
    console.log("fech") 
  });
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  });
  
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
    <MantineProvider theme={{ ...myTheme, colorScheme }} withGlobalStyles withNormalizeCSS withCSSVariables inherit>
      <ModalsProvider  modals={ModalContainer}>
        <Notifications />
        {children}
      </ModalsProvider>
    </MantineProvider>
  </ColorSchemeProvider>
  );
}
 