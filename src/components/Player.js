import React from "react";

import { Icons } from "styles";

export const Player = ({ square }) => {
  return (
    <>
      {square === "x" && <Icons src="/icons/x.png" alt="x icon"></Icons>}
      {square === "o" && <Icons src="/icons/o.png" alt="o icon"></Icons>}
    </>
  )
};
