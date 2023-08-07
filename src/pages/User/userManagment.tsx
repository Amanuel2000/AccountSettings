import { Text, Box, SimpleGrid, Container, TextInput, NavLink } from '@mantine/core';
import React from 'react'
import { useForm } from "@mantine/form";
import { Link, Outlet,  } from 'react-router-dom'
import { IconPhotoPlus } from '@tabler/icons-react';


export const UserManagment = () => {
   
  return (
   <Box sx={{display: 'flex', alignContent: 'flex-start'}}>
    <SimpleGrid>
        
    </SimpleGrid>
    <Box >
     
       <img style={{ width:"40px", height:"40px", borderRadius: "50%"}}
              src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
              alt=""
                       />      
                          
        <Text style={{  fontSize:"20px", fontWeight: "bold"}}>Abebe Kebde</Text>
        <Box  sx={(theme) => ({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        textAlign: 'center',
        padding: theme.spacing.xl,
        borderRadius: theme.radius.md,
        cursor: 'pointer',

        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
        },
      })} >
        <Text sx={{gap: '10px', mb:'40px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        
        <Text  component={Link} variant="link" to ="users">My Account</Text>
        <Text   component={Link} variant="link" to ="password">Change Password</Text>
        <Text    component={Link} variant="link" to ="order">Order History</Text>
      </Text>
      </Box>
      
    </Box>
    <Box>
        <Outlet/>
    </Box>
     
   </Box>
  )
}

 
