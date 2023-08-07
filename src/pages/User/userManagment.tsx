import {   Box, SimpleGrid } from '@mantine/core'
import React from 'react'
import { Outlet } from 'react-router-dom'

export const UserManagment = () => {
  return (
   <Box>
    <SimpleGrid>
        
    </SimpleGrid>
    <Box>
       Menu
    </Box>
    <Box>
        <Outlet/>
    </Box>
   </Box>
  )
}

 
