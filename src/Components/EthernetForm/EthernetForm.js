import React from "react";
import "./EthernetForm.css";
import { EthernetFormItem1 } from "../EthernetFormItems/EthernetFormItem1";
import { EthernetFormItem2 } from "../EthernetFormItems/EthernetFormItem2";
export default function EthernetForm(props)  {
  
 
    const { ethernetIP,  ethernetSubnet,  ethernetDNS,
            handlerIP, handlerDNS, handlerSubnet,
            errorIP, errorSubnet, errorDNS } = props;
            
    return (
      <div>
        <div className="eDiv">
          <strong>Ethernet Settings</strong>
        </div>
        <div className="iForm1">
          <label className="label-style">
            <input type="radio" />
            Obtain an IP address automatically(DHCP/BootP)
          </label>
          <EthernetFormItem1
            textIP={ethernetIP}
            textSubnet={ethernetSubnet}
            handlerIP={handlerIP}
            handlerSubnet={handlerSubnet}
            errorIP={errorIP}
            errorSubnet={errorSubnet}
            
          />
        </div>

        <div className="iForm2">
          <label className="label-style">
            <input type="radio" />
            Obtain DNS server address automatically
          </label>
          <EthernetFormItem2
            textDNS={ethernetDNS}
            handlerDNS={handlerDNS}
            errorDNS={errorDNS}
          />
        </div>
      </div>
    );
}
