import { Grid, Typography, styled } from "@mui/material";
import "./ActsEmergeny.css";
import EmergencyActs from "../../components/EmergenctAct/EmergenctAct";
import DeclareEmergencyForm from "../../components/DeclareEmergencyForm/DeclareEmergencyForm";

const ActsEmergeny = ({ sectionTwo }) => {
  const Item = styled("div")(({ theme }) => ({}));
  return (
    <Grid container spacing={2} className="HeaderRoot">
      <Grid size={{ xs: 12, md: 5 }}>
        <Item className="sticky-title">
          <Typography variant="h4" className="BreakDownHeading">
            {!sectionTwo ? "8 Acts of Emergency" : "Declare Emergency Now"}
          </Typography>
        </Item>
      </Grid>
      <Grid size={{ xs: 12, md: 7 }}>
        <Item className=" scrollable-content">
          <Typography variant="h5" className="dontSubHeading">
            {!sectionTwo
              ? "What does it take to Declare? It’s accepting we are in an emergency of climate and nature, and a commitment to do something about it. Here are eight places to start:"
              : "Design Declares is open to individuals and institutions working in industrial, digital, graphic, communication and service design. To declare here, you must be a company with an office in the UK employing at least one full-time designer. We also welcome declarations from practising freelance designers who are registered as self-employed in the UK, and global supporters from other countries. All declarations will be named and published on this site."}
          </Typography>
          {!sectionTwo && <EmergencyActs />}
          {sectionTwo && (
            <Grid mt={4}>
              <DeclareEmergencyForm />
            </Grid>
          )}
        </Item>
      </Grid>
    </Grid>
  );
};

export default ActsEmergeny;
