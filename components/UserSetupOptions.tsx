"use client";
import React, { useState } from "react";
import Switch from "./Switch";

const UserSetupOptions = () => {
  const [help, setHelp] = useState(false);
  const [findProj, setFindProj] = useState(true);

  return (
    <div className="my-20">
      <p className="text-xl mt-10">Are you looking for help on projects?</p>
      <input
        type="text"
        name="help"
        id="help"
        className="opacity-0 absolute"
        value={help.toString()}
      />
      <Switch
        title="Help On Projects"
        styles="p-2 mt-3 shadow-lg rounded-lg bg-white"
        value={help}
        toggle={setHelp}
      />
      <p className="text-xl mt-10">
        Are you interested in finding projects to work on?
      </p>
      <input
        type="text"
        name="looking"
        id="looking"
        className="opacity-0 absolute"
        value={findProj.toString()}
      />
      <Switch
        title="Find Projects"
        styles="p-2 mt-3 shadow-lg rounded-lg bg-white"
        value={findProj}
        toggle={setFindProj}
      />
    </div>
  );
};

export default UserSetupOptions;
