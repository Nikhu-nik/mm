import { Animation, createAnimation } from '@ionic/angular';

export const modalEnterAnimation = (
    baseEl: HTMLElement,
    presentingEl?: HTMLElement,
  ): Animation => {


  const backdropAnimation = createAnimation()
    .addElement(baseEl.querySelector('ion-backdrop')!)
    .fromTo('opacity', 0.01, 'var(--backdrop-opacity)')
    .beforeStyles({
      'pointer-events': 'none'
    })
    .afterClearStyles(['pointer-events']);

  const wrapperAnimation = createAnimation()
    .addElement(baseEl.querySelectorAll('.modal-wrapper, .modal-shadow')!)
    .beforeStyles({ 'opacity': 1 })
    .keyframes([
        { offset: 0, transform: 'translateY(-100vh)' },
        { offset: 0.4, transform: 'translateY(20vh)'},
        { offset: 0.7, transform: 'translateY(-10vh)'},
        { offset: 1, transform: 'translateY(0vh)'},
      ]);

  const baseAnimation = createAnimation()
    .addElement(baseEl)
    .easing('ease-out')
    .duration(900)
    .addAnimation([wrapperAnimation, backdropAnimation]);

  return baseAnimation;
};