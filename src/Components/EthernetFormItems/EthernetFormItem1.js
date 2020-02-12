import React from "react";
import "./style.css";
export default class EthernetFormItem1 extends React.Component {
  state = {
    isAutoMode: true
  };

  handlerModeChange = () =>
    this.setState(({ isAutoMode }) => ({
      isAutoMode: !isAutoMode
    }));

  render() {
    const {
      ethernetIP,
      ethernetSubnet,
      handlerIP,
      handlerSubnet,
      errorIP,
      errorSubnet
    } = this.props;

    const { isAutoMode } = this.state;
    return (
      <React.Fragment>
        <label className="label-style">
          <input
            type="radio"
            value="auto"
            name="Automatic"
            checked={isAutoMode}
            onChange={this.handlerModeChange}
          />
          Obtain an IP address automatically(DHCP/BootP)
        </label>
        <label className="label-style">
          <input
            type="radio"
            value="manual"
            name="Manual"
            checked={!isAutoMode}
            onChange={this.handlerModeChange}
          />
          Use the following IP address:{" "}
        </label>

        <label className={`ip ${isAutoMode ? "ip--disabled" : ""}`}>
          IP address:{" "}
          <input
            type="text"
            pattern="\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}"
            value={ethernetIP}
            onChange={handlerIP}
            minLength="11"
            maxLength="15"
            placeholder="example:223.255.255.1"
            disabled={isAutoMode}
          />
          <div style={{ color: "red", fontSize: "12px" }}>{errorIP}</div>
        </label>

        <label className={`ip ${isAutoMode ? "ip--disabled" : ""}`}>
          Subnet mask:{" "}
          <input
            type="text"
            pattern="\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}"
            value={ethernetSubnet}
            onChange={handlerSubnet}
            minLength="11"
            maxLength="15"
            placeholder="example:223.255.255.1"
            disabled={isAutoMode}
          />
          <div style={{ color: "red", fontSize: "12px" }}>{errorSubnet}</div>
        </label>

        <label className={`ip ${isAutoMode ? "ip--disabled" : ""}`}>
          Default Gateway: <input type="text" disabled={isAutoMode} />
        </label>
      </React.Fragment>
    );
  }
}
