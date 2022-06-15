export const checkoutAnimationCommonValue = {
  opacity: 0,
  duration: 1.5, // 进出场动效持续时间，路由延迟切换时间，单位秒
  ease: "power4.out",
  scale: 0.3,
  stagger: 0.5,
  onStart: () => {
    document.documentElement.style.overflow = "hidden";
  },
  onComplete: () => {
    document.documentElement.style.overflow = "auto";
  }
};
