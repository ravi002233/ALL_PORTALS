import React, { useState, useEffect } from "react";
import {
  Box,
  Page,
  Grid,
  Layout,
  ComponentsProvider,
} from "@looker/components";
export default function Landing() {
  const [finance, setFinance] = useState(false);
  const [sale, setSale] = useState(false);
  useEffect(() => {
    roles.map((value) => {
      if (value.model_set.name.includes("Sales")) {
        setSale(true);
      } else if (value.model_set.name.includes("Finance")) {
        setFinance(true);
      }
    });
  }, []);
  let roles = [
    {
      id: "22",
      name: "Finance",
      model_set: {
        name: "Finance F",
      },
    },
  ];
  //   let roles = [{
  //     "id": "22",
  //     "name": "Sales",
  //     "model_set": {
  //       "id": "2",
  //       "all_access": false,
  //       "name": "Sales p"
  //     }
  //   }];

  const getItems = () => {
    let items = [
      {
        name: "Finance",
        url: "https://ttecbidev.cloud.looker.com/extensions/finance::finance",
        show: finance,
      },
      {
        name: "Sales",
        url: "https://ttecbidev.cloud.looker.com/extensions/telstra_mart::DataIQ_sales/",
        show: sale,
      },
    ];
    return items;
  };

  const menuStyles = {
    color: "white",
    padding: "10px",
    fontFamily: "Arial",
    cursor: "pointer",
    fontSize: "1.05rem",
    backgroundColor: "green",
    textAlign: "center",
    border: "hidden",
    borderRadius: "5px",
    boxShadow:
      "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
  };

  const getPermissions = () => {};

  return (
    <ComponentsProvider>
      <Page>
        <div>
          <img
            width={"100%"}
            src="https://raw.githubusercontent.com/Engage-Data-IQ/Looker-Assets/develop/Analytics1.png"
          />
        </div>
        <Layout>
          <div style={{ padding: "20px" }}>
            <Grid columns={5} justify={"center"}>
              {getItems().map((v, index) => (
                <a
                  style={{
                    textDecoration: "none",
                    display: v.show ? "inline" : "none",
                  }}
                  href={v.url}
                  target="_blank"
                >
                  <Box key={index} style={menuStyles}>
                    {v.name}
                  </Box>
                </a>
              ))}
            </Grid>
          </div>
        </Layout>
        <div>
          <img
            width={"100%"}
            src="https://raw.githubusercontent.com/Engage-Data-IQ/Looker-Assets/develop/Analytics2.png"
          />
        </div>
      </Page>
    </ComponentsProvider>
  );
}
