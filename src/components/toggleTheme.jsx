import { ThemeConsumer } from '../contexts/themeContext';
import { FaMoon, FaSun } from 'react-icons/fa';
 
function ToggleTheme() {
  return (
    <ThemeConsumer>
      {({ theme, toggleTheme }) => {
        return <button onClick={toggleTheme}>{theme === 'light' ? <FaMoon /> : <FaSun />}</button>;
      }}
    </ThemeConsumer>
  );
}
 
export default ToggleTheme;