import { init, send } from "emailjs-com";
import { ChangeEvent, useState } from "react";
import {
  Box,
  Button,
  Center,
  Input,
  Spinner,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { ContactText } from "../common/contact_text";
import { FirstColor, SecondColor } from "../../constants";
export const Contact = () => {
  const userId = process.env.REACT_APP_USER_ID;
  const serviceId = process.env.REACT_APP_SERVICE_ID;
  const templateId = process.env.REACT_APP_TEMPLATE_ID;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contents, setContents] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const toast = useToast();

  const onSubmit = () => {
    if (!userId || !serviceId || !templateId) return;
    setIsLoading(true);
    init(userId);
    const sendItem = {
      to_name: "leo",
      from_name: name,
      email: email,
      contents: contents,
    };
    send(serviceId, templateId, sendItem)
      .then(() => {
        toast({
          title: "送信完了",
          status: "success",
          duration: 2000,
          position: "top-left",
          isClosable: true,
        });
        setName("");
        setEmail("");
        setContents("");
      })
      .finally(() => {
        setIsLoading(false);
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
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
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <Center>
        <Box
          style={{
            paddingTop: "30px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <ContactText
            children={"予約 / お問合せ"}
            bgc={SecondColor}
            color={"white"}
          />
          <ContactText
            children={
              <>
                お名前<span style={{ color: "red" }}>*</span>
              </>
            }
            bgc={"white"}
            color={"black"}
          />

          <Input
            backgroundColor={"gray.100"}
            type={"text"}
            w={{ base: 300, md: 500 }}
            value={name}
            onChange={putName}
            required
          />
          <ContactText
            children={
              <>
                メールアドレス<span style={{ color: "red" }}>*</span>
              </>
            }
            bgc={"white"}
            color={"black"}
          />
          <Input
            backgroundColor={"gray.100"}
            type={"email"}
            value={email}
            onChange={putEmail}
            required
          />
          <ContactText
            children={
              <>
                メッセージ<span style={{ color: "red" }}>*</span>
              </>
            }
            bgc={"white"}
            color={"black"}
          />
          <Textarea
            backgroundColor={"gray.100"}
            rows={8}
            value={contents}
            onChange={putContents}
            required
          />
          <Box style={{ marginTop: "20px" }}>
            <Center>
              <Button
                width={"100px"}
                mb={"80px"}
                mt={"30px"}
                textAlign={"center"}
                _hover={{ backgroundColor: FirstColor }}
                backgroundColor={FirstColor}
                color={SecondColor}
                disabled={isLoading}
                type={"submit"}
              >
                {isLoading ? <Spinner color="white" /> : "送信"}
              </Button>
            </Center>
          </Box>
        </Box>
      </Center>
    </form>
  );
};
