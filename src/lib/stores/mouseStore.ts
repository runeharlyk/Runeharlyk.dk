import { readable } from 'svelte/store';

export const mousePercent = readable([0, 0], function start(set) {
    document.body.onmousemove = (e) =>
    set([e.clientX / window.screen.width, e.clientY / window.screen.height]);

    window.ondeviceorientation = (e) => set([(e.gamma || 0 + 90) / 90, (e.beta || 0 + 180) / 180]);
 
  return function stop() {
    document.body.onmousemove = () => {}
  };
});
