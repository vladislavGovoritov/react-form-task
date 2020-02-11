import React from "react";

export const EthernetFormItem1 = (props) => {
    const { ethernetIP,  ethernetSubnet ,
            handlerIP, handlerSubnet,
            errorIP, errorSubnet,
            handerOptionChange, selectedOption,
            disabled
          } = props

   
  return (
    <React.Fragment >
      <label className="label-style">
        <input 
        type="radio" 
        value='option2' 
        defaultChecked={selectedOption ==='option2'} 
        onChange={handerOptionChange}
        name='selected1'
        />
        Use the following IP address:
      </label>

      <label className="label-style">
        IP address:
        <input
          type="text"
          pattern="\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}"
          value={ethernetIP}
          onChange={handlerIP}
          minLength="11"
          maxLength="15"
          formNoValidate
          placeholder="example:223.255.255.1"
          disabled={!disabled} 
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
        minLength="11"
        maxLength="15"
        formNoValidate
        placeholder="example:223.255.255.1"
        disabled={disabled  !== 'option2'}
         />
        <div style={{color:'red',fontSize:'12px'}}>{errorSubnet}</div>
      </label>

      <label className="label-style">
        Default Gateway: <input 
        type="text"
        disabled={disabled  !== 'option2'}
         />
      </label>
    </React.Fragment>
  );
};
