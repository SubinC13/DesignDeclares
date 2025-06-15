import React, { useState } from "react";
import {
  Box,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import "./DeclareEmergencyForm.css";
import {
  formCheckBox1,
  formCheckBox2,
  formFields,
} from "../../assets/mockData/mockData";
import CustomCheckbox from "../CustomChekBox/CustomChekBox";
import CustomButton from "../ButtonComponet/CustomButton";

const DeclareEmergencyForm = () => {
  const [selectedType, setSelectedType] = useState("");
  return (
    <Box className="declare-emergency-root">
      <Typography variant="h2" className="form-title">
        I am Declaring Emergency
      </Typography>

      <Grid container spacing={2} className="checkbox-group" mt={4}>
        {formCheckBox1.map((item) => (
          <Grid item xs={12} key={item.id}>
            <CustomCheckbox
              value={item.label}
              selectedValue={selectedType}
              onChange={setSelectedType}
              label={item.label}
            />
          </Grid>
        ))}
      </Grid>

      <form className="form-body">
        {formFields.map((field, index) => (
          <TextField
            className="textFieldFOrm"
            key={index}
            name={field.name}
            label={field.label}
            placeholder={field.placeholder}
            required={field.required}
            fullWidth
            margin="normal"
            multiline={field.multiline || false}
            rows={field.rows || 1}
            helperText={field.helperText || ""}
            variant="outlined"
            InputLabelProps={
              field.label
                ? {
                    shrink: false,
                    style: { color: "#adadad", fontSize: "20px" },
                  }
                : { shrink: false }
            }
          />
        ))}
        <Grid container className="checkbox-group" mt={4}>
          {formCheckBox2.map((item) => (
            <Grid item xs={12} key={item.id}>
              <CustomCheckbox
                value={item.label}
                selectedValue={selectedType}
                onChange={setSelectedType}
                label={item.label}
                terms={true}
              />
            </Grid>
          ))}
        </Grid>

        <a href="#" className="privacy-link">
          View our Privacy Policy
        </a>

        <CustomButton title={"Declare Emergency Now"} />
      </form>
    </Box>
  );
};

export default DeclareEmergencyForm;
