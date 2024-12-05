import './styles.scss';
import {Button, Option, Select, TextField} from "@app/components";
import {FaPlus} from "react-icons/fa";

interface Props {
  className?: string;
  onAddRoom: () => void;
  width?: number;
  rooms: Option[];
}

function AddRoom(props: Props) {
  const {
    className,
    onAddRoom,
    width,
    rooms,
  } = props;

  const addKitchen = () => {}

  const addLivingRoom = () => {}

  const addRoom = () => {}

  return (
    <div className={`add-room ${className}`}>
      <TextField
        readOnly
        placeholder={'Добавьте помещение'}
      />
      <Button
        className={'add-room__button--outlined'}
        variant={'outlined'}
        text={'Кухня'}
        icon={FaPlus}
        onClick={addKitchen}
      />
      <Button
        className={'add-room__button--outlined'}
        variant={'outlined'}
        text={'Гостиная'}
        icon={FaPlus}
        onClick={addLivingRoom}
      />
      <Select
        className={'add-room__button button--contained button--primary'}
        options={rooms}
        name={''}
        onChange={addRoom}
        placeholder={'Другое'}
      />
    </div>
  );
}

export default AddRoom;
