// utils/themeEvent.js
export const dispatchThemeEvent = (theme) => {
    const event = new CustomEvent('themeChange', { detail: theme });
    window.dispatchEvent(event);
  };
  
  export const listenToThemeChange = (callback: (arg0: any) => void) => {
    window.addEventListener('themeChange', (event) => {
      callback(event.detail);
    });
  };
  