import { useEffect } from "react";
import PubSub from 'pubsub-js'

export default (message, callback) => {
  useEffect(() => {
    const pubsub_token = PubSub.subscribe(message, callback);
    return () => {
      PubSub.unsubscribe(pubsub_token);
    };
  }, [message, callback]);
};
