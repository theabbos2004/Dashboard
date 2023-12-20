import React, { useState } from "react";
import styles from "./index.module.scss";
import * as icon from "../../assets/img/icon";
import Box from "../shared/Box/Box";
import Button from "../shared/Button/Button";
import CircleDiagram from "../shared/CircleDiagram/CircleDiagram";
import Toggle from "../shared/Toggle/Toggle";
export default function Profile() {
  let [state, setState] = useState({
    Profile: {
      Fullname: "Mark Johnson",
      description:
        "Hi, I’m Mark Johnson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).",
      Mobile: "(44) 123 1234 123",
      Email: "mark@simmmple.com",
      Location: "United States",
      SocialMedia: [
        { id: "1", Link: "", icon: <icon.FacebookIcon /> },
        { id: "2", Link: "", icon: <icon.TiwiterIcon /> },
        { id: "3", Link: "", icon: <icon.InstagramIcon /> },
      ],
    },
  });
  return (
    <div className={styles.Profile}>
      <Box
        from={{ transform: "translateY(2rem)", opacity: "0" }}
        to={{ transform: "translateY(0rem)", opacity: "1" }}
        sx={{
          flexDirection: "row",
          justifyContent: "space-between",
          margin: "1rem 0",
        }}
      >
        <div style={{ display: "flex", gap: "1rem" }}>
          <div style={{ position: "relative", width: "5rem" }}>
            <img
              src={require("../../assets/img/use-profile-bg.png")}
              style={{
                width: "4.5rem",
                height: "4.5rem",
                borderRadius: "1rem",
              }}
            />
            <div style={{ position: "absolute", bottom: "-0.5rem", right: 0 }}>
              <Box
                from={{ transform: "translateY(2rem)", opacity: "0" }}
                to={{ transform: "translateY(0rem)", opacity: "1" }}
                sx={{ padding: "0.2rem", borderRadius: "0.5rem" }}
              >
                <icon.EditIcon />
              </Box>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div style={{ fontSize: "1.5rem" }}>Mark Johnson</div>
            <div style={{ color: "var(--color-brand--4)" }}>
              mark@simmmple.com
            </div>
          </div>
        </div>
        <div style={{ display: "flex", gap: "1rem" }}>
          <Button sx={{ border: "none", background: "var(--color-brand--3)" }}>
            <div
              style={{
                width: "100%",
                height: "100%",
                flexDirection: "row",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <icon.OverviewIcon />
              <div>OVERVIEW</div>
            </div>
          </Button>
          <Button sx={{ border: "none", background: "var(--color-brand--3)" }}>
            <div
              style={{
                width: "100%",
                height: "100%",
                flexDirection: "row",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <icon.TeamsIcon />
              <p>TEAMS</p>
            </div>
          </Button>
          <Button sx={{ border: "none", background: "var(--color-brand--3)" }}>
            <div
              style={{
                width: "100%",
                height: "100%",
                flexDirection: "row",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <icon.SettingIcon width="12" height="12" />
              <p>PROJECTS</p>
            </div>
          </Button>
        </div>
      </Box>
      {/* Profile_info */}
      <div className={styles.profile_information}>
        <Box
          from={{ transform: "translateY(2rem)", opacity: "0" }}
          to={{ transform: "translateY(0rem)", opacity: "1" }}
          sx={{
            minWidth: "20%",
            justifyContent: "space-between",
            backgroundImage: `url(${require("../../assets/img/welcome-back.png")})`,
          }}
        >
          <div>
            <div style={{ fontSize: "2rem" }}>Welcome back!</div>
            <div style={{ color: "var(--color-brand--4)" }}>
              Nice to see you, Mark Johnson!
            </div>
          </div>
          <div style={{ display: "flex", gap: "1rem" }}>
            <div>Turn on your car</div>
            <icon.ForwardIcon color="white" />
          </div>
        </Box>
        <Box
          from={{ transform: "translateY(2rem)", opacity: "0" }}
          to={{ transform: "translateY(0rem)", opacity: "1" }}
          sx={{ justifyContent: "space-between" }}
        >
          <div>
            <div style={{ fontSize: "1.5rem" }}>Car Informations</div>
            <div style={{ color: "var(--color-brand--4)" }}>
              Hello, Mark Johnson! Your Car is ready.
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: window.innerWidth > 576 ? "nowrap" : "wrap",
              justifyContent: window.innerWidth > 576 ? "" : "center",
              gap: "1rem",
              marginTop: "1rem",
              maxWidth: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <CircleDiagram
                value="68"
                rotate="180deg"
                strokeColor="var(--color-brand--5)"
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <icon.EnergyIcon />
                  <div style={{ fontSize: "2rem", fontWeight: "700" }}>68%</div>
                  <div>Current load</div>
                </div>
              </CircleDiagram>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div style={{ fontSize: "1.1rem" }}>0h 58 min</div>
                <div style={{ color: "var(--color-brand--4)" }}>
                  Time to full charge
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                gap: "1rem",
              }}
            >
              <Box
                sx={{
                  width: "45%",
                  flexDirection: "row",
                  gap: "1rem",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <div style={{ color: "var(--color-brand--4)" }}>
                    Battery Health
                  </div>
                  <div
                    style={{
                      fontSize: "1.8rem",
                      fontWeight: "600",
                      marginTop: "0.5rem",
                    }}
                  >
                    76%
                  </div>
                </div>
                <div
                  style={{
                    padding: "0.6rem",
                    borderRadius: "1rem",
                    backgroundColor: "var(--color-brand--3)",
                  }}
                >
                  <icon.CarIcon
                    width={window.innerWidth > 576 ? "20" : "15"}
                    height={window.innerWidth > 576 ? "20" : "15"}
                  />
                </div>
              </Box>
              <Box
                sx={{
                  width: "45%",
                  flexDirection: "row",
                  gap: "1rem",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <div style={{ color: "var(--color-brand--4)" }}>
                    Efficiency
                  </div>
                  <div
                    style={{
                      fontSize: "1.8rem",
                      fontWeight: "600",
                      marginTop: "0.5rem",
                    }}
                  >
                    +20%
                  </div>
                </div>
                <icon.EfficiencyIcon
                  width={window.innerWidth > 576 ? "80" : "25"}
                  height={window.innerWidth > 576 ? "40" : "25"}
                />
              </Box>
              <Box
                sx={{
                  width: "45%",
                  flexDirection: "row",
                  gap: "1rem",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <div style={{ color: "var(--color-brand--4)" }}>
                    Consumption
                  </div>
                  <div
                    style={{
                      fontSize: "1.8rem",
                      fontWeight: "600",
                      marginTop: "0.5rem",
                    }}
                  >
                    163W/km
                  </div>
                </div>
                <div
                  style={{
                    padding: "0.6rem",
                    borderRadius: "1rem",
                    backgroundColor: "var(--color-brand--3)",
                  }}
                >
                  <icon.EnergyIcon
                    color="var(--color-white)"
                    width={window.innerWidth > 576 ? "20" : "15"}
                    height={window.innerWidth > 576 ? "20" : "15"}
                  />
                </div>
              </Box>
              <Box
                sx={{
                  width: "45%",
                  flexDirection: "row",
                  gap: "1rem",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <div style={{ color: "var(--color-brand--4)" }}>
                    This Week
                  </div>
                  <div
                    style={{
                      fontSize: "1.8rem",
                      fontWeight: "600",
                      marginTop: "0.5rem",
                    }}
                  >
                    1.342km
                  </div>
                </div>
                <icon.ThisWeekIcon
                  width={window.innerWidth > 576 ? "80" : "25"}
                  height={window.innerWidth > 576 ? "40" : "25"}
                />
              </Box>
            </div>
          </div>
        </Box>
        <Box
          from={{ transform: "translateY(2rem)", opacity: "0" }}
          to={{ transform: "translateY(0rem)", opacity: "1" }}
          sx={{ maxWidth: "25%" }}
        >
          <div style={{ fontSize: "1.5rem" }}>Profile Informations</div>
          <div style={{ color: "var(--color-brand--4)", padding: "2rem 0" }}>
            {state?.Profile?.description}
          </div>
          <hr
            style={{
              height: "0.2rem",
              backgroundColor: "var(--color-brand--4)",
            }}
          />
          <ul>
            <li style={{ display: "flex", gap: "0.5rem", margin: "1rem 0" }}>
              <div style={{ color: "var(--color-brand--4)" }}>Full Name:</div>
              <div>{state?.Profile?.Fullname}</div>
            </li>
            <li style={{ display: "flex", gap: "0.5rem", margin: "1rem 0" }}>
              <div style={{ color: "var(--color-brand--4)" }}>Mobile</div>
              <div>{state?.Profile?.Mobile}</div>
            </li>
            <li style={{ display: "flex", gap: "0.5rem", margin: "1rem 0" }}>
              <div style={{ color: "var(--color-brand--4)" }}>Mobile</div>
              <div>{state?.Profile?.Mobile}</div>
            </li>
            <li style={{ display: "flex", gap: "0.5rem", margin: "1rem 0" }}>
              <div style={{ color: "var(--color-brand--4)" }}>Location</div>
              <div>{state?.Profile?.Location}</div>
            </li>
            <li style={{ display: "flex", gap: "0.5rem", margin: "1rem 0" }}>
              <div style={{ color: "var(--color-brand--4)" }}>Social Media</div>
              <div
                style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}
              >
                {state?.Profile?.SocialMedia?.map((item, index) => (
                  <div key={index}>{item.icon}</div>
                ))}
              </div>
            </li>
          </ul>
        </Box>
      </div>

      {/*  platform*/}
      <div className={styles.platform_section}>
        <Box
          from={{ transform: "translateY(2rem)", opacity: "0" }}
          to={{ transform: "translateY(0rem)", opacity: "1" }}
          sx={{ minWidth: "25%" }}
        >
          <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
            Platform Settings
          </div>
          <div>
            <p style={{ margin: "0.5rem 0", color: "var(--color-brand--4)" }}>
              ACCOUNT
            </p>
            <ul>
              <li
                style={{
                  display: "flex",
                  gap: "1rem",
                  alignItems: "center",
                  padding: "0.5rem 0",
                  alignItems: "center",
                  padding: "0.5rem 0",
                }}
              >
                <Toggle value={true} />
                <div>Email me when someone follows me</div>
              </li>
              <li
                style={{
                  display: "flex",
                  gap: "1rem",
                  alignItems: "center",
                  padding: "0.5rem 0",
                }}
              >
                <Toggle />
                <div>Email me when someone answers to...</div>
              </li>
              <li
                style={{
                  display: "flex",
                  gap: "1rem",
                  alignItems: "center",
                  padding: "0.5rem 0",
                }}
              >
                <Toggle value={true} />
                <div>Email me when someone follows me</div>
              </li>
            </ul>
            <p style={{ margin: "0.5rem 0", color: "var(--color-brand--4)" }}>
              APPLICATION
            </p>
            <ul>
              <li
                style={{
                  display: "flex",
                  gap: "1rem",
                  alignItems: "center",
                  padding: "0.5rem 0",
                }}
              >
                <Toggle />
                <div>New launches and projects</div>
              </li>
              <li
                style={{
                  display: "flex",
                  gap: "1rem",
                  alignItems: "center",
                  padding: "0.5rem 0",
                }}
              >
                <Toggle />
                <div>Monthly product updates</div>
              </li>
              <li
                style={{
                  display: "flex",
                  gap: "1rem",
                  alignItems: "center",
                  padding: "0.5rem 0",
                }}
              >
                <Toggle value={true} />
                <div>Subscribe to newsletter</div>
              </li>
              <li
                style={{
                  display: "flex",
                  gap: "1rem",
                  alignItems: "center",
                  padding: "0.5rem 0",
                }}
              >
                <Toggle value={true} />
                <div>Receive mails weekly</div>
              </li>
            </ul>
          </div>
        </Box>
        <Box
          from={{ transform: "translateY(2rem)", opacity: "0" }}
          to={{ transform: "translateY(0rem)", opacity: "1" }}
        >
          <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Projects</div>
          <div style={{ color: "var(--color-brand--4)" }}>
            Architects design houses
          </div>
          <div style={{ marginTop: "1rem", display: "flex", gap: "1rem" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <img
                src={require("../../assets/img/Image.png")}
                style={{
                  width: "100%",
                  borderRadius: "1.5rem",
                  objectFit: "cover",
                }}
              />
              <div
                style={{ marginTop: "0.5rem", color: "var(--color-brand--4)" }}
              >
                <p>Project #1</p>
                <p
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "400",
                    color: "var(--color-white)",
                  }}
                >
                  Modern
                </p>
                <p style={{ padding: "0.5rem 0" }}>
                  As Uber works through a huge amount of internal management
                  turmoil.
                </p>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Button
                    sx={{
                      padding: "0.5rem 1rem",
                      border:
                        window.innerWidth > 576
                          ? "0.25rem solid var(--color-white)"
                          : "0.1rem solid white",
                    }}
                    style={{}}
                  >
                    VIEW ALL
                  </Button>
                  <div style={{ display: "flex" }}>
                    <img
                      src={require("../../assets/img/profile/Alexa Liras.png")}
                      style={{
                        width: "2rem",
                        height: "2rem",
                        borderRadius: "10rem",
                      }}
                    />
                    <img
                      src={require("../../assets/img/profile/Daniel Thomas.png")}
                      style={{
                        width: "2rem",
                        height: "2rem",
                        borderRadius: "10rem",
                      }}
                    />
                    <img
                      src={require("../../assets/img/profile/Esthera Jackson.png")}
                      style={{
                        width: "2rem",
                        height: "2rem",
                        borderRadius: "10rem",
                      }}
                    />
                    <img
                      src={require("../../assets/img/profile/Laurent Michael.png")}
                      style={{
                        width: "2rem",
                        height: "2rem",
                        borderRadius: "10rem",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <img
                src={require("../../assets/img/Scandinavian.png")}
                style={{
                  width: "100%",
                  borderRadius: "1.5rem",
                  objectFit: "cover",
                }}
              />
              <div
                style={{ marginTop: "0.5rem", color: "var(--color-brand--4)" }}
              >
                <p>Project #2</p>
                <p
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "400",
                    color: "var(--color-white)",
                  }}
                >
                  Scandinavian
                </p>
                <p style={{ padding: "0.5rem 0" }}>
                  Music is something that every person has his or her own
                  specific opinion about.
                </p>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Button
                    sx={{
                      padding: "0.5rem 1rem",
                      border:
                        window.innerWidth > 576
                          ? "0.25rem solid var(--color-white)"
                          : "0.1rem solid white",
                    }}
                    style={{}}
                  >
                    VIEW ALL
                  </Button>
                  <div style={{ display: "flex" }}>
                    <img
                      src={require("../../assets/img/profile/Daniel Thomas.png")}
                      style={{
                        width: "2rem",
                        height: "2rem",
                        borderRadius: "10rem",
                      }}
                    />
                    <img
                      src={require("../../assets/img/profile/Laurent Michael.png")}
                      style={{
                        width: "2rem",
                        height: "2rem",
                        borderRadius: "10rem",
                      }}
                    />
                    <img
                      src={require("../../assets/img/profile/Esthera Jackson.png")}
                      style={{
                        width: "2rem",
                        height: "2rem",
                        borderRadius: "10rem",
                      }}
                    />
                    <img
                      src={require("../../assets/img/profile/Alexa Liras.png")}
                      style={{
                        width: "2rem",
                        height: "2rem",
                        borderRadius: "10rem",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <img
                src={require("../../assets/img/Minimalist.png")}
                style={{
                  width: "100%",
                  borderRadius: "1.5rem",
                  objectFit: "cover",
                }}
              />
              <div
                style={{ marginTop: "0.5rem", color: "var(--color-brand--4)" }}
              >
                <p>Project #3</p>
                <p
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "400",
                    color: "var(--color-white)",
                  }}
                >
                  Minimalist
                </p>
                <p style={{ padding: "0.5rem 0" }}>
                  Different people have different taste, and various types of
                  music.
                </p>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Button
                    sx={{
                      padding: "0.5rem 1rem",
                      border:
                        window.innerWidth > 576
                          ? "0.25rem solid var(--color-white)"
                          : "0.1rem solid white",
                    }}
                    style={{}}
                  >
                    VIEW ALL
                  </Button>
                  <div style={{ display: "flex" }}>
                    <img
                      src={require("../../assets/img/profile/Esthera Jackson.png")}
                      style={{
                        width: "2rem",
                        height: "2rem",
                        borderRadius: "10rem",
                      }}
                    />
                    <img
                      src={require("../../assets/img/profile/Alexa Liras.png")}
                      style={{
                        width: "2rem",
                        height: "2rem",
                        borderRadius: "10rem",
                      }}
                    />
                    <img
                      src={require("../../assets/img/profile/Laurent Michael.png")}
                      style={{
                        width: "2rem",
                        height: "2rem",
                        borderRadius: "10rem",
                      }}
                    />
                    <img
                      src={require("../../assets/img/profile/Daniel Thomas.png")}
                      style={{
                        width: "2rem",
                        height: "2rem",
                        borderRadius: "10rem",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </div>
    </div>
  );
}
