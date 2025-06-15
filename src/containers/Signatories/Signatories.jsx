import { Grid, Typography } from "@mui/material";
import "./Signatories.css";
import { singatoriesData } from "../../assets/mockData/singatories";
import { singatoriesData2 } from "../../assets/mockData/Signatores2";

const Signatories = ({ secondOne, id }) => {
  return (
    <>
      <Grid id={id} className="signatoriesRoot">
        <Typography className="signatoriesHeading">
          {!secondOne ? "#512" : "#661"}
        </Typography>
        <Grid display={"flex"} alignItems={"self-end"} gap={2} mb={3}>
          <Typography className="signatoriesSubHeading">
            {!secondOne ? "Signatories and counting in" : "Global Supporters"}
          </Typography>
          {!secondOne && (
            <Typography className="signatoriesSubHeadingSpan">D! UK</Typography>
          )}
        </Grid>

        <div className="signatory-grid">
          {!secondOne
            ? singatoriesData.map((name, i) => (
                <div className="signatory-item" key={i}>
                  {name?.name}
                </div>
              ))
            : singatoriesData2.map((name, i) => (
                <div
                  className={`signatory-item ${name?.country && "extraBold"} ${
                    i === 0 && "index_0"
                  }`}
                  key={i}
                >
                  {name?.name}
                </div>
              ))}
        </div>
      </Grid>
    </>
  );
};

export default Signatories;
