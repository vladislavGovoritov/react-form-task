import React from "react";
import "./EthernetForm.css";
import { EthernetFormItem1 } from "../EthernetFormItems/EthernetFormItem1";
import { EthernetFormItem2 } from "../EthernetFormItems/EthernetFormItem2";
export default function EthernetForm(props)  {
  
 
    const { ethernetIP,  ethernetSubnet,  ethernetDNS,
            handlerIP, handlerDNS, handlerSubnet,
            errorIP, errorSubnet, errorDNS,
            selectedOption , handerOptionChange,
            disabled
           } = props;

    return (
      <div>
        <div className="eDiv">
          <strong>Ethernet Settings</strong>
        </div>
          <div className="iForm1">
          <label className="label-style">
            <input 
            type="radio" 
            value='option1'
            defaultChecked
            onChange={handerOptionChange}
            name='selected1'
            
             />
            Obtain an IP address automatically(DHCP/BootP)
          </label>
          <EthernetFormItem1
            ethernetIP={ethernetIP}
            ethernetSubnet={ethernetSubnet}
            handlerIP={handlerIP}
            handlerSubnet={handlerSubnet}
            errorIP={errorIP}
            errorSubnet={errorSubnet}
            selectedOption={selectedOption}
            handerOptionChange={handerOptionChange}
            disabled={disabled}
            
          />
        
        </div>

        <div className="iForm2">
          <label className="label-style">
            <input 
            type="radio" 
            value='option3'
            defaultChecked={selectedOption === 'option3'}
            onChange={handerOptionChange}
            name='selected2'
            />
            Obtain DNS server address automatically
          </label>
          <EthernetFormItem2
            ethernetDNS={ethernetDNS}
            handlerDNS={handlerDNS}
            errorDNS={errorDNS}
            handerOptionChange={handerOptionChange}
            selectedOption={selectedOption}
          />
        </div>
      </div>
    );
}
