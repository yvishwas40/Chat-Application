import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Robot from "../assets/robot.gif";

export default function Welcome() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const fetchUserName = async () => {
      const data = await JSON.parse(
        localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
      );
      setUserName(data.username);
    };

    fetchUserName();
  }, []);

  return (
    <Container>
      <img src={Robot} alt="Robot greeting" />
      <h1>
        Welcome, <span>{userName}!</span>
      </h1>
      <h3>Please select a chat to start messaging.</h3>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  text-align: center;
  img {
    height: 20rem;
  }
  span {
    color: #4e0eff;
  }
`;
