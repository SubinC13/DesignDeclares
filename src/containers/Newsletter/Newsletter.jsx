import {
  Grid,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import NewTellerCard from "../../assets/images/newsteller.webp";
import "./Newsletter.css";
import { useState } from "react";
import CustomCheckbox from "../../components/CustomChekBox/CustomChekBox";
import CustomButton from "../../components/ButtonComponet/CustomButton";

const Newsletter = () => {
  const Item = styled("div")(({ theme }) => ({}));
  const [selectedType, setSelectedType] = useState("");
  return (
    <Grid container spacing={2} className="HeaderRoot">
      <Grid size={{ xs: 12, md: 5 }}>
        <Item className="sticky-title">
          <Typography variant="h4" className="BreakDownHeading">
            The Design Declares Newsletter and Toolkit
          </Typography>
        </Item>
      </Grid>
      <Grid size={{ xs: 12, md: 7 }}>
        <Item className=" scrollable-content">
          <img src={NewTellerCard} alt="Card" className="newsletter-image" />
          <Typography variant={"h5"} className="" mt={4}>
            Subscribe to the Design Declares UK newsletter to receive the latest
            news and updates. By signing up you will also gain access to The
            Design Declares Toolkit, a live and evolving Notion site co-created
            with our community. It is filled with the latest resources and
            methods to help you on your journey to climate-positive design.
          </Typography>
          <Typography variant={"h6"} mt={3}>
            Every signatory to Design Declares will receive an access link to
            the Toolkit. If you are unable to declare emergency quite yet, you
            can still access the Toolkit - just register below.
          </Typography>
          <Grid mt={3}>
            <TextField
              className="textFieldFOrm"
              label={"Email:*"}
              placeholder={"Email:*"}
              fullWidth
              margin="normal"
              multiline={false}
              rows={1}
              helperText={""}
              variant="outlined"
              InputLabelProps={{
                shrink: false,
                style: { color: "#adadad", fontSize: "20px" },
              }}
            />
          </Grid>
          <Grid mt={3}>
            <CustomCheckbox
              value={
                "I would like to be added to the Design Declares! newsletter and receive further updates."
              }
              selectedValue={selectedType}
              onChange={setSelectedType}
              label={
                "I would like to be added to the Design Declares! newsletter and receive further updates."
              }
              terms={true}
            />
          </Grid>
          <a href="#" className="privacy-link">
            View our Privacy Policy
          </a>
          <CustomButton title={"Subscribe"} />
        </Item>
      </Grid>
    </Grid>
  );
};

export default Newsletter;
