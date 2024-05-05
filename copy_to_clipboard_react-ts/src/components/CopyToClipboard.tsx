import { useState } from "react";
import PopUp from "./PopUp.tsx";
import "bootstrap-icons/font/bootstrap-icons.css";

type CopyToClipboardProps = {
  text: string;
};

const CopyToClipboard = ({ text }: CopyToClipboardProps) => {
  const [popupMsg, setPopupMsg] = useState<string>("");
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setPopupMsg("Copied to clipboard!");
    } catch (error) {
      setPopupMsg("Failed to copy to clipboard");
    }

    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  };

  return (
    <>
      <div className="icon_wrapper">
        <i
          onClick={isVisible ? undefined : handleCopy}
          className={`clipboard_icon bi ${
            isVisible ? "disabled bi-clipboard-plus" : "bi-clipboard-minus"
          }`}
          style={{ cursor: isVisible ? "not-allowed" : "pointer" }}
        ></i>
      </div>
      <PopUp msg={popupMsg} isVisible={isVisible} />
    </>
  );
};

export default CopyToClipboard;
