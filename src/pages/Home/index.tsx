import { Container, Text  } from "@mantine/core";
import { useHomeStyle } from "./style";

export const HomePage = () => {
  const { classes } = useHomeStyle();

  return(
     <Container className={classes.content}>
        <Text >
            Home Page
        </Text>
       

     </Container>
  )
};
