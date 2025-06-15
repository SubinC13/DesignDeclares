import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Grid,
  Typography,
  styled,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { accordionData } from "../../assets/mockData/mockData";
import "./AccordianComponent.css";

const Item = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
  color: "#ccc",
}));

const AccordianComponent = () => {
  return (
    <>
      {Object.entries(accordionData).map(([key, { title, content }]) => (
        <>
          <Divider className="accordianDivider" />
          <Accordion
            key={key}
            sx={{ backgroundColor: "#121212", color: "#fff" }}
            className="accordianRoot"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
              aria-controls={`panel${key}-content`}
              id={`panel${key}-header`}
            >
              <Typography component="span" fontWeight={600}>
                {title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                {Object.entries(content).map(([idx, text]) => (
                  <Grid size={6} key={idx}>
                    <Item>{text}</Item>
                  </Grid>
                ))}
              </Grid>
            </AccordionDetails>
          </Accordion>
        </>
      ))}
    </>
  );
};

export default AccordianComponent;
