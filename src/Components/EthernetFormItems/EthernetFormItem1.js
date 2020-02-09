import React from "react";

export const EthernetFormItem1 = (props) => {
    const {textIP, textSubnet ,handlerIP,handlerSubnet} = props
  return (
    <React.Fragment>
      <label className="label-style">
        <input type="radio" />
        Use the following IP address:
      </label>

      <label className="label-style">
        IP address:{" "}
        <input
          type="text"
          pattern="\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}"
          value={textIP}
          onChange={handlerIP}
          minLength="12"
          maxLength="15"
          formNoValidate
        />
      </label>

      <label className="label-style">
        Subnet mask:
        <input type="text" value={textSubnet} onChange={handlerSubnet} />
      </label>

      <label className="label-style">
        Default Gateway: <input type="text" />
      </label>
    </React.Fragment>
  );
};
