import React, { useState } from "react";
import logo from "./logopicture.png";
import { meals } from "../foodapi";
import { Button, Dialog, Grid } from "@mui/material";
import { Favorite } from "@mui/icons-material";
export default function Foodcard() {
  const [data] = useState(meals);
  const [openDialog, setOpenDialog] = useState(false);
  const [currentCardId, setCurrnetCardId] = useState("");
  const open = () => {
    setOpenDialog(true);
  };
  const close = () => {
    setOpenDialog(false);
  };
  return (
    <div>
      <nav
        style={{
          backgroundColor: "#f0f0f5",
          height: "60px",
          display: "flex",
          position: "fixed",
          zIndex: "9999",
          width: "100%",
          transition: "all 0.3s ease-in-out",
        }}
      >
        <img
          style={{ width: "17%", height: "45px", marginTop: "3px" }}
          src={logo}
          alt="logo"
        />
      </nav>
      <div style={{ backgroundColor: "#f0f0f5" }}>
        <Grid container>
          {data.map((items, idx) => {
            return (
              <Grid item xl={5} md={5} lg={5}>
                <div
                  key={idx}
                  style={{
                    backgroundColor: "#fff",
                    boxShadow: "0px 0px 2px 0px gray",
                    borderRadius: "20px",
                    marginLeft: "180px",
                    marginTop: "70px",
                    height: "230px",
                    display: "flex",
                    width: "90%",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      paddingTop: "10px",
                    }}
                  >
                    <div style={{ display: "flex" }}>
                      <img
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          marginLeft: "10px",
                        }}
                        src={items.ImgUrl}
                        alt=""
                      />
                      <p
                        style={{
                          fontSize: "20px",
                          fontWeight: "bold",
                          marginLeft: "10px",
                        }}
                      >
                        {items.strName}
                      </p>
                    </div>
                    <div>
                      <Favorite
                        sx={{
                          color:
                            openDialog && currentCardId === items.idMeal
                              ? "red"
                              : "black",

                          fontSize: "30px",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          setCurrnetCardId(items.idMeal);
                          open();
                        }}
                      />
                    </div>
                  </div>
                  <div style={{ display: "flex", paddingBottom: "30px" }}>
                    <img
                      style={{
                        width: "35%",
                        height: "120px",
                        borderRadius: "5px",
                        boxShadow: "0px 0px 10px 0px gray",
                        marginLeft: "-25px",
                        backgroundColor: "#fff",
                      }}
                      src={items.strMealThumb}
                      alt=""
                    />

                    <div>
                      <p
                        className="heading"
                        style={{
                          overflow: "hidden",
                          fontSize: "23px",
                          marginLeft: "15px",
                        }}
                      >
                        {items.strMeal}
                      </p>
                      <p style={{ marginLeft: "15px", lineHeight: "0.2" }}>
                        {Math.ceil(Math.random() * 10) + "M"} people watch.
                      </p>
                      <p style={{ marginLeft: "15px" }}>
                        Uploaded {Math.ceil(Math.random() * 5)} hour ago.
                      </p>
                    </div>
                  </div>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Button
                      style={{
                        backgroundColor: "#eb4715",
                        color: "#fff",
                        marginBottom: "15px",
                        borderRadius: "50px",
                        width: "107px",
                        boxShadow: "0px 0px 10px 0px #eb4715",
                      }}
                    >
                      Watch
                    </Button>
                    <Button
                      style={{
                        backgroundColor: "#eb4715",
                        color: "#fff",
                        marginBottom: "15px",
                        marginLeft: "20px",
                        borderRadius: "50px",
                        width: "107px",
                        boxShadow: "0px 0px 10px 0px #eb4715",
                      }}
                    >
                      Repost
                    </Button>
                  </div>
                </div>
              </Grid>
            );
          })}
        </Grid>
      </div>
      {openDialog && (
        <Dialog open={open}>
          <div
            style={{
              width: "100%",
              backgroundColor: "#eb4715",
              padding: "30px",
              textAlign: "center",
              color: "#fff",
            }}
          >
            <h3>Congratulations!</h3>
            <p>Your meal is Add to favourite.</p>
            <Button
              onClick={close}
              style={{
                backgroundColor: "#fff",
                color: "#000",
                borderRadius: "50px",
                width: "107px",
              }}
            >
              Ok
            </Button>
          </div>
        </Dialog>
      )}
    </div>
  );
}