// Toaster.js
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toaster = ( type, message ) => {
  // Display the toast based on the type
  switch (type) {
    case "success":
      toast.success(message);
      break;
    case "error":
      toast.error(message);
      break;
    case "info":
      toast.info(message);
      break;
    case "warning":
      toast.warn(message);
      break;
    default:
      toast(message);
  }

  return null; // Toaster doesn't render anything
};

export default Toaster;
