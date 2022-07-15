import { useEffect } from "react";
import useMedia from './useMedia'
import useLocalStorage from './useLocalStorage'

function useDarkMode() {

    const [enabledState, setEnabledState] = useLocalStorage("dark-mode-enabled");

    const prefersDarkMode = usePrefersDarkMode();

    const enabled = typeof enabledState !== "undefined" ? enabledState : prefersDarkMode;

    useEffect(
        () => {
          const className = "dark-mode";
          const element = window.document.body;
          if (enabled) {
            element.classList.add(className);
          } else {
            element.classList.remove(className);
          }
        },
        [enabled] // Only re-call effect when value changes
      );
    
      // Return enabled state and setter
      return [enabled, setEnabledState];

}

// Compose our useMedia hook to detect dark mode preference.
// The API for useMedia looks a bit weird, but that's because ...
// ... it was designed to support multiple media queries and return values.
// Thanks to hook composition we can hide away that extra complexity!
// Read the recipe for useMedia to learn more: usehooks.com/useMedia
function usePrefersDarkMode() {
    return useMedia(["(prefers-color-scheme: dark)"], [true], false);
  }

export default useDarkMode