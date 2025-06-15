import { Grid, Typography, styled, useMediaQuery } from "@mui/material";
import "./BreakDown.css";
import AccordianComponent from "../../components/AccordianComponent/AccordianComponent";
import CustomButton from "../../components/ButtonComponet/CustomButton";

const BreakDown = () => {
  const Item = styled("div")(({ theme }) => ({}));
  const isMobile = useMediaQuery("(max-width:599px)");
  return (
    <Grid container spacing={2} className="HeaderRoot">
      <Grid size={{ xs: 12, md: 5 }}>
        <Item className="sticky-title">
          <Typography variant="h4" className="BreakDownHeading">
            This is Breakdown
          </Typography>
        </Item>
      </Grid>
      <Grid size={{ xs: 12, md: 7 }}>
        <Item className=" scrollable-content">
          <Typography
            variant={isMobile ? "h4" : "h2"}
            className="BreakDownSubContent"
          >
            The science is settled. We are in an emergency of climate and
            nature. The world is past breaking point; the breakdown has begun...
          </Typography>
          <Grid mt={6}>
            <AccordianComponent />
          </Grid>
          <Grid mt={3}>
            <CustomButton title={"View our D! Intro Video"} />
          </Grid>
        </Item>
      </Grid>
    </Grid>
  );
};

export default BreakDown;
