import React   from "react";
import {WirelessFormItem1} from '../WirelessFormItem/WirelessFormItem1'
import {WirelessFormItem2} from '../WirelessFormItem/WirelessFormItem2'
import {WirelessFormItem3} from '../WirelessFormItem/WirelessFormItem3'

import "./WirelessForm.css";

export default function WirelessForm(props)  {
  const  {textIP,textSubnet, textDNS, handlerIP,handlerSubnet,handlerDNS} = props
    
    return (
      <div>
        <div className="wirDiv">
          <strong>Wireless Settings</strong>
        </div>
        <div className="wForm1">
         <WirelessFormItem1 
         
         
         />
        </div>

        <div className="wForm2">
          <label className="label-style">
            <input type="radio" />
            Obtain an IP address automatically (DHCP/BootP):
          </label>

          <WirelessFormItem2
          textIP={textIP}
          textSubnet={textSubnet}
          handlerIP={handlerIP}
          handlerSubnet={handlerSubnet}

          />
        </div>

        <div className="wForm3">
          <label className="label-style">
            <input type="radio" />
            Obtain DNS server address automatically:
          </label>

          <WirelessFormItem3
          textDNS={textDNS}
          handlerDNS={handlerDNS}
          />
        </div>
      </div>
    );
}
