import React from "react";

export const WirelessFormItem1 = props => {
  const {
    wirelessNetworkName,
    securityKey,
    wirelessNetworkNameHandler,
    securityKeyHandler
  } = props;
  return (
    <React.Fragment>
      <label className="label-style">
        Enable wifi: <input type="checkbox" />
        <label className="label-style">
          Wireless Network Name:{" "}
          <input
            type="text"
            placeholder="Please select"
            value={wirelessNetworkName}
            onChange={wirelessNetworkNameHandler}
          />
          <button type="reset">
            <i className="fa fa-refresh" aria-hidden="true"></i>
          </button>
        </label>
      </label>

      <label className="label-style">
        Enable Wireless Security: <input type="checkbox" value={securityKey} />
      </label>

      <label className="label-style">
        Security Key: <input type="text" onChange={securityKeyHandler} />
      </label>
    </React.Fragment>
  );
};
