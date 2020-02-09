import React from "react";
import "./EthernetForm.css";
import { EthernetFormItem1 } from "../EthernetFormItems/EthernetFormItem1";
import { EthernetFormItem2 } from "../EthernetFormItems/EthernetFormItem2";
export default function EthernetForm(props)  {
  
 
    const {textIP, textSubnet, textDNS, handlerIP, handlerDNS,handlerSubnet } = props;

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
            textIP={textIP}
            textSubnet={textSubnet}
            textDNS={textDNS}
            handlerIP={handlerIP}
            handlerSubnet={handlerSubnet}
          />
        </div>

        <div className="iForm2">
          <label className="label-style">
            <input type="radio" />
            Obtain DNS server address automatically
          </label>
          <EthernetFormItem2
            textIP={textIP}
            textSubnet={textSubnet}
            textDNS={textDNS}
            handlerDNS={handlerDNS}
          />
        </div>
      </div>
    );
}
