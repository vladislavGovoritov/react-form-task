import React from "react";
import "./EthernetForm.css";
import EthernetFormItem1 from "../EthernetFormItems/EthernetFormItem1";
import EthernetFormItem2 from "../EthernetFormItems/EthernetFormItem2";
export default function EthernetForm(props) {
  const {
    ethernetIP,
    ethernetSubnet,
    ethernetDNS,
    handlerIP,
    handlerDNS,
    handlerSubnet,
    errorIP,
    errorSubnet,
    errorDNS
  } = props;

  return (
    <div>
      <div className="eDiv">
        <strong>Ethernet Settings</strong>
      </div>
      <div className="iForm1">
        <EthernetFormItem1
          ethernetIP={ethernetIP}
          ethernetSubnet={ethernetSubnet}
          handlerIP={handlerIP}
          handlerSubnet={handlerSubnet}
          errorIP={errorIP}
          errorSubnet={errorSubnet}
        />
      </div>

      <div className="iForm2">
        <EthernetFormItem2
          ethernetDNS={ethernetDNS}
          handlerDNS={handlerDNS}
          errorDNS={errorDNS}
        />
      </div>
    </div>
  );
}
