import { Button, Card, Container, Grid, Group, NativeSelect, Select, Text, TextInput, Textarea  } from "@mantine/core";
import { useUserStyle } from "./style";
import { IconAdFilled, IconAt, IconCalendarHeart,  IconChevronDown,  IconLocation, IconPhone } from "@tabler/icons-react";
import { useForm } from "@mantine/form";
import { DateTimePicker } from '@mantine/dates';
import { PasswordInput } from "@mantine/core";
export const PasswordPage = () => {

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
        <Text >My Account</Text>
         
        <Text>Change Password</Text>
      
        <Text>Order History</Text>
        </Text>
     </div>
           
            </Grid.Col>
            <Grid.Col span={7}>  
           
    
     <Text>  Change Password</Text>
    <Container  sx={{ border: '1px solid teal', padding: '10px' ,borderRadius: '5px'}}
        size="md"
        mt={20}>
          
           
        
        <TextInput
          withAsterisk
          label="Old Password"
          placeholder="old password"

          {...form.getInputProps('password')}
        />
         <TextInput
          withAsterisk
          label="New Password"
          placeholder="new password"

          {...form.getInputProps('password')}
        />
         <TextInput
          withAsterisk
          label="Confirm  Password"
          placeholder="Confirm password"

          {...form.getInputProps('password')}
        />
         
   
        </Container>
    <div> 
        <br />
    <Button>
     Submit
    </Button>
    </div>
            </Grid.Col>
           
            
           
          

</Grid>
</Container>
     </div>
    

     
  )
};
