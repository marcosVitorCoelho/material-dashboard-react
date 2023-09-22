/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import TimelineItem from "examples/Timeline/TimelineItem";

function MedicalSpecialtiesRequested() {
  return (
    <Card sx={{ height: "100%" }}>
      <MDBox pt={3} px={3}>
        <MDTypography variant="h6" fontWeight="medium">
          Most Medical Specialties Requested
        </MDTypography>
      </MDBox>
      <MDBox p={2}>
        <TimelineItem color="success" icon="medication" title="Cardiologist" />
        <TimelineItem color="error" icon="medication" title="Plastic Surgeon" />
        <TimelineItem color="info" icon="medication" title="Brain Surgeon" lastItem />
      </MDBox>
    </Card>
  );
}

export default MedicalSpecialtiesRequested;
