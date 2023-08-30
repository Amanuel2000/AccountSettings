import React from "react";
import { useForm } from "@mantine/form";
import { TextInput, Text, Button, Box, SimpleGrid } from "@mantine/core";
import { NavLink } from "react-router-dom";
export const ResetPassword = () => {
  const form = useForm<{ phoneNumber: number | undefined }>({
    initialValues: {
      phoneNumber: undefined,
    },

    validate: (values) => ({
      phoneNumber:
        values.phoneNumber === undefined
          ? "Phone number is Required"
          : values.phoneNumber < 10
          ? "phone number must be digts of 10"
          : null,
    }),
  });
  return (
    <div>
      <Text sx={{ fontSize: "30px", fontWeight: "bold" }}>Forget Password</Text>
      <SimpleGrid sx={{ boxShadow: "5px 5px 10px 5px #ccc" }}>
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <Text sx={{ width: "350px", margin: "10px" }}>
            <h4>
              Enter your Phone Number and we'll send you a verification code
              with instructions to reset your password.
            </h4>
          </Text>
          <TextInput
            radius="md"
            size="md"
            sx={{
              margin: "20px 20px",
            }}
            label="Enter your Phone Number "
            placeholder="Your Phone Number"
            {...form.getInputProps("phoneNumber")}
          />

          <Button type="submit" sx={{ margin: "20px", borderRadius: "5px" }}>
            Send a Verification Code
          </Button>

          <Box
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
          </Box>
        </form>
      </SimpleGrid>
    </div>
  );
};
