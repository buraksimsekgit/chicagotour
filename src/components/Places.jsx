import React from "react";
import Places2 from "./Places2";

function Places() {
  return (
    <div>
      <Places2
        name="Buckingham Fountain"
        address="301 S Columbus Dr, Chicago, IL 60605"
        image="buckingham-fountain.png"
      />
      <Places2
        name="Chicago Riverwalk"
        address="213 River Ave"
        image="chicago-riverwalk.jpeg"
      />
      <Places2
        name="Lincoln Park Zoo"
        address="2001 N Clark St, Chicago, IL 60614"
        image="lincoln-zoo.jpeg"
      />
      <Places2
        name="Metric Coffee Co."
        address="2021 W Fulton St suite k-101b, Chicago, IL 60612"
        image="metric-coffee.jpeg"
      />
    </div>
  );
}

export default Places;