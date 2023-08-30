import { Container, Card, Group, Text, TextInput } from "@mantine/core";
import { useHomeStyle } from "./style";
import { useForm } from "@mantine/form";

export const HomePage = () => {
  const { classes } = useHomeStyle();
  const form = useForm();

  return (
    <Container className={classes.content}>
      <Text>Home Page</Text>
    </Container>
  );
};
