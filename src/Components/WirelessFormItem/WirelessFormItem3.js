import React from "react";

export const WirelessFormItem3 = (props) => {
    const {wirelessDNS, wirelessHandlerDNS,wirErrorDNS} = props
  return (
    <React.Fragment>
      <label className="label-style">
        <input type="radio" />
        Use the following DS server address:
      </label>

      <label className="label-style">
        Preferred DNS server:
        <input type="text" value={wirelessDNS} onChange={wirelessHandlerDNS} />
        <div style={{color:'red',fontSize:'12px'}}>{wirErrorDNS}</div>
      </label>

      <label className="label-style">
        Alternative DNS server:
        <input type="text" />
      </label>
    </React.Fragment>
  );
};
