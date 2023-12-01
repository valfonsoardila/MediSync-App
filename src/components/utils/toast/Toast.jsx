import { Toaster, toast } from "sonner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faExclamation, faX } from "@fortawesome/free-solid-svg-icons";

const Toast = ({props}) => {
    const {message, description, color, typeToast} = props;

    toast(message, {
        description: description,
        icon: (
          <FontAwesomeIcon
            icon={typeToast === "success" ? faCheck : faExclamation}
            style={{ color: color, fontSize: "20px" }}
          />
        ),
      });

  return (
    <Toaster />
  )
};

export default Toast;
