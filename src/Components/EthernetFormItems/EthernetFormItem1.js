import React from "react";

export const EthernetFormItem1 = (props) => {
    const { ethernetIP,  ethernetSubnet ,
            handlerIP, handlerSubnet,
            errorIP, errorSubnet,
            handerOptionChange, selectedOption
          } = props

   
  return (
    <React.Fragment>
      <label className="label-style">
        <input 
        type="radio" 
        value='option2' 
        defaultChecked={selectedOption ==='option2' } 
        onChange={handerOptionChange}
        name='selected1'
        />
        Use the following IP address:
      </label>

      <label className="label-style">
        IP address:{" "}
        <input
          type="text"
          pattern="\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}"
          value={ethernetIP}
          onChange={handlerIP}
          minLength="12"
          maxLength="15"
          formNoValidate
          placeholder="example:223.255.255.1"
        />
        <div style={{color:'red',fontSize:'12px'}}>{errorIP}</div>
      </label>
      

      <label className="label-style">
        Subnet mask:
        <input 
        type="text"
        pattern="\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}"
        value={ethernetSubnet}
        onChange={handlerSubnet}
        minLength="12"
        maxLength="15"
        formNoValidate
        placeholder="example:223.255.255.1"
         />
        <div style={{color:'red',fontSize:'12px'}}>{errorSubnet}</div>
      </label>

      <label className="label-style">
        Default Gateway: <input type="text" />
      </label>
    </React.Fragment>
  );
};
