import React, { useState } from "react";
import styles from "./index.module.scss";

import * as icon from "../../assets/img/icon";
import CircleDiagram from "../shared/CircleDiagram/CircleDiagram";
import LinerChart from "../shared/Liner chart/LinerChart";
import Chart from "../shared/chart/Chart";
import Box from "../shared/Box/Box";
import Button from "../shared/Button/Button";
export default function Dashbord() {
  let [total] = useState([
    {
      id: 1,
      title: "Today’s Money",
      price: "$53,000",
      profit: "+55%",
      icon: "BillingIcon",
    },
    {
      id: 2,
      title: "Today’s Users",
      price: "$2,300",
      profit: "+5%",
      icon: "GlobalIcon",
    },
    {
      id: 3,
      title: "New Clients",
      price: "$+3,052",
      profit: "-14%",
      icon: "SignInIcon",
    },
    {
      id: 4,
      title: "Total Sales",
      price: "$173,000",
      profit: "+8%",
      icon: "KorzinkaIcon",
    },
  ]);
  const getIcon = (el, width = 16, sWidth = 11, height = 16, sHeight = 11) => {
    let Icon = icon[el];
    return (
      <Icon
        width={window.innerWidth > 576 ? width : sWidth}
        height={window.innerWidth > 576 ? height : sHeight}
      />
    );
  };
  return (
    <div className={styles.Dashbord}>
      {/* money */}
      <div className={styles.money_section}>
        {total?.map((item, index) => (
          <Box
            key={index}
            from={{ transform: "translateY(2rem)", opacity: "0" }}
            to={{ transform: "translateY(0rem)", opacity: "1" }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <div style={{ color: "var(--color-brand--4)" }}>
                  {item.title}
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.3rem",
                  }}
                >
                  <p style={{ fontSize: "1.5rem" }}>{item.price}</p>
                  <p style={{ color: "var(--color-brand--5)" }}>
                    {item.profit}
                  </p>
                </div>
              </div>
              <>
                <Button
                  sx={{ border: "none", background: "var(--color-brand--3)" }}
                >
                  {getIcon(item.icon)}
                </Button>
              </>
            </div>
          </Box>
        ))}
      </div>
      {/* Rating */}
      <div className={styles.Rate_section}>
        <Box
          from={{ transform: "translateY(2rem)", opacity: "0" }}
          to={{ transform: "translateY(0rem)", opacity: "1" }}
          sx={{
            backgroundImage: `url(${require("../../assets/img/jellyfish.png")})`,
          }}
        >
          <div
            style={{
              display: "flex",
              height: "100%",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div style={{ color: "var(--color-brand--4)" }}>
                Welcome back,
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}
              >
                <p style={{ fontSize: "1.8rem" }}>Mark Johnson</p>
              </div>
              <div
                style={{ color: "var(--color-brand--4)", fontSize: "1.3rem" }}
              >
                Glad to see you again!Ask me anything.
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.3rem",
                color: "var(--color-brand--4)",
              }}
            >
              <div style={{ fontSize: "1.3rem" }}>Tap to record</div>
              <icon.ForwardIcon color="var(--color-brand--4)" />
            </div>
          </div>
        </Box>
        <Box
          from={{ transform: "translateY(2rem)", opacity: "0" }}
          to={{ transform: "translateY(0rem)", opacity: "1" }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <>
              <div
                style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}
              >
                <p style={{ fontSize: "1.8rem" }}>Satisfaction Rate</p>
              </div>
              <div style={{ color: "var(--color-brand--4)" }}>
                From all projects
              </div>
            </>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0rem",
                color: "var(--color-brand--4)",
              }}
            >
              <CircleDiagram value="95" sx={{ transform: " translateY(3rem)" }}>
                <Box
                  sx={{
                    borderRadius: "10rem",
                    background: "var(--color-brand--3)",
                  }}
                >
                  <icon.SmileIcon
                    width={window.innerWidth > 576 ? "25" : "15"}
                    height={window.innerWidth > 576 ? "25" : "15"}
                  />
                </Box>
              </CircleDiagram>
              <Box
                sx={{
                  width: "100%",
                  marginTop: "1rem",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  color: "var(--color-brand--4)",
                }}
              >
                <p>0%</p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <p
                    style={{
                      fontSize: "2rem",
                      color: "var(--color-white)",
                      margin: "0",
                    }}
                  >
                    95%
                  </p>
                  <p>Based on likes</p>
                </div>
                <p>100%</p>
              </Box>
            </div>
          </div>
        </Box>
        <Box
          from={{ transform: "translateY(2rem)", opacity: "0" }}
          to={{ transform: "translateY(0rem)", opacity: "1" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ fontSize: "1.8rem" }}>Referral Tracking</div>
            <Button
              sx={{
                border: "none",
                background: "var(--active-bg-1)",
                padding: "0.3rem 0.5rem",
              }}
            >
              <icon.ThreeDotesIcon />
            </Button>
          </div>
          <div style={{ display: "flex", height: "100%" }}>
            <div
              style={{
                width: "45%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
              }}
            >
              <Box sx={{ margin: "1rem 0" }}>
                <div>Invited</div>
                <div style={{ fontSize: "1.5rem" }}>145 people</div>
              </Box>
              <Box>
                <div>Bonus</div>
                <div style={{ fontSize: "1.5rem" }}>1,465</div>
              </Box>
            </div>
            <div
              style={{
                width: "55%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CircleDiagram value="93" strokeColor="var(--color-brand--5)">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    color: "var(--color-brand--4)",
                    fontSize: "1.1rem",
                  }}
                >
                  <p>Safety</p>
                  <p
                    style={{ fontSize: "2.5rem", color: "var(--color-white)" }}
                  >
                    9.3
                  </p>
                  <p>Total Score</p>
                </div>
              </CircleDiagram>
            </div>
          </div>
        </Box>
      </div>
      {/* Chart */}
      <div className={styles.Chart_section}>
        <Box
          from={{ transform: "translateY(2rem)", opacity: "0" }}
          to={{ transform: "translateY(0rem)", opacity: "1" }}
          sx={{ width: "50%", justifyContent: "center" }}
        >
          <LinerChart />
        </Box>
        <Box
          from={{ transform: "translateY(2rem)", opacity: "0" }}
          to={{ transform: "translateY(0rem)", opacity: "1" }}
          sx={{ width: "50%" }}
        >
          <div>
            <Chart />
            <div
              style={{
                width: "100%",
                display: "flex",
                flexWrap: "wrap",
                gap: "3rem",
                padding: "1rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  flex: "auto",
                  gap: "0.5rem",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "1rem" }}
                >
                  <Button
                    sx={{
                      border: "none",
                      background: "var( --color-brand--3)",
                    }}
                  >
                    <icon.BillingIcon
                      width={window.innerWidth > 576 ? "16" : "12"}
                    />
                  </Button>
                  <div style={{ fontSize: "1.5rem" }}>Users</div>
                </div>
                <div style={{ fontSize: "2rem" }}>32,984</div>
                <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                  <div
                    className="bg-blue-600 h-1.5 rounded-full"
                    style={{ width: "60%" }}
                  ></div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  flex: "auto",
                  gap: "0.5rem",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "1rem" }}
                >
                  <Button
                    sx={{
                      border: "none",
                      background: "var( --color-brand--3)",
                    }}
                  >
                    <icon.SignUpIcon width={window.innerWidth > 576 ? "16" : "12"} />
                  </Button>
                  <div style={{ fontSize: "1.5rem" }}>Clicks</div>
                </div>
                <div style={{ fontSize: "2rem" }}>2,42m</div>
                <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                  <div
                    className="bg-blue-600 h-1.5 rounded-full"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  flex: "auto",
                  gap: "0.5rem",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "1rem" }}
                >
                  <Button
                    sx={{
                      border: "none",
                      background: "var( --color-brand--3)",
                    }}
                  >
                    <icon.KorzinkaIcon
                      width={window.innerWidth > 576 ? "16" : "12"}
                    />
                  </Button>
                  <div style={{ fontSize: "1.5rem" }}>Sales</div>
                </div>
                <div style={{ fontSize: "2rem" }}>2,400$</div>
                <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                  <div
                    className="bg-blue-600 h-1.5 rounded-full"
                    style={{ width: "30%" }}
                  ></div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  flex: "auto",
                  gap: "0.5rem",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "1rem" }}
                >
                  <Button
                    sx={{
                      border: "none",
                      background: "var( --color-brand--3)",
                    }}
                  >
                    <icon.SettingIcon
                      width={window.innerWidth > 576 ? "16" : "12"}
                    />
                  </Button>
                  <div style={{ fontSize: "1.5rem" }}>Items</div>
                </div>
                <div style={{ fontSize: "2rem" }}>320</div>
                <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                  <div
                    className="bg-blue-600 h-1.5 rounded-full"
                    style={{ width: "50%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </div>
      {/* Projects */}
      <div className={styles.Projects_section}>
        <Box
          from={{ transform: "translateY(2rem)", opacity: "0" }}
          to={{ transform: "translateY(0rem)", opacity: "1" }}
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
                <th>COMPANIES</th>
                <th>MEMBERS</th>
                <th>BUDGET</th>
                <th>COMPLETION</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ display: "flex", gap: "1rem" }}>
                  <icon.XdIcon />
                  Chakra Soft UI Version
                </td>
                <td className={styles.profile_image}>
                  <div style={{ display: "flex", gap: "0.2rem" }}>
                    <img
                      src={require("../../assets/img/profile/Alexa Liras.png")}
                    />
                    <img
                      src={require("../../assets/img/profile/Daniel Thomas.png")}
                    />
                    <img
                      src={require("../../assets/img/profile/Esthera Jackson.png")}
                    />
                    <img
                      src={require("../../assets/img/profile/Freduardo Hill.png")}
                    />
                    <img
                      src={require("../../assets/img/profile/Laurent Michael.png")}
                    />
                  </div>
                </td>
                <td>$14,000</td>
                <td>
                  <div>60%</div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                    <div
                      className="bg-blue-600 h-1.5 rounded-full"
                      style={{ width: "50%" }}
                    ></div>
                  </div>
                </td>
              </tr>
              <tr>
                <td style={{ display: "flex", gap: "1rem" }}>
                  <icon.AddIcon />
                  Add Progress Track
                </td>
                <td className={styles.profile_image}>
                  <div style={{ display: "flex", gap: "0.2rem" }}>
                    <img
                      src={require("../../assets/img/profile/Alexa Liras.png")}
                    />
                    <img
                      src={require("../../assets/img/profile/Daniel Thomas.png")}
                    />
                  </div>
                </td>
                <td>$3,000</td>
                <td>
                  <div>10%</div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                    <div
                      className="bg-blue-600 h-1.5 rounded-full"
                      style={{ width: "10%" }}
                    ></div>
                  </div>
                </td>
              </tr>
              <tr>
                <td style={{ display: "flex", gap: "1rem" }}>
                  <icon.FixIcon />
                  Fix Platform Errors
                </td>
                <td className={styles.profile_image}>
                  <div style={{ display: "flex", gap: "0.2rem" }}>
                    <img
                      src={require("../../assets/img/profile/Alexa Liras.png")}
                    />
                    <img
                      src={require("../../assets/img/profile/Daniel Thomas.png")}
                    />
                    <img
                      src={require("../../assets/img/profile/Esthera Jackson.png")}
                    />
                  </div>
                </td>
                <td>Not set</td>
                <td>
                  <div>100%</div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                    <div
                      className="bg-blue-600 h-1.5 rounded-full"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                </td>
              </tr>
              <tr>
                <td style={{ display: "flex", gap: "1rem" }}>
                  <icon.SpofityIcon />
                  Launch our Mobile App
                </td>
                <td className={styles.profile_image}>
                  <div style={{ display: "flex", gap: "0.2rem" }}>
                    <img
                      src={require("../../assets/img/profile/Alexa Liras.png")}
                    />
                    <img
                      src={require("../../assets/img/profile/Daniel Thomas.png")}
                    />
                    <img
                      src={require("../../assets/img/profile/Esthera Jackson.png")}
                    />
                    <img
                      src={require("../../assets/img/profile/Freduardo Hill.png")}
                    />
                  </div>
                </td>
                <td>$32,000</td>
                <td>
                  <div>100%</div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                    <div
                      className="bg-blue-600 h-1.5 rounded-full"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                </td>
              </tr>
              <tr>
                <td style={{ display: "flex", gap: "1rem" }}>
                  <icon.PriceingIcon />
                  Add the New Pricing Page
                </td>
                <td className={styles.profile_image}>
                  <div style={{ display: "flex", gap: "0.2rem" }}>
                    <img
                      src={require("../../assets/img/profile/Alexa Liras.png")}
                    />
                    <img
                      src={require("../../assets/img/profile/Daniel Thomas.png")}
                    />
                    <img
                      src={require("../../assets/img/profile/Esthera Jackson.png")}
                    />
                    <img
                      src={require("../../assets/img/profile/Freduardo Hill.png")}
                    />
                    <img
                      src={require("../../assets/img/profile/Laurent Michael.png")}
                    />
                  </div>
                </td>
                <td>$400</td>
                <td>
                  <div>25%</div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                    <div
                      className="bg-blue-600 h-1.5 rounded-full"
                      style={{ width: "25%" }}
                    ></div>
                  </div>
                </td>
              </tr>
              <tr>
                <td style={{ display: "flex", gap: "1rem" }}>
                  <icon.RedesignIcon />
                  Redesign New Online Shop
                </td>
                <td className={styles.profile_image}>
                  <div style={{ display: "flex", gap: "0.2rem" }}>
                    <img
                      src={require("../../assets/img/profile/Alexa Liras.png")}
                    />
                    <img
                      src={require("../../assets/img/profile/Daniel Thomas.png")}
                    />
                  </div>
                </td>
                <td>$7,600</td>
                <td>
                  <div>40%</div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                    <div
                      className="bg-blue-600 h-1.5 rounded-full"
                      style={{ width: "40%" }}
                    ></div>
                  </div>
                </td>
              </tr>
              <tr>
                <td style={{ display: "flex", gap: "1rem" }}>
                  <icon.XdIcon />
                  Chakra Soft UI Version
                </td>
                <td className={styles.profile_image}>
                  <div style={{ display: "flex", gap: "0.2rem" }}>
                    <img
                      src={require("../../assets/img/profile/Alexa Liras.png")}
                    />
                    <img
                      src={require("../../assets/img/profile/Daniel Thomas.png")}
                    />
                    <img
                      src={require("../../assets/img/profile/Esthera Jackson.png")}
                    />
                    <img
                      src={require("../../assets/img/profile/Freduardo Hill.png")}
                    />
                    <img
                      src={require("../../assets/img/profile/Laurent Michael.png")}
                    />
                  </div>
                </td>
                <td>$14,000</td>
                <td>
                  <div>60%</div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                    <div
                      className="bg-blue-600 h-1.5 rounded-full"
                      style={{ width: "50%" }}
                    ></div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </Box>
        <Box
          from={{ transform: "translateY(2rem)", opacity: "0" }}
          to={{ transform: "translateY(0rem)", opacity: "1" }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ fontSize: "1.5rem" }}>Projects</div>
          </div>
          <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <icon.DoneIcon />
            <div>30 done this month</div>
          </div>
          <ul
            style={{
              marginTop: "1rem",
              fontSize: "1.2rem",
              height: "90%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
            }}
          >
            <li style={{ display: "flex", gap: "1rem" }}>
              <div>
                <icon.NotificationIcon color="var(--color-brand--3)" />
              </div>
              <div>
                <div style={{ color: "var(--color-white)" }}>
                  $2400, Design changes
                </div>
                <div style={{ color: "var(--color-brand--4)" }}>
                  22 DEC 7:20 PM
                </div>
              </div>
            </li>
            <li style={{ display: "flex", gap: "1rem" }}>
              <div>
                <icon.SignInIcon color="var(--color-brand--3)" />
              </div>
              <div>
                <div style={{ color: "var(--color-white)" }}>
                  New order #4219423
                </div>
                <div style={{ color: "var(--color-brand--4)" }}>
                  21 DEC 11:21 PM
                </div>
              </div>
            </li>
            <li style={{ display: "flex", gap: "1rem" }}>
              <div>
                <icon.KorzinkaIcon color="var(--color-brand--3)" />
              </div>
              <div>
                <div style={{ color: "var(--color-white)" }}>
                  Server Payments for April
                </div>
                <div style={{ color: "var(--color-brand--4)" }}>
                  21 DEC 9:28 PM
                </div>
              </div>
            </li>
            <li style={{ display: "flex", gap: "1rem" }}>
              <div>
                <icon.BillingIcon color="var(--color-brand--3)" />
              </div>
              <div>
                <div style={{ color: "var(--color-white)" }}>
                  New card added for order #3210145
                </div>
                <div style={{ color: "var(--color-brand--4)" }}>
                  20 DEC 3:52 PM
                </div>
              </div>
            </li>
            <li style={{ display: "flex", gap: "1rem" }}>
              <div>
                <icon.GlobalIcon color="var(--color-brand--3)" />
              </div>
              <div>
                <div style={{ color: "var(--color-white)" }}>
                  Unlock packages for Development
                </div>
                <div style={{ color: "var(--color-brand--4)" }}>
                  19 DEC 11:35 PM
                </div>
              </div>
            </li>
            <li style={{ display: "flex", gap: "1rem" }}>
              <div>
                <icon.XdIcon color="var(--color-brand--3)" />
              </div>
              <div>
                <div style={{ color: "var(--color-white)" }}>
                  New order #9851258
                </div>
                <div style={{ color: "var(--color-brand--4)" }}>
                  18 DEC 4:41 PM
                </div>
              </div>
            </li>
          </ul>
        </Box>
      </div>
    </div>
  );
}
