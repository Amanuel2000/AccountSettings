import { Button, Card, Container, Grid, Group, NativeSelect, Select, Text, TextInput, Textarea  } from "@mantine/core";
import { useUserStyle } from "./style";
import { IconAdFilled, IconAt, IconCalendarHeart,  IconChevronDown,  IconLocation, IconPhone } from "@tabler/icons-react";
import { useForm } from "@mantine/form";
import { DateTimePicker } from '@mantine/dates';
import { PasswordInput } from "@mantine/core";
export const UserPage = () => {

    const form = useForm({
        initialValues: {
          email: '',
          termsOfService: false,
        },
    
        validate: {
          email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        },
      });

  const { classes } = useUserStyle();

  return(
    <div>       
    
     <Container className={classes.content}>
              
      
  
   
     <Grid gutter={4} gutterXs="md" gutterMd="xl" gutterXl={50} >
    
      <Grid.Col span={5}><div><Text sx={{color: '#00ECE5', fontSize: '1.1rem', lineHeight: 1.4 }} ></Text> </div>
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
        <Text >My Account</Text>
         
        <Text>Change Password</Text>
      
        <Text>Order History</Text>
        </Text>
     </div>
           
            </Grid.Col>
            <Grid.Col span={7}>  
            <Text >
        User Update
        </Text>
        <Container  sx={{ border: '1px solid teal', padding: '10px', borderRadius: '5px' }}
        size="md"
        mt={20}>
      <TextInput
          withAsterisk
          label="First Name"
          placeholder="firstname"
          {...form.getInputProps('firstname')}
        />
        
        <TextInput
          withAsterisk
          label="Last Name"
          placeholder="last name"
          {...form.getInputProps('last name')}
        />
         
         <DateTimePicker
         withAsterisk
      valueFormat="DD MMM YYYY hh:mm A"
      label="Birth Date"
      placeholder=" birthdate"
      maw={400}
      mx="auto"
    />
        <NativeSelect
      label="Gender"
      placeholder="Gender"
      data={['Male', 'Female']}
      rightSection={<IconChevronDown size="1rem" />}
      rightSectionWidth={40}
    />
        
         <TextInput
          withAsterisk
          label="Nationality"
          placeholder="nationality"
          {...form.getInputProps('nationality')}
        />
      
     
        </Container>
    <br />
     <Text>User Address</Text>
    <Container  sx={{ border: '1px solid teal', padding: '10px' ,borderRadius: '5px'}}
        size="md"
        mt={20}>
          
          <Select
      label="Country"
      placeholder="Select your country"
      data={[
        { value: 'react', label: 'React' },
        { value: 'ng', label: 'Angular' },
        { value: 'svelte', label: 'Svelte' },
        { value: 'vue', label: 'Vue' },
      ]}
    />
    <Select
      label="City"
      placeholder="Select your City"
      data={[
        { value: 'react', label: 'React' },
        { value: 'ng', label: 'Angular' },
        { value: 'svelte', label: 'Svelte' },
        { value: 'vue', label: 'Vue' },
      ]}
    />
        <TextInput
          withAsterisk
          label="Phone Nymber"
          placeholder="phone number"
          {...form.getInputProps('phone number')}
        />
        
        <TextInput
          withAsterisk
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps('email')}
        />
        <Textarea
        label="Physical Location"
        placeholder="Enter you location"
        autosize
        minRows={2}
        maxRows={4}
      />
         
   
        </Container>
    <div> 
        <br />
    <Button>
      Update
    </Button>
    </div>
            </Grid.Col>
                       
<Grid.Col span={6}><div><Text sx={{ color: '#00ECE5', fontSize: '1.1rem', lineHeight: 1.4 }} ></Text> </div>  

                


</Grid.Col>
 
</Grid>
</Container>
     </div>
    

     
  )
};
