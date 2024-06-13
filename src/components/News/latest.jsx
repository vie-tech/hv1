import {
  Stack,
  Box,
  styled,
  Typography,
  Container,
  Avatar,
} from "@mui/material";
import { IoIosArrowForward } from "react-icons/io";
import Heading from "./Heading";
import ArticlesGallery from "./ArticlesGallery";
import { colors } from "../../utils/globals";

const StyledAboutBox = styled(Box)({
  borderRadius: "25px",
  width: "100%",
  height: "250px",
});

const StyledTextBox = styled(Box)({
  lineHeight: "1rem",
  color: "black",
  "@media screen and (max-width: 1200px)": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

const data = [
  {
    img: "https://res.cloudinary.com/dfljnnxln/image/upload/v1674009084/Photo_7_ict8n7.png",
    des: "How I eat healthy meals ",
  },
  {
    img: "https://res.cloudinary.com/dfljnnxln/image/upload/v1674010427/Photo_2_svfsql.png",
    des: "How I eat healthy meals ",
  },
  {
    img: "https://res.cloudinary.com/dfljnnxln/image/upload/v1674010427/Photo_1_1_wrsupq.png",
    des: "How I eat healthy meals ",
  },
  {
    img: "https://res.cloudinary.com/dfljnnxln/image/upload/v1674009084/Photo_7_ict8n7.png",
    des: "How I eat healthy meals ",
  },
  {
    img: "https://res.cloudinary.com/dfljnnxln/image/upload/v1674010427/Photo_2_svfsql.png",
    des: "How I eat healthy meals ",
  },
  {
    img: "https://res.cloudinary.com/dfljnnxln/image/upload/v1674010427/Photo_1_1_wrsupq.png",
    des: "How I eat healthy meals ",
  },
];
const Latest = () => {
  return (
    <>
      <Container maxWidth={"md"}>
        <Box marginY={8}>
          <Heading title="Latest News" Talign="left" x="0" PX="0" />
          <Stack
            direction={["column", "row"]}
            padding={1}
            marginBottom={"2rem"}
            border={`1px solid ${colors.primary}`}
            borderRadius={"25px"}
          >
            <Box
              marginY={"1rem"}
              marginLeft={["0", "2rem"]}
              sx={{ order: ["1", "2"] }}
            >
              <StyledTextBox
                textAlign={["center", "left"]}
                paddingRight={[0, 5]}
              >
                <Typography
                  mb
                  fontWeight={700}
                  fontSize={"1.2rem"}
                  color={colors.primary}
                >
                  A Bumper Harvest
                </Typography>
                <Typography fontSize={"0.8rem"} mb={3}>
                  {" "}
                  Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                  turpis dignissim maximus.posuere in.Contrary to popular
                  belief.
                </Typography>
                <Typography fontSize={"0.8rem"} mb={2}>
                  {" "}
                  Lorem Ipsum is not simply random text. It has roots in a piece
                  of classica.
                </Typography>
                <Stack
                  direction="row"
                  justifyContent="space-Between"
                  alignItems="center"
                >
                  <Box>
                    <Typography fontSize="0.8rem">26 December,2067</Typography>
                  </Box>
                  <Avatar
                    sx={{
                      background: `${colors.harvestaYellow}`,
                      display: ["none", "flex"],
                    }}
                  >
                    <IoIosArrowForward color={colors.primary} />
                  </Avatar>
                </Stack>
              </StyledTextBox>
            </Box>
            <StyledAboutBox
              sx={{
                order: ["2", "1"],
                background: `url(https://res.cloudinary.com/dfljnnxln/image/upload/v1674075411/Photo_3_1_jnx2vc.png)`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
              }}
            />
          </Stack>
        </Box>

        <Box marginY={8}>
          <Heading title="Articles & News" Talign="left" x="0" PX="0" />
          <ArticlesGallery data={data} />
        </Box>
      </Container>
    </>
  );
};
export default Latest;
