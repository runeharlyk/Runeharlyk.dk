import { readable } from 'svelte/store';

export const scrollPercent = readable(0, function start(set) {
    document.body.onscroll = () => {
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement || document.body;
        set((scrollTop / (scrollHeight - clientHeight)) * 100);
    };
 
  return function stop() {
    document.body.onscroll = () => {}
  };
});
