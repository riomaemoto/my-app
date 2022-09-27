import { init, send } from "emailjs-com";
import { ChangeEvent, useState } from "react";
import { Box, Button, Input, Textarea } from "@chakra-ui/react";
import { ContactText } from "../common/contact_text";
export const Contact = () => {
  const userId = process.env.REACT_APP_USER_ID;
  const serviceId = process.env.service_ni3z47a;
  const templateId = process.env.template_qt15ukd;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contents, setContents] = useState("");

  const onSubmit = () => {
    if (!userId || !serviceId || !templateId) return;
    init(userId);
    const sendItem = {
      to_name: "leo",
      from_name: name,
      email: email,
      contents: contents,
    };
    send(serviceId, templateId, sendItem).then(() =>
      console.log("success to send email")
    );
  };

  const putName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const putEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const putContents = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(e.target.value);
  };

  return (
    <div
      style={{
        paddingTop: "30px",
        paddingLeft: "170px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <ContactText children={"Contact"} bgc={"black"} color={"white"} />
      <ContactText children={"Name"} bgc={"white"} color={"black"} />
      <Input
        w={{ base: "200px", md: "300px" }}
        ml={{ base: "-20px", md: "510px" }}
        type={"text"}
        value={name}
        onChange={putName}
      />
      <ContactText children={"Email"} bgc={"white"} color={"black"} />
      <Input
        w={{ base: "300px", md: "300px" }}
        ml={{ base: "-80px", md: "510px" }}
        type={"email"}
        value={email}
        onChange={putEmail}
      />
      <ContactText children={"Message"} bgc={"white"} color={"black"} />
      <Textarea
        w={{ base: "300px", md: "300px" }}
        ml={{ base: "-80px", md: "510px" }}
        rows={5}
        value={contents}
        onChange={putContents}
      />
      <Box style={{ marginTop: "20px" }}>
        <Button m={12} onClick={onSubmit} ml={{ base: "30px", md: "615px" }}>
          Submit
        </Button>
      </Box>
    </div>
  );
};
