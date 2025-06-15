import { Button } from "@mui/material";
import "./CustomButton.css";

const CustomButton = (props) => {
  const { title } = props;
  return (
    <>
      <Button variant="contained" className="customBtn">
        {title}
      </Button>
    </>
  );
};

export default CustomButton;
