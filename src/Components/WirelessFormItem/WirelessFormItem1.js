import React from "react";

export const WirelessFormItem1 = (props) => {
  return (
    <React.Fragment>
      <label className="label-style">
        Enable wifi:
        <input type="checkbox" />
      </label>

      <label className="label-style">
        Wireless Network Name:
        <input type="text" placeholder="Please select" />
      </label>

      <label className="label-style">
        Enable Wireless Security:
        <input type="checkbox" />
      </label>

      <label className="label-style">
        Security Key:
        <input type="text" />
      </label>
    </React.Fragment>
  );
};
