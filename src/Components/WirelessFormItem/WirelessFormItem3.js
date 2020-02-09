import React from "react";

export const WirelessFormItem3 = (props) => {
    const {textDNS, handlerDNS} = props
  return (
    <React.Fragment>
      <label className="label-style">
        <input type="radio" />
        Use the following DS server address:
      </label>

      <label className="label-style">
        Preferred DNS server:
        <input type="text" value={textDNS} onChange={handlerDNS} />
      </label>

      <label className="label-style">
        Alternative DNS server:
        <input type="text" />
      </label>
    </React.Fragment>
  );
};
