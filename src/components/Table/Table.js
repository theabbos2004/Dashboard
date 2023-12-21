import React, { useState } from "react";
import styles from "./index.module.scss";
import * as icon from "../../assets/img/icon";
import Box from "../shared/Box/Box";
import Button from "../shared/Button/Button";

export default function Table() {
  let [state, setState] = useState({
    Authors: {
      id: 1,
      title: "Authors Table",
      thead: ["AUTHOR", "FUNCTION", "STATUS", "EMPLOYED", ""],
      tbody: [
        {
          id: 1,
          img: require("../../assets/img/profile/Alexa Liras.png"),
          fullName: "Esthera Jackson",
          email: "esthera@simmmple.com",
          job: {
            title: "Organization",
            type: "Manager",
          },
          online: true,
          employed: "14/06/21",
        },
        {
          id: 2,
          img: require("../../assets/img/profile/Esthera Jackson.png"),
          fullName: "Alexa Liras",
          email: "alexa@simmmple.com",
          job: {
            title: "Developer",
            type: "Programmer",
          },
          online: false,
          employed: "14/06/21",
        },
        {
          id: 3,
          img: require("../../assets/img/profile/Mark Wilson.png"),
          fullName: "Mark Wilson",
          email: "mark@simmmple.com",
          job: {
            title: "UI/UX Design",
            type: "Designer",
          },
          online: "Ofline",
          employed: "14/06/21",
        },
        {
          id: 4,
          img: require("../../assets/img/profile/Laurent Michael.png"),
          fullName: "Laurent Michael",
          email: "laurent@simmmple.com",
          job: {
            title: "Projects",
            type: "Executive",
          },
          online: true,
          employed: "14/06/21",
        },
        {
          id: 5,
          img: require("../../assets/img/profile/Freduardo Hill.png"),
          fullName: "Freduardo Hill",
          email: "freduardo@simmmple.com",
          job: {
            title: "Organization",
            type: "Manager",
          },
          online: false,
          employed: "14/06/21",
        },
        {
          id: 6,
          img: require("../../assets/img/profile/Daniel Thomas.png"),
          fullName: "Daniel Thomas",
          email: "daniel@simmmple.com",
          job: {
            title: "Developer",
            type: "Programmer",
          },
          online: false,
          employed: "14/06/21",
        },
      ],
    },
    Project: {
      id: 1,
      title: "Project Table",
      thead: ["COMPANIES", "BUDGET", "STATUS", "COMPLETION", ""],
      tbody: [
        {
          id: 1,
          icon: <icon.XdIcon />,
          title: "Chakra Soft UI Version",
          budget: "$14,000",
          status: "Working",
          completion: "60",
        },
        {
          id: 2,
          icon: <icon.AddIcon />,
          title: "Add Progress Track",
          budget: "$3,000",
          status: "Canceled",
          completion: "10",
        },
        {
          id: 3,
          icon: <icon.FixIcon />,
          title: "Fix Platform Errors",
          budget: "Not Set",
          status: "Done",
          completion: "100",
        },
        {
          id: 4,
          icon: <icon.SpofityIcon />,
          title: "Launch our Mobile App",
          budget: "$32,000",
          status: "Done",
          completion: "100",
        },
        {
          id: 5,
          icon: <icon.PriceingIcon />,
          title: "Add the New Pricing Page",
          budget: "$400",
          status: "Working",
          completion: "25",
        },
      ],
    },
  });
  return (
    <div className={styles.Table}>
      {/* Authors_section */}
      <Box
        from={{ transform: "translateY(2rem)", opacity: "0" }}
        to={{ transform: "translateY(0rem)", opacity: "1" }}
        className={styles.Authors}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ fontSize: "1.5rem" }}>{state?.Authors?.title}</div>
        </div>

        <table className={styles.table}>
          <thead>
            <tr>
              {state?.Authors?.thead?.map((item, index) => (
                <th key={index}>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {state?.Authors?.tbody?.map((item, index) => (
              <tr>
                <td style={{ display: "flex", gap: "1rem" }}>
                  <img
                    src={item.img}
                    style={{
                      width: "3rem",
                      height: "3rem",
                      borderRadius: "1rem",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-around",
                    }}
                  >
                    <p>{item.fullName}</p>
                    <p style={{ color: "var(--color-brand--4)" }}>
                      {item.email}
                    </p>
                  </div>
                </td>
                <td>
                  <div
                    style={{
                      display: "flex",
                      gap: "0.2rem",
                      flexDirection: "column",
                    }}
                  >
                    <p>{item.job.type}</p>
                    <p>{item.job.title}</p>
                  </div>
                </td>
                <td>
                  <Button
                    sx={
                      item.online
                        ? {
                            border: "none",
                            backgroundColor: "var(--color-brand--5)",
                          }
                        : {
                            border: "0.1rem solid var(--color-white)",
                            backgroundColor: "transparent",
                          }
                    }
                  >
                    {item.online ? "Online" : "Ofline"}
                  </Button>
                </td>
                <td>14/06/21</td>
                <td>
                  <Button
                    sx={{
                      border: "none",
                      backgroundColor: "var(--color-brand--4)",
                    }}
                  >
                    Edit
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Box>
      <Box
        from={{ transform: "translateY(2rem)", opacity: "0" }}
        to={{ transform: "translateY(0rem)", opacity: "1" }}
        className={styles.Project}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ fontSize: "1.5rem" }}>Projects</div>
          <div style={{ transform: "rotate(90deg)", width: "0rem" }}>
            <icon.ThreeDotesIcon />
          </div>
        </div>
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <icon.DoneIcon />
          <div>30 done this month</div>
        </div>
        <table className={styles.table}>
          <thead>
            <tr>
              {state?.Project?.thead?.map((item, index) => (
                <th key={index}>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {state?.Project?.tbody?.map((item, index) => (
              <tr>
                <td style={{ display: "flex", gap: "1rem" }}>
                  {item.icon}
                  {item.title}
                </td>
                <td>{item.budget}</td>
                <td>{item.status}</td>
                <td>
                  <div>{item.completion}%</div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                    <div
                      className="bg-blue-600 h-1.5 rounded-full"
                      style={{ width: `${item.completion}%` }}
                    ></div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Box>
    </div>
  );
}
