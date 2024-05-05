type MsgProps = {
  msg: string;
  isVisible: boolean;
};

const PopUp = ({ isVisible, msg }: MsgProps) => {
  return (
    <div className={isVisible ? "pop_up show" : "pop_up"}>
      <div>{msg}</div>
    </div>
  );
};

export default PopUp;
