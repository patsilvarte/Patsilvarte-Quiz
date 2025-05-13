import React, { useState } from "react";
import "./styles.css";

export interface LabelItem {
  title: string;
  value: boolean | undefined;
}

export interface Labels {
  left: LabelItem;
  center: LabelItem;
  right: LabelItem;
}

interface Props {
  onChange: (key: number, value: boolean | undefined) => void;
  keyInfo: number;
}

const labels: Labels = {
  left: {
    title: "Não Gosto",
    value: false,
  },
  right: {
    title: "Gosto",
    value: true,
  },
  center: {
    title: "Neutro",
    value: undefined,
  },
};

export const TripleToggleSwitch: React.FC<Props> = ({ onChange, keyInfo }) => {
  const [switchPosition, setSwitchPosition] = useState<
    "left" | "center" | "right"
  >("left");
  const [animation, setAnimation] = useState<string | null>(null);

  const getSwitchAnimation = (value: "left" | "center" | "right") => {
    let anim: string | null = null;

    if (value === "center" && switchPosition === "left")
      anim = "left-to-center";
    else if (value === "right" && switchPosition === "center")
      anim = "center-to-right";
    else if (value === "center" && switchPosition === "right")
      anim = "right-to-center";
    else if (value === "left" && switchPosition === "center")
      anim = "center-to-left";
    else if (value === "right" && switchPosition === "left")
      anim = "left-to-right";
    else if (value === "left" && switchPosition === "right")
      anim = "right-to-left";

    setSwitchPosition(value);
    setAnimation(anim);
    onChange(keyInfo, labels[value].value);
  };

  return (
    <div className="main-container">
      <div className={`switch ${animation ?? ""} ${switchPosition}-position`} />

      {(["left", "center", "right"] as const).map((pos) => (
        <React.Fragment key={`${keyInfo}-${pos}`}>
          <input
            defaultChecked={pos === "left"}
            onChange={(e) => getSwitchAnimation(pos)}
            name="map-switch"
            id={`${keyInfo}-${pos}`}
            type="radio"
            value={pos}
            className={pos}
          />
          <label
            className={`${pos}-label ${
              switchPosition === pos ? "black-font" : ""
            }`}
            htmlFor={`${keyInfo}-${pos}`}
          >
            <p>{labels[pos].title}</p>
          </label>
        </React.Fragment>
      ))}
    </div>
  );
};
