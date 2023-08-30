import React from 'react'
import { useForm } from "@mantine/form";
import {  TextInput } from '@mantine/core';
import {Box, rem, Button, Card, Group, PasswordInput, Text } from "@mantine/core";
import { NavLink } from "react-router-dom";

export const Register = () => {
   
   
 
        const form = useForm({
          initialValues: {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            password: '',
            confirmPassword: '',
            email: '',
            
          },

          validate: {
            firstName: (value) => (value.length < 2 ? 'First Name must have at least 2 letters' : null),
            lastName: (value) => (value.length < 2 ? 'Last Name must have at least 2 letters' : null),
            phoneNumber: (value) => (value.length < 10 ? 'Phone Number must have at least 10 digits' : null),
            password: (value) => (value.length < 8 ? 'Password must have at least 8 characters' : null),
            email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),            
            confirmPassword: (value, values) =>
              value !== values.password ? 'Passwords did not match' : null,
          
              
            },
        });
        return (
            <>
                <Text sx={{ fontSize: "30px" , fontWeight: "bold"}}>REGISTER</Text>
                <br />
                <Card 
                    withBorder
                    
                    radius="md"
                    sx={{  boxShadow: "5px 5px 10px 5px #ccc" , width: "500px", height: "100%" }}>
                   <form onSubmit={form.onSubmit(console.log)}>
                    <TextInput 
                        radius="md"
                          size="md"
                        withAsterisk
                        label="First Name"
                        placeholder="First Name"
                        {...form.getInputProps("firstName")}
                    />
                    <TextInput
                        radius="md"
                          size="md"
                        withAsterisk
                        label="Last Name"
                        placeholder="Last Name"
                        {...form.getInputProps("lastName")}
                    />
                    <TextInput
                        radius="md"
                          size="md"
                        withAsterisk
                        label="Phone Number"
                        placeholder="phone number"
                        {...form.getInputProps("phoneNumber")}
                    />
                    <TextInput
                        radius="md"
                          size="md"
                        withAsterisk
                        label="Email"
                        placeholder="your@email.com"
                        {...form.getInputProps("email")}
                    />

                    <PasswordInput
                        radius="md"
                          size="md"
                        placeholder="New Password"
                        label="New Password"
                  withAsterisk
                  {...form.getInputProps("password")}
                    />
                    <PasswordInput
                        radius="md"
                          size="md"
                        placeholder="Confrim Password"
                        label="Confirm Password"
                  withAsterisk
                    {...form.getInputProps("confirmPassword")}
                    />
                    <br />
                     <Button type='submit' sx={{ borderRadius: "5px" }}>Register</Button>
                   <br />
                     
                <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            paddingTop: "20px",
          }}>
          <Text>Already have an account? </Text>

          <NavLink to="/login">                          
                        
        <Button sx={{borderRadius: "5px"}}>Login</Button></NavLink> 
        </Box>
               </form>     
                </Card>
            </>
        );
    };

 

 
