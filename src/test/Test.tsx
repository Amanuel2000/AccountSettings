import React from 'react'


import { MantineProvider, Container, Text, createStyles, Grid, TextInput, Paper } from '@mantine/core';
import { IconAt, IconCalendarHeart, IconList, IconLocation, IconPhone } from '@tabler/icons-react';
import { useForm } from '@mantine/form';
import { DateTimePicker } from '@mantine/dates';

const Test = () => {
  const form = useForm({
    initialValues: {
      email: '',
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });


  return (
 
    <div>

    <Grid sx={{display: 'flex', justifyContent:'space-between'}}>
      <Grid.Col span={5}> 
      <Container  sx={{ backgroundColor: 'teal'  }}
        >
       
            <img style={{width:"40px", height:"40px", borderRadius: "50%"}}
              src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
              alt=""
           
            />
         <div> 
        <Text style={{fontSize:"20px", fontWeight: "bold"}}>Abebe Kebde</Text>
        </div>
        <Text > <IconPhone/> +123456789</Text> 
            <br />
             <Text > <IconAt/> abe@test.com</Text>  
             <br />
             <Text  > <IconLocation/> Addis Ababa, Ethiopia</Text> 
             <br />
              <Text> <IconCalendarHeart/> 12, July 199 </Text>
      </Container>
      
      </Grid.Col>
        
    
      <Grid.Col span={7}>
        <Text >
        User Update
        </Text>
        <Container  sx={{ backgroundColor: 'teal', padding: '10px' }}
        size="md"
        mt={20}>
      <TextInput
          withAsterisk
          label="Username"
          placeholder="username"
          {...form.getInputProps('username')}
        />

        <TextInput
          withAsterisk
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps('email')}
        />
        <TextInput
          withAsterisk
          label="Password"
          placeholder="password"

          {...form.getInputProps('password')}
        />
        <TextInput
          withAsterisk
          label="Phone"
          placeholder="phone"

          {...form.getInputProps('phone')}
        />
        <TextInput
          withAsterisk
          label="Location"
          placeholder="location"

          {...form.getInputProps('location')}
        />
    <DateTimePicker
      valueFormat="DD MMM YYYY hh:mm A"
      label="Pick date and time"
      placeholder="Pick date and time"
      maw={400}
      mx="auto"
    />
        </Container>
        <br/>
        <Paper >
          <Text>User Address</Text>
          </Paper>
        <Container  sx={{ backgroundColor: 'teal', padding: '10px' }}
        size="md"
        mt={20}>
          
      <TextInput
          withAsterisk
          label="Username"
          placeholder="username"
          {...form.getInputProps('username')}
        />

        <TextInput
          withAsterisk
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps('email')}
        />
        <TextInput
          withAsterisk
          label="Password"
          placeholder="password"

          {...form.getInputProps('password')}
        />
        <TextInput
          withAsterisk
          label="Phone"
          placeholder="phone"

          {...form.getInputProps('phone')}
        />
        <TextInput
          withAsterisk
          label="Location"
          placeholder="location"

          {...form.getInputProps('location')}
        />
    <DateTimePicker
      valueFormat="DD MMM YYYY hh:mm A"
      label="Pick date and time"
      placeholder="Pick date and time"
      maw={400}
      mx="auto"
    />
        </Container>
      </Grid.Col>
     
    </Grid>
      
     

       
    </div>
     
   
   
 
  )
}

export default Test
