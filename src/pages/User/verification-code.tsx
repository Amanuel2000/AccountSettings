import React from "react";
import { useForm } from "@mantine/form";
import { TextInput, Text, Button, Box, SimpleGrid } from "@mantine/core";
import { NavLink } from "react-router-dom";

export const VerifyCode = () => {
  const form = useForm({
    initialValues: {
      email: "Kebdede@gmail.com",
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });
  return (
    <div>
      <Text sx={{ fontSize: "30px", fontWeight: "bold" }}>Verify Password</Text>
      <SimpleGrid sx={{ boxShadow: "5px 5px 10px 5px #ccc" }}>
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
          {...form.getInputProps("verification code")}
        />
        <NavLink to="/changePass">
          {" "}
          <Button sx={{ margin: "20px", borderRadius: "5px" }}>
            Verify the Code
          </Button>{" "}
        </NavLink>

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
      </SimpleGrid>
    </div>
  );
};
