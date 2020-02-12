import React from "react";
import "./style.css";
export default class EthernetFormItem2 extends React.Component {
  state = {
    isAutoMode: true
  };

  handlerModeChange = () =>
    this.setState(({ isAutoMode }) => ({
      isAutoMode: !isAutoMode
    }));

  render() {
    const { ethernetDNS, handlerDNS, errorDNS } = this.props;

    const { isAutoMode } = this.state;
    return (
      <React.Fragment>
        <label className="label-style">
          <input
            type="radio"
            value="auto2"
            name="Automatic2"
            checked={isAutoMode}
            onChange={this.handlerModeChange}
          />
          Obtain DNS server address automatically
        </label>
        <label className="label-style">
          <input
            type="radio"
            value="manual2"
            name="Manual2"
            checked={!isAutoMode}
            onChange={this.handlerModeChange}
          />
          Use the following DS server address:{" "}
        </label>

        <label className={`ip ${isAutoMode ? "ip--disabled" : ""}`}>
          Preferred DNS server:{" "}
          <input
            type="text"
            pattern="\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}"
            value={ethernetDNS}
            onChange={handlerDNS}
            minLength="11"
            maxLength="15"
            placeholder="example:223.255.255.1"
            disabled={isAutoMode}
          />
          <div style={{ color: "red", fontSize: "12px" }}>{errorDNS}</div>
        </label>

        <label className={`ip ${isAutoMode ? "ip--disabled" : ""}`}>
          Alternative DNS server: <input type="text" disabled={isAutoMode} />
        </label>
      </React.Fragment>
    );
  }
}
