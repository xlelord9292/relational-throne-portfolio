"use client";

import { GeneralEvents } from "../lib/basehub/fragments";
import { sendEvent } from "basehub/events";
import * as React from "react";

export function PageView({ ingestKey }: { ingestKey: GeneralEvents["ingestKey"] }) {
  React.useEffect(() => {
    sendEvent(ingestKey, {
      eventType: "view",
    });
  }, [ingestKey]);

  return null;
}
