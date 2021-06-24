import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import ChatMessage from "./../ChatMessage/ChatMessage";
import styled from "styled-components";
const muiBaseTheme = createMuiTheme();
const Container = styled.div`
  min-width: 100%;
  overflow: hidden;
`;
const AVATAR =
  "https://i.pinimg.com/originals/0a/dd/87/0add874e1ea0676c4365b2dd7ddd32e3.jpg";

export const ChatWindow = () => {
  return (
    <ThemeProvider theme={muiBaseTheme}>
      <Container>
        <ChatMessage
          avatar={AVATAR}
          messages={[
            "Hi Siddhesh Kukade , do you have any doubt",
            "Did you completed homework yesterday",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat lacus laoreet non curabitur gravida.",
          ]}
        />
        <ChatMessage
          side={"right"}
          messages={[
            "Yes Mam I have Submitted that yesterday",
            "Of course I did. Speaking of which check this out",
          ]}
        />
        <ChatMessage
          avatar={AVATAR}
          side={"left"}
          messages={[
            "Great! What's about you?",
            "Of course I did. Speaking of which check this out",
          ]}
        />
        <ChatMessage avatar={AVATAR} messages={["Im good.", "See u later."]} />
      </Container>
    </ThemeProvider>
  );
};
