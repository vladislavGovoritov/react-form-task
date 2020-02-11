import React from "react";

export const WirelessFormItem3 = (props) => {
    const {wirelessDNS, wirelessHandlerDNS,wirErrorDNS,
           selectedOption, handerOptionChange} = props
  return (
    <React.Fragment>
      <label className="label-style">
        <input 
        type="radio" 
        value='option8' 
        defaultChecked={selectedOption ==='option8' } 
        onChange={handerOptionChange}
        name='selected4'
        />
        Use the following DS server address:
      </label>

      <label className="label-style">
        Preferred DNS server:
        <input 
        type="text" 
        value={wirelessDNS} 
        onChange={wirelessHandlerDNS}
        minLength="11"
        maxLength="15"
        placeholder="example:223.255.255.1"
         />
        <div style={{color:'red',fontSize:'12px'}}>{wirErrorDNS}</div>
      </label>

      <label className="label-style">
        Alternative DNS server:
        <input type="text" />
      </label>
    </React.Fragment>
  );
};
