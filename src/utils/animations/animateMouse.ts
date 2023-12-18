import {
  AnimationOptionsWithOverrides,
  MotionKeyframesDefinition,
  animate,
  spring,
} from "motion";

export function animateMouse(
  keyframes: MotionKeyframesDefinition,
  options?: AnimationOptionsWithOverrides | undefined,
) {
  animate(".mouse", keyframes, options);
}

export function animateMouseDown() {
  animateMouse({ scale: 0.95 }, { duration: 0.1, easing: spring() });
}

export function animateMouseHover() {
  animateMouse({ scale: 1.5 }, { duration: 0.1, easing: spring() });
}

export function animateMouseUp() {
  animateMouse({ scale: 1 }, { duration: 0.1, easing: spring() });
}
