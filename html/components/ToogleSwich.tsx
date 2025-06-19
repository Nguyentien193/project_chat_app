import React, { useState } from 'react';

const ToogleSwich = () => {
  const [checked, setChecked] = useState(false);
  return (
    <span className="switch">
      <input checked={checked} id="switch-rounded" type="checkbox" onChange={() => setChecked(!checked)} />
      <label htmlFor="switch-rounded"></label>
    </span>
  );
};

export default ToogleSwich;
