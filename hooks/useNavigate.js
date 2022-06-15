import { useNavigate as useReactNavigate } from "react-router-dom";
import PubSub from "pubsub-js";
import { delay } from "lodash";
import { checkoutAnimationCommonValue } from "../config/animation";
import pubsubKey from "../config/pubsubKey";

export function useNavigate() {
  const navigate = useReactNavigate();
  const navigateTo = (pathName) => {
    PubSub.publish(pubsubKey.leaveAnimateKey, pathName);
    delay(() => {
      navigate(pathName);
    }, checkoutAnimationCommonValue.duration * 1000);
  };
  return navigateTo;
}
