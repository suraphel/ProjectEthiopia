//offer company name and logo
// textarea for his offer
// hidden and appear
// states for rendering the page
//WebSocket connections
//Ably
//add and Id
//add message storage and retrival
//

import Ably from "ably/promises";
import { useEffect } from "react";

const ably = new Ably.Realtime.Promise({ authUrl: "/api/createTokenRequest" });

// console.log(ably);

export function useChannel(channelName, callbackOnMessage) {
  const channel = ably.channels.get(channelName);

  const onMount = () => {
    channel.subscribe((msg) => {
      callbackOnMessage(msg);
    });
  };
  const onUnMount = () => {
    channel.unsubscribe();
  };

  const useEffectHook = () => {
    onMount();
    return () => {
      onUnMount();
    };
  };

  useEffect(useEffectHook);

  return [channel, ably];
}
