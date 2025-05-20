import { useEffect, useRef, useState } from "react";
import Sketch from "react-color/lib/components/sketch/Sketch";

const MAX_COLORS = 6;

interface MultiColorPickerProps {
  allowEdit?: boolean;
  colors: string[];
  setColors: (colors: string[]) => void;
}

const MultiColorPicker = ({
  allowEdit = false,
  colors,
  setColors,
}: MultiColorPickerProps) => {
  const [popupIndex, setPopupIndex] = useState<number | null>(null);
  const popupRef = useRef<HTMLDivElement | null>(null);

  // Close popup on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        setPopupIndex(null);
      }
    };

    if (popupIndex !== null) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [popupIndex]);

  const openColorPicker = (index: number) => {
    if (!allowEdit) return;
    setPopupIndex(popupIndex === index ? null : index);
  };

  const handleColorChange = (index: number, color: { hex: string }) => {
    const updated = [...colors];
    updated[index] = color.hex;
    setColors(updated);
  };

  const addColor = () => {
    if (colors.length >= MAX_COLORS) return;
    setColors([...colors, "#ffffff"]);
  };

  const removeColor = (index: number) =>
    setColors(colors.filter((_, i) => i !== index));

  return (
    <div className="color-picker">
      {colors.map((color, index) => (
        <div key={index} className="color-option">
          <div
            className={`color-circle ${allowEdit ? "" : "disabled"}`}
            onClick={() => openColorPicker(index)}
            style={{ backgroundColor: color }}
          />
          {allowEdit && <button onClick={() => removeColor(index)}>x</button>}

          {popupIndex === index && (
            <div ref={popupRef} className="picker-popup">
              <Sketch
                disableAlpha
                presetColors={[]}
                color={color}
                onChangeComplete={(c) => handleColorChange(index, c)}
              />
            </div>
          )}
        </div>
      ))}

      {allowEdit && colors.length < MAX_COLORS && (
        <button className="add-color" onClick={addColor}>
          +
        </button>
      )}
    </div>
  );
};

export default MultiColorPicker;
