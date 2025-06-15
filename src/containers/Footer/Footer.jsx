import {
  Box,
  Grid,
  Typography,
  TextField,
  Link,
  styled,
} from "@mui/material";
import "./Footer.css";
import CustomButton from "../../components/ButtonComponet/CustomButton";
import CustomCheckbox from "../../components/CustomChekBox/CustomChekBox";
import { useState } from "react";

const Footer = () => {
  const Item = styled("div")(({ theme }) => ({}));
  const [selectedType, setSelectedType] = useState("");
  return (
    <Grid className="footerGridRoot" pb={6}>
      <Grid className="FooterEmptyGrid"></Grid>
      <Grid
        container
        spacing={2}
        sx={{ bgcolor: "#f95d38", color: "black" }}
        mt={6}
      >
        <Grid size={{ xs: 12, md: 3 }} pr={10} pl={10}>
          <Item>
            <Typography
              variant="h4"
              fontWeight="bold"
              lineHeight={1}
              className="footerLogo"
            >
              DESIGN
              <br />
              DECLARES
            </Typography>
          </Item>
        </Grid>
        <Grid size={{ xs: 12, md: 3 }} pr={10} pl={10}>
          <Item>
            <Box
              display="flex"
              flexDirection="column"
              gap={1}
              className="socialMediaLinks"
            >
              {["Contact", "Instagram", "LinkedIn", "Privacy Policy"].map(
                (item) => (
                  <Link
                    key={item}
                    href="#"
                    underline="none"
                    color="inherit"
                    sx={{ fontSize: "1.1rem" }}
                  >
                    {item}
                  </Link>
                )
              )}
            </Box>
          </Item>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }} pr={10} pl={10}>
          <Item>
            <Typography
              variant="h6"
              fontWeight="bold"
              mb={2}
              className="formTItleText"
            >
              Sign up to the D! Newsletter
            </Typography>

            <TextField
              className="textFieldFOrmFooter"
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
                style: { color: "#000", fontSize: "20px" },
              }}
            />
            <Grid container spacing={2} mt={2} className="footerCheckBox">
              <Grid size={{ xs: 12, md: 9 }}>
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
              <Grid size={{ xs: 12, md: 3 }}>
                <CustomButton title={"Subscribe"} />
              </Grid>
            </Grid>
          </Item>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        sx={{ bgcolor: "#f95d38", color: "black" }}
        mt={6}
        mb={6}
      >
        <Grid size={{ xs: 12, md: 3 }} pr={10} pl={10}></Grid>
        <Grid size={{ xs: 12, md: 9 }} pr={10} pl={10}>
          <Typography className="footerTextSmal">
            This website has been built following low-carbon principles of web
            development and hosted using serverless computing, by only
            allocating energy when needed and on demand.
            <span className="footerTextSmalSpan">
              {" "}
              Learn more about our carbon footprint.
            </span>
          </Typography>
          <Typography className="footerTextSmal" mt={1}>
            Empowered by
            <span className="footerTextSmalSpan">Driftime®</span>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
