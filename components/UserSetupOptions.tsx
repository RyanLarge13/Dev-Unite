"use client";
import React, { useState } from "react";
import Switch from "./Switch";

const UserSetupOptions = () => {
  const [help, setHelp] = useState(false);
  const [findProj, setFindProj] = useState(true);

  return (
    <div>
      <p className="text-xl mt-10">Are you looking for help on projects?</p>
      <Switch
        title="Help On Projects"
        styles=""
        value={help}
        toggle={setHelp}
      />
      <p className="text-xl mt-10">
        Are you interested in finding projects to work on?
      </p>
      <Switch
        title="Find Projects"
        styles=""
        value={findProj}
        toggle={setFindProj}
      />
    </div>
  );
};

export default UserSetupOptions;
