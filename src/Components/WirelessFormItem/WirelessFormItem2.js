import React from "react";

export const WirelessFormItem2 = (props) => {
    const {wirelessIP, wirelessSubnet,
           wirelessHandlerIP,wirelessHandlerSubnet,
           wirErrorIP,wirErrorSubnet} = props
  return (
    <React.Fragment>
      <label className="label-style">
        <input type="radio" />
        Use the following IP address:
      </label>

      <label className="label-style">
        IP address:
        <input type="text" value={wirelessIP} onChange={wirelessHandlerIP} />
        <div style={{color:'red',fontSize:'12px'}}>{wirErrorIP}</div>
      </label>

      <label className="label-style">
        Subnet mask:
        <input type="text" value={wirelessSubnet} onChange={wirelessHandlerSubnet} />
        <div style={{color:'red',fontSize:'12px'}}>{wirErrorSubnet}</div>
      </label>

      <label className="label-style">
        Default Gateway:
        <input type="text" />
      </label>
    </React.Fragment>
  );
};
