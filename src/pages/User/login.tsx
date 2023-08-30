import React from "react";
import { useForm } from "@mantine/form";
import { Box, TextInput } from "@mantine/core";
import { rem, Button, Card, Group, PasswordInput, Text } from "@mantine/core";
import { NavLink } from "react-router-dom";

export const Login = () => {
  const form = useForm({
    initialValues: {
      email: "Kebdede@gmail.com",
      password: "",
      phoneNumber: "",
      termsOfService: false,
    },

    validate: {
      phoneNumber: (value) =>
        value.length < 10 ? "Phone Number must have at least 10 digits" : null,
      password: (value) =>
        value.length < 8 ? "Password must have at least 8 characters" : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });
  return (
    <>
      <Text sx={{ fontSize: "30px", fontWeight: "bold" }}>LOGIN</Text>
      <br />
      <Card
        withBorder
        radius="md"
        sx={{
          boxShadow: "5px 5px 10px 5px #ccc",
          width: "500px",
          height: "100%",
        }}>
        <form onSubmit={form.onSubmit(console.log)}>
          <br />
          <TextInput
            radius="md"
            size="md"
            withAsterisk
            label="Enter Phone Number/ Email "
            placeholder="phone number /Email"
            {...form.getInputProps("phoneNumber")}
          />
          <br />
          <PasswordInput
            radius="md"
            size="md"
            placeholder="Enter Your Password"
            label="Password"
            withAsterisk
            {...form.getInputProps("password")}
          />
          <br /> <br />
          <Button type="submit" sx={{ borderRadius: "5px" }}>
            Login
          </Button>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              paddingTop: "20px",
            }}>
            <Text>Didn't have an account? </Text>

            <NavLink to="/register">
              <Button sx={{ borderRadius: "5px" }}>Register</Button>
            </NavLink>
          </Box>
          <NavLink to="/reset">
            <Text
              sx={{
                paddingTop: "20px",
                textDecoration: "underline",
                cursor: "pointer",
              }}>
              Forget Password?
            </Text>
          </NavLink>
          <br />
          <br />
          <br />
        </form>
      </Card>
    </>
  );
};
