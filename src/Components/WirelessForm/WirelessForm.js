import React from "react";
import { WirelessFormItem1 } from "../WirelessFormItem/WirelessFormItem1";
import WirelessFormItem2 from "../WirelessFormItem/WirelessFormItem2";
import WirelessFormItem3 from "../WirelessFormItem/WirelessFormItem3";

import "./WirelessForm.css";

export default function WirelessForm(props) {
  const {
    wirelessIP,
    wirelessSubnet,
    wirelessDNS,
    wirelessHandlerIP,
    wirelessHandlerSubnet,
    wirelessHandlerDNS,
    wirErrorIP,
    wirErrorSubnet,
    wirErrorDNS,
    wirelessNetworkName,
    securityKey,
    securityKeyHandler,
    wirelessNetworkNameHandler
  } = props;

  return (
    <div>
      <div className="wirDiv">
        <strong>Wireless Settings</strong>
      </div>
      <div className="wForm1">
        <WirelessFormItem1
          wirelessNetworkName={wirelessNetworkName}
          wirelessNetworkNameHandler={wirelessNetworkNameHandler}
          securityKey={securityKey}
          securityKeyHandler={securityKeyHandler}
        />
      </div>

      <div className="wForm2">
        <WirelessFormItem2
          wirelessIP={wirelessIP}
          wirelessSubnet={wirelessSubnet}
          wirelessHandlerIP={wirelessHandlerIP}
          wirelessHandlerSubnet={wirelessHandlerSubnet}
          wirErrorIP={wirErrorIP}
          wirErrorSubnet={wirErrorSubnet}
        />
      </div>

      <div className="wForm3">
        <WirelessFormItem3
          wirelessDNS={wirelessDNS}
          wirelessHandlerDNS={wirelessHandlerDNS}
          wirErrorDNS={wirErrorDNS}
        />
      </div>
    </div>
  );
}
