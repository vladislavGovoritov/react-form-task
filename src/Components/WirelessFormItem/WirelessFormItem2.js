import React from "react";
import "./style.css";
export default class WirelessFormItem2 extends React.Component {
  state = {
    isAutoMode: true
  };

  handlerModeChange = () =>
    this.setState(({ isAutoMode }) => ({
      isAutoMode: !isAutoMode
    }));

  render() {
    const {
      wirelessIP,
      wirelessSubnet,
      wirelessHandlerIP,
      wirelessHandlerSubnet,
      wirErrorIP,
      wirErrorSubnet
    } = this.props;

    const { isAutoMode } = this.state;
    return (
      <React.Fragment>
        <label className="label-style">
          <input
            type="radio"
            value="auto3"
            name="Automatic3"
            checked={isAutoMode}
            onChange={this.handlerModeChange}
          />
          Obtain an IP address automatically (DHCP/BootP):
        </label>
        <label className="label-style">
          <input
            type="radio"
            value="manual3"
            name="Manual3"
            checked={!isAutoMode}
            onChange={this.handlerModeChange}
          />
          Use the following IP address:{" "}
        </label>

        <label className={`ip ${isAutoMode ? "ip--disabled" : ""}`}>
          IP address:{" "}
          <input
            type="text"
            value={wirelessIP}
            onChange={wirelessHandlerIP}
            minLength="11"
            maxLength="15"
            placeholder="example:223.255.255.1"
            disabled={isAutoMode}
          />
          <div style={{ color: "red", fontSize: "12px" }}>{wirErrorIP}</div>
        </label>

        <label className={`ip ${isAutoMode ? "ip--disabled" : ""}`}>
          Subnet mask:{" "}
          <input
            type="text"
            value={wirelessSubnet}
            onChange={wirelessHandlerSubnet}
            minLength="11"
            maxLength="15"
            placeholder="example:223.255.255.1"
            disabled={isAutoMode}
          />
          <div style={{ color: "red", fontSize: "12px" }}>{wirErrorSubnet}</div>
        </label>

        <label className={`ip ${isAutoMode ? "ip--disabled" : ""}`}>
          Default Gateway:
          <input type="text" disabled={isAutoMode} />
        </label>
      </React.Fragment>
    );
  }
}
