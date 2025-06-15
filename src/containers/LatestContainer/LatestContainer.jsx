import { Grid, Typography, styled } from "@mui/material";
import "./LatestContainer.css";
import CustomButton from "../../components/ButtonComponet/CustomButton";

const LatestContainer = () => {
  const Item = styled("div")(({ theme }) => ({}));
  return (
    <Grid container spacing={2} className="HeaderRoot">
      <Grid size={{ xs: 12, md: 5 }}>
        <Item className="sticky-title">
          <Typography variant="h4" className="BreakDownHeading">
            Latest
          </Typography>
        </Item>
      </Grid>
      <Grid size={{ xs: 12, md: 7 }}>
        <Item className=" scrollable-content">
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Item>
                <Grid display={"flex"}>
                  <p className="chipText">Events</p>
                  <p className="chipText">D! UK</p>
                  <p className="plainText">24.04.2025, 15:30</p>
                </Grid>
                <Typography variant="h4">
                  SD4P Collective: How can Service Design drive meaningful
                  sustainability impact
                </Typography>
              </Item>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }} className="secondGrid">
              <Item>
                <Typography variant="h5">
                  Recap: SD4P Collective working session – 28th March 2025
                </Typography>
                <Typography variant="h6" mt={2} className="textWithUnder">
                  Read story
                </Typography>
              </Item>
            </Grid>
          </Grid>
          <Grid container spacing={2} mt={4}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Item>
                <Grid display={"flex"}>
                  <p className="chipText">Events</p>
                  <p className="chipText">D! UK</p>
                  <p className="plainText">06.12.2024, 14:30</p>
                </Grid>
                <Typography variant="h4">
                  Designing Tomorrow: Speculative Thinking Shapes Our Present
                </Typography>
              </Item>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }} className="secondGrid">
              <Item>
                <Typography variant="h5">
                  Design Declares' November Event Challenges Perspectives on
                  Sustainability and Innovation
                </Typography>
                <Typography variant="h6" mt={2} className="textWithUnder">
                  Read story
                </Typography>
              </Item>
            </Grid>
          </Grid>
          <Grid mt={4}>
            <CustomButton title={"See all the latest"} />
          </Grid>
        </Item>
      </Grid>
    </Grid>
  );
};

export default LatestContainer;
