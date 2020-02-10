import React from "react";

export const EthernetFormItem2 = props => {
  const {  ethernetDNS, handlerDNS,errorDNS ,selectedOption , handerOptionChange } = props;
  return (
    <React.Fragment>
      <label className="label-style">
        <input 
        type="radio"
        value='option4'
        defaultChecked={selectedOption ==='option4' } 
        onChange={handerOptionChange}
        name='selected2'
         />
        Use the following DS server address:
      </label>

      <label className="label-style">
        Preferred DNS server:{" "}
        <input 
        type="text"
        pattern="\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}"
        value={ethernetDNS}
        onChange={handlerDNS}
        minLength="12"
        maxLength="15"
        formNoValidate
        placeholder="example:223.255.255.1"
        />
        <div style={{color:'red',fontSize:'12px'}}>{errorDNS}</div>
      </label>

      <label className="label-style">
        Alternative DNS server: <input type="text" />
      </label>
    </React.Fragment>
  );
};
