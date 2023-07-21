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
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";

function Billing() {
  const { columns, rows } = authorsTableData();
  const { columns: pColumns, rows: pRows } = projectsTableData();

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Data Pengepul
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>

                <DataTable
                  table={{
                    columns: [
                      { Header: "name", accessor: "name", width: "25%" },
                      { Header: "position", accessor: "position", width: "30%" },
                      { Header: "office", accessor: "office" },
                      { Header: "age", accessor: "age", width: "12%" },
                    ],
                    rows: [
                      {
                        name: "Hanny Baniard",
                        position: "Data Coordiator",
                        office: "Baorixile",
                        age: 42,
                        startDate: "4/11/2021",
                        salary: "$474,978",
                      },
                      {
                        name: "Lara Puleque",
                        position: "Payment Adjustment Coordinator",
                        office: "Cijangkar",
                        age: 47,
                        startDate: "8/2/2021",
                        salary: "$387,287",
                      },
                      {
                        name: "Torie Repper",
                        position: "Administrative Officer",
                        office: "Montpellier",
                        age: 25,
                        startDate: "4/21/2021",
                        salary: "$94,780",
                      },
                      {
                        name: "Nat Gair",
                        position: "Help Desk Technician",
                        office: "Imider",
                        age: 57,
                        startDate: "12/6/2020",
                        salary: "$179,177",
                      },
                      {
                        name: "Maggi Slowan",
                        position: "Help Desk Technician",
                        office: "Jaunpils",
                        age: 56,
                        startDate: "11/7/2020",
                        salary: "$440,874",
                      },
                      {
                        name: "Marleah Snipe",
                        position: "Account Representative II",
                        office: "Orekhovo-Borisovo Severnoye",
                        age: 31,
                        startDate: "7/18/2021",
                        salary: "$404,983",
                      },
                      {
                        name: "Georgia Danbury",
                        position: "Professor",
                        office: "Gniezno",
                        age: 50,
                        startDate: "10/1/2020",
                        salary: "$346,576",
                      },
                      {
                        name: "Bev Castan",
                        position: "Design Engineer",
                        office: "Acharnés",
                        age: 19,
                        startDate: "1/14/2021",
                        salary: "$445,171",
                      },
                      {
                        name: "Reggi Westney",
                        position: "Financial Advisor",
                        office: "Piuí",
                        age: 56,
                        startDate: "3/21/2021",
                        salary: "$441,569",
                      },
                      {
                        name: "Bartholomeus Prosh",
                        position: "Project Manager",
                        office: "Kelīshād va Sūdarjān",
                        age: 28,
                        startDate: "5/27/2021",
                        salary: "$336,238",
                      },
                      {
                        name: "Sheffy Feehely",
                        position: "Software Consultant",
                        office: "Ndibène Dahra",
                        age: 27,
                        startDate: "3/23/2021",
                        salary: "$473,391",
                      },
                      {
                        name: "Euphemia Chastelain",
                        position: "Engineer IV",
                        office: "Little Baguio",
                        age: 63,
                        startDate: "5/1/2021",
                        salary: "$339,489",
                      },
                    ]
                  }}
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Billing;
