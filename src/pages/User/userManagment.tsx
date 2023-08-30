import { Text, rem, Box } from "@mantine/core";
import {
  IconHistory,
  IconLock,
  IconPassword,
  IconUser,
} from "@tabler/icons-react";

import { NavLink, Outlet } from "react-router-dom";

export const UserManagment = () => {
  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.colors.gray[7],
        justifyContent: "space-between",
        gap: "20px",
        display: "flex",
        flexDirection: "row",
      })}>
      <Box>
        <img
          style={{ width: "40px", height: "40px", borderRadius: "50%" }}
          src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
          alt=""
        />

        <Text style={{ fontSize: "20px", fontWeight: "bold" }}>
          Abebe Kebde
        </Text>
        <hr />
        <Box>
          <Text
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              marginLeft: "10px",
              gap: "15px",
            }}>
            <Text sx={{ alignContent: "center" }}>
              <IconUser /> <NavLink to="users"> Account</NavLink>
            </Text>

            <Text>
              <IconLock />
              <NavLink to="password">Change Password </NavLink>
            </Text>

            <Text>
              <IconHistory /> <NavLink to="order"> Order History</NavLink>
            </Text>
          </Text>
        </Box>
      </Box>
      <Box
        sx={(theme) => ({
          backgroundColor: theme.colors.gray[3],

          justifyContent: "space-between",
          gap: "20px",
        })}>
        <Outlet />
      </Box>
    </Box>
  );
};
