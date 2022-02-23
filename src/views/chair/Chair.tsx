import "./Chair.scss";
import { FC, useState } from "react";
import { AvailableIcon, BookedIcon } from "../../icons";

interface IChairProps {
  isBooked: boolean;
  isSelected: boolean;
  onSelect: (callback: any) => void;
}

const Chair: FC<IChairProps> = ({ isBooked, isSelected, onSelect }) => {
  const [select, setSelect] = useState(isSelected);

  return (
    <label
      style={{
        cursor: isBooked ? "not-allowed" : "pointer",
      }}
    >
      <input
        type="checkbox"
        onChange={(e) => {
          setSelect(e.target.checked);
          onSelect(e.target.checked);
        }}
      />
      {isBooked ? (
        <BookedIcon />
      ) : (
        <AvailableIcon color={select ? "green" : null} />
      )}
    </label>
  );
};

export default Chair;
