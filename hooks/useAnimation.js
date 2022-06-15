import { useCallback, useEffect } from "react";
import { get } from "lodash";
import { v4 as uuidV4 } from "uuid";
import gsap from "gsap";
import { checkoutAnimationCommonValue } from "../config/animation";
import pubsubKey from "../config/pubsubKey";
import useSubscribe from "./useSubscribe";

/**
 * 进出场动画
 * @param {*} options 动画元素配置
 */

export function useAnimation(options) {
  const [_options, ids] = _resolveOptions(options);
  // 页面加载时，执行入场动画
  useEffect(() => {
    _animate(_options, "from");
  }, []);

  // 页面切换时，执行出场动画
  const leaveAnimation = useCallback(() => {
    _animate(_options, "to");
  }, [_options]);

  useSubscribe(pubsubKey.leaveAnimateKey, leaveAnimation);
  return [ids];
}

const _animate = (options, type = "from") => {
  options.forEach((option) => {
    const elementList = get(option, "ids", []).map((id) =>
      document.getElementById(id)
    );
    gsap[type](elementList, {
      ...option.vars,
      ...checkoutAnimationCommonValue
    });
  });
};

const _resolveOptions = (options) => {
  const ids = options.reduce((acc, option) => {
    return {
      ...acc,
      ...get(option, "targets", []).reduce(
        (acc, target) => ({ ...acc, [target]: uuidV4() }),
        {}
      )
    };
  }, {});
  const _options = options.map((option) => ({
    ...option,
    ids: option.targets.map((target) => ids[target])
  }));
  return [_options, ids];
};
