import { Grid, Typography, styled } from "@mui/material";
import "./DonateD.css";
import { donateBtns } from "../../assets/mockData/mockData";
import CustomButton from "../../components/ButtonComponet/CustomButton";

const DonateD = () => {
  const Item = styled("div")(({ theme }) => ({}));
  return (
    <Grid container spacing={2} className="HeaderRoot">
      <Grid size={{ xs: 12, md: 5 }}>
        <Item className="sticky-title">
          <Typography variant="h4" className="BreakDownHeading">
            Donate to D!
          </Typography>
        </Item>
      </Grid>
      <Grid size={{ xs: 12, md: 7 }}>
        <Item className=" scrollable-content">
          <Typography variant="h5" className="dontSubHeading">
            Design Declares is a CIC and would not exist without our dedicated
            team of co-steers, volunteers, and our passionate community working
            towards change in the creative industry. Your support can go a long
            way, and helps us too continue the valuable work needed in tackling
            the climate crises. If you believe in the work we do, please
            consider a small donation to help us on our journey for a more
            equitable and just planet.
          </Typography>
          <Grid container spacing={1} mt={5}>
            {donateBtns.map((btnText, index) => (
              <Grid item key={index}>
                <CustomButton title={btnText} />
              </Grid>
            ))}
          </Grid>
        </Item>
      </Grid>
    </Grid>
  );
};

export default DonateD;
