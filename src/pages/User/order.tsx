import { Button, Card, Container, Grid, Group, NativeSelect, NavLink, Select, Text, TextInput, Textarea  } from "@mantine/core";
import { useUserStyle } from "./style";
import { IconAdFilled, IconAt, IconCalendarHeart,  IconChevronDown,  IconLocation, IconPhone } from "@tabler/icons-react";
import { useForm } from "@mantine/form";
import { DateTimePicker } from '@mantine/dates';
import { PasswordInput } from "@mantine/core";
 
import {
    BrowserRouter as Router,
    Link, Route, Routes
  } from "react-router-dom"
import { UserPage } from ".";
import { PasswordPage } from "./password";
export const OrderPage = () => {

  const { classes } = useUserStyle();

  return(
      
    
     <Container className={classes.content}>
    
     <Grid gutter={6} gutterXs="md" gutterMd="xl" gutterXl={50} >
    
      <Grid.Col span={5}><div><Text sx={{ color: '#00ECE5', fontSize: '1.1rem', lineHeight: 1.4 }} ></Text> </div>
      <div>
            <img style={{width:"40px", height:"40px", borderRadius: "50%"}}
              src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
              alt=""
                       />             
        <Text style={{fontSize:"20px", fontWeight: "bold"}}>Abebe Kebde</Text>
     </div>
     <div>
      <br />
      <Text sx={{gap: '10px', mb:'40px'}}>
        
        <Text component={Link} variant="link" to ="/users">My Account</Text>
        <Text component={Link} variant="link" to ="/password">Change Password</Text>
        <Text component={Link} variant="link" to ="/order">Order History</Text>
      </Text>
     </div>
     <Routes>
        <Route path="/users" element={<UserPage/>}/>
        <Route path="/password" element={<PasswordPage/>}/>
        <Route path="/order" element={<OrderPage/>}/>
      </Routes>
       </Grid.Col>
            <Grid.Col span={7}>  
            <Card shadow="sm" padding="lg" radius="md" withBorder>

<Card.Section>
<Text weight={700} style={{fontWeight: "bold"}}>Order History</Text>
</Card.Section>

<Group  mt="md" mb="xs">
<Card.Section>
<Text weight={500}>Order Type:</Text>
<Text weight={500}>Order Date:</Text>
<Text weight={500}>Order Status:</Text>
<Text weight={500}>Other Order: </Text>
</Card.Section>

 
<Text size="sm" color="dimmed">
With this status you can  view your order status and you can check 
from now on.
        </Text>
 
</Group>
</Card>

</Grid.Col>
</Grid>
  
</Container>
   
  )
};
