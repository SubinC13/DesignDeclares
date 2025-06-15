import { Typography, useMediaQuery } from "@mui/material";
import { emergencyActsData } from "../../assets/mockData/mockData";
import "./EmergenctAct.css";
import React from "react";

const EmergencyActs = () => {
  const isMobile = useMediaQuery("(max-width:599px)");

  return (
    <div className="EmergencyActsTableWrapper">
      <table className="EmergencyActsTable">
        <tbody>
          {emergencyActsData?.map((item) => (
            <React.Fragment key={item?.id}>
              <tr className="EmergencyActsRow">
                <td className="indexNumber">
                  <Typography variant={isMobile ? "h6" : "h3"}>
                    {item?.id}
                  </Typography>
                </td>
                <td className="titleText">
                  <Typography variant={isMobile ? "h6" : "h3"}>
                    {item?.title}
                  </Typography>
                </td>
              </tr>
              <tr>
                <td colSpan={2} className="descriptionText">
                  <Typography variant={isMobile ? "body1" : "h6"}>
                    {item?.description}
                  </Typography>
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmergencyActs;
