import React from "react";
import { useForm } from "@mantine/form";
import {
  TextInput,
  Text,
  Button,
  Box,
  SimpleGrid,
  PasswordInput,
} from "@mantine/core";
import { NavLink } from "react-router-dom";

export const ChangePass = () => {
  const form = useForm({
    initialValues: {
      verificationCode: "",
      newPassword: "",
      confrimPassword: "",
      termsOfService: false,
    },

    validate: {
      verificationCode: (value) =>
        value.length < 4 ? "Code must be a more than 4 characters" : null,
      newPassword: (value) =>
        value.length < 8 ? "Password must have at least 8 characters" : null,

      confrimPassword: (value, values) =>
        value !== values.newPassword ? "Passwords did not match" : null,
    },
  });
  return (
    <div>
      <Text sx={{ fontSize: "30px", fontWeight: "bold" }}>Change Password</Text>
      <SimpleGrid sx={{ boxShadow: "5px 5px 10px 5px #ccc" }}>
        <form onSubmit={form.onSubmit(console.log)}>
          <Text sx={{ width: "350px", margin: "10px" }}>
            <h4>Enter your Verification Code We have sent a code at ****</h4>
          </Text>
          <TextInput
            radius="md"
            size="md"
            sx={{
              margin: "20px 20px",
            }}
            label="Enter your verification code "
            placeholder=" Verification code"
            {...form.getInputProps("verificationCode")}
          />
          <PasswordInput
            radius="md"
            size="md"
            sx={{
              margin: "20px 20px",
            }}
            label="New Password "
            placeholder=" New Password"
            {...form.getInputProps("newPassword")}
          />
          <PasswordInput
            radius="md"
            size="md"
            sx={{
              margin: "20px 20px",
            }}
            label="Confrim Password "
            placeholder=" Confrim Password"
            {...form.getInputProps("confrimPassword")}
          />
          <Button type="submit" sx={{ margin: "20px", borderRadius: "5px" }}>
            Save New Password
          </Button>

          {/* <Box
          sx={{
            display: "flex",
            justifyContent: "Space-around",
            padding: "10px",
          }}>
          <NavLink to="/login">
            <Button sx={{ borderRadius: "5px" }}>Login</Button>
          </NavLink>
          <NavLink to="/register">
            <Button sx={{ borderRadius: "5px" }}>Register</Button>
          </NavLink>
        </Box> */}
        </form>
      </SimpleGrid>
    </div>
  );
};
