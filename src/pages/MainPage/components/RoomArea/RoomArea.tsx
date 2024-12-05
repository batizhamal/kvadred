import './styles.scss';
import {Button, TextField} from "@app/components";
import {FaTrash, FaTrashAlt} from "react-icons/fa";

interface Props {
  className?: string;
  roomName: string;
  width?: number;
  value?: string;
  onChange?: (value: string) => void;
  onDelete?: () => void;
}

function RoomArea(props: Props) {
  const {
    className,
    roomName,
    width,
    value,
    onChange
  } = props;

  return (
    <div className={`room-area ${className}`}>
      <TextField
        readOnly
        placeholder={roomName}
      />
      <div className={'room-area__area'}>
        <TextField
          placeholder={'кв. м'}
          onChange={() => {}}
        />
      </div>
      <Button
        className={'kvadred-ml-4'}
        icon={FaTrashAlt}
        color={'alert'}
      />
    </div>
  );
}

export default RoomArea;
