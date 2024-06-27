// utils/themeEvent.ts

export const dispatchThemeEvent = (theme: any) => {
  const event = new CustomEvent('themeChange', { detail: theme });
  window.dispatchEvent(event);
};

export const listenToThemeChange = (callback: (theme: any) => void) => {
  window.addEventListener('themeChange', (event: Event) => {
    if (event instanceof CustomEvent) {
      callback(event.detail);
    }
  });
};
