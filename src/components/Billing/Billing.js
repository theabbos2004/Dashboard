import React, { useState } from "react";
import styles from "./index.module.scss";

import * as icon from "../../assets/img/icon";
import Box from "../shared/Box/Box";
import Button from "../shared/Button/Button";
export default function Billing() {
  let [state, setState] = useState({
    invoice: [
      { id: 1, date: "March, 01, 2020", type: "#MS-415646", price: "$180" },
      { id: 2, date: "February, 10, 2021", type: "#FV-344315", price: "$250" },
      { id: 3, date: "April, 05, 2020", type: "#RF-6564713", price: "$230" },
      { id: 4, date: "June, 25, 2019", type: "#QW-134211", price: "$430" },
      { id: 5, date: "March, 01, 2019", type: "#QS-234423", price: "$80" },
    ],
    Billing: [
      {
        id: 1,
        Name: "Oliver Liam",
        company: "Viking Burrito",
        Email: "oliver@burrito.com",
        VATNumber: "FRB1235476",
      },
      {
        id: 2,
        Name: "Oliver Liam",
        company: "Viking Burrito",
        Email: "oliver@burrito.com",
        VATNumber: "FRB1235476",
      },
      {
        id: 3,
        Name: "Oliver Liam",
        company: "Viking Burrito",
        Email: "oliver@burrito.com",
        VATNumber: "FRB1235476",
      },
    ],
    YourTransactions: [
      {
        id: 1,
        date: "27 March 2020, at 12:30 PM",
        title: "Netflix",
        price: "-$2500",
        status: false,
      },
      {
        id: 2,
        date: "27 March 2020, at 12:30 PM",
        title: "Apple",
        price: "+$2500",
        status: true,
      },
      {
        id: 3,
        date: "26 March 2020, at 13:45 PM",
        title: "Stripe",
        price: "+$800",
        status: true,
      },
      {
        id: 4,
        date: "26 March 2020, at 12:30 PM",
        title: "HubSpot",
        price: "+$1700",
        status: true,
      },
      {
        id: 5,
        date: "26 March 2020, at 05:00 AM",
        title: "Webflow",
        price: "Pending",
        status: "undefined",
      },
      {
        id: 6,
        date: "25 March 2020, at 16:30 PM",
        title: "Microsoft",
        price: "-$987",
        status: false,
      },
    ],
  });
  return (
    <div className={styles.Billing}>
      <div className={styles.card_section}>
        <div
          style={{
            width: "65%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", gap: "1rem", width: "100%" }}>
            <Box
              from={{ transform: "translateY(2rem)", opacity: "0" }}
              to={{ transform: "translateY(0rem)", opacity: "1" }}
              sx={{
                background: `url(${require("../../assets/img/card-bg.png")})`,
                backgroundSize: "cover",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p>Vision UI</p>
                <icon.MasterCardGrayIcon
                  width="25"
                  height="25"
                  color="var(--color-brand--4)"
                />
              </div>
              <div>
                <div style={{ fontSize: "1.7rem", fontWeight: "600" }}>
                  7812 2139 0823 XXXX
                </div>
                <div style={{ display: "flex", marginTop: "1rem" }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginRight: "2rem",
                    }}
                  >
                    <p>VALID THRU</p>
                    <p>05/24</p>
                  </div>
                  <div>
                    <p>CVV</p>
                    <p>09X</p>
                  </div>
                </div>
              </div>
            </Box>
            <Box
              from={{ transform: "translateY(2rem)", opacity: "0" }}
              to={{ transform: "translateY(0rem)", opacity: "1" }}
            >
              <Box
                sx={{
                  backgroundImage:
                    "linear-gradient(-45deg,var(--active-bg-1),var(--color-black))",
                }}
              >
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>Credit Balance</div>
                  <icon.ThreeDotesIcon />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div style={{ fontSize: "2rem", fontWeight: "600" }}>
                    $25,215
                  </div>
                  <icon.CashIcon
                    color="var(--color-white)"
                    width="40"
                    height="30"
                  />
                </div>
              </Box>
              <div style={{ margin: "1rem 0 0.5rem 0" }}>NEWEST</div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <div
                    style={{
                      width: "3rem",
                      height: "3rem",
                      background: "var(--active-bg-1)",
                      borderRadius: "30rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <icon.BuildIcon />
                  </div>
                  <div>
                    <p>Bill & Taxes</p>
                    <p style={{ color: "var(--color-brand--4)" }}>
                      Today, 16:36
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  -$154.50
                </div>
              </div>
            </Box>
          </div>
          <Box
            from={{ transform: "translateY(2rem)", opacity: "0" }}
            to={{ transform: "translateY(0rem)", opacity: "1" }}
            sx={{ marginTop: "1rem" }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{ fontSize: "1.5rem" }}>Payment Method</div>
              <Button
                sx={{
                  border: "none",
                  background: "var(--color-brand--3)",
                  fontSize: "1rem",
                }}
              >
                ADD A NEW CARD
              </Button>
            </div>
            <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
              <Box
                sx={{
                  justifyContent: "space-between",
                  flexDirection: "row",
                  backgroundImage:
                    "linear-gradient(-45deg,#b5b5b530,#1e1e1e69)",
                }}
              >
                <div style={{ display: "flex", gap: "1rem" }}>
                  <icon.MasterCardIcon />
                  <div style={{ fontWeight: "600", fontSize: "1.2rem" }}>
                    7812 2139 0823 XXXX
                  </div>
                </div>
                <icon.EditIcon />
              </Box>
              <Box
                sx={{
                  justifyContent: "space-between",
                  flexDirection: "row",
                  backgroundImage:
                    "linear-gradient(-45deg,#b5b5b530,#1e1e1e69)",
                }}
              >
                <div style={{ display: "flex", gap: "1rem" }}>
                  <icon.VisaIcon color="var(--color-white)" />
                  <div style={{ fontWeight: "600", fontSize: "1.2rem" }}>
                    7812 2139 0823 XXXX
                  </div>
                </div>
                <icon.EditIcon />
              </Box>
            </div>
          </Box>
        </div>
        <Box
          from={{ transform: "translateY(2rem)", opacity: "0" }}
          to={{ transform: "translateY(0rem)", opacity: "1" }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ fontSize: "1.5rem" }}>Invoices</div>
            <Button
              sx={{
                border: "none",
                background: "var(--color-brand--3)",
                fontSize: "1rem",
              }}
            >
              VIEW ALL
            </Button>
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
            {state?.invoice?.map((item, index) => (
              <li
                key={index}
                style={{
                  display: "flex",
                  gap: "1rem",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ color: "var(--color-white)" }}>{item.date}</div>
                  <div style={{ color: "var(--color-brand--4)" }}>
                    {item.type}
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "0.5rem",
                    alignItems: "center",
                  }}
                >
                  <p>{item.price}</p>
                  <icon.SignInIcon
                    width={window.innerWidth > 576 ? "16" : "10"}
                  />
                  <p>PDF</p>
                </div>
              </li>
            ))}
          </ul>
        </Box>
      </div>
      <div className={styles.Billing_section}>
        <Box
          from={{ transform: "translateY(2rem)", opacity: "0" }}
          to={{ transform: "translateY(0rem)", opacity: "1" }}
        >
          <p>Your Transactions</p>
          {state?.Billing?.map((item, index) => (
            <Box
              key={index}
              sx={{ justifyContent: "space-between", margin: "1rem 0" }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p style={{ fontSize: "1.3rem" }}>{item.Name}</p>
                <div
                  style={{ display: "flex", gap: "1rem", alignItems: "center" }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "0.2rem",
                      alignItems: "center",
                    }}
                  >
                    <icon.TrashIcon
                      width={window.innerWidth > 576 ? "16" : "7"}
                    />
                    DELETE
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "0.2rem",
                      alignItems: "center",
                    }}
                  >
                    <icon.EditIcon
                      width={window.innerWidth > 576 ? "16" : "10"}
                    />
                    EDITE
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div>Company Name {item.company}</div>
                <div>Email {item.Email}</div>
                <div>VAT Number {item.VATNumber}</div>
              </div>
            </Box>
          ))}
        </Box>
        <Box
          from={{ transform: "translateY(2rem)", opacity: "0" }}
          to={{ transform: "translateY(0rem)", opacity: "1" }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ fontSize: "1.5rem" }}>Invoices</div>
            <p>23 - 30 March 2020</p>
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
            {state?.YourTransactions?.map((item, index) => (
              <li
                key={index}
                style={{
                  display: "flex",
                  margin: "1rem 0",
                  gap: "1rem",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "1rem" }}
                >
                  {!item.status ? (
                    <icon.FallVectorIcon
                      width={window.innerWidth > 576 ? "30" : "15"}
                    />
                  ) : item.status == "undefined" ? (
                    <icon.ErrorVectorIcon
                      width={window.innerWidth > 576 ? "30" : "15"}
                    />
                  ) : (
                    <icon.UpVectorIcon
                      width={window.innerWidth > 576 ? "30" : "15"}
                    />
                  )}
                  <div>
                    <div style={{ color: "var(--color-white)" }}>
                      {item.title}
                    </div>
                    <div style={{ color: "var(--color-brand--4)" }}>
                      {item.date}
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "0.5rem",
                    alignItems: "center",
                  }}
                >
                  <p>{item.price}</p>
                </div>
              </li>
            ))}
          </ul>
        </Box>
      </div>
    </div>
  );
}
