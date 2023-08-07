import { Button,   Container, Grid,  Text,  } from "@mantine/core";
import { useUserStyle } from "./style";

 
import { PasswordInput } from "@mantine/core";
 
export const PasswordPage = () => {

   
  const { classes } = useUserStyle();

  return(
         
     <Container className={classes.content}>              
     <Grid gutter={2} gutterXs="md" gutterMd="xl" gutterXl={50} >
          
     <Grid.Col span={12}>  
      <Text>  Change Password</Text>
    <Container  sx={{ border: '1px solid teal', padding: '10px' ,borderRadius: '5px'}}
         >   
        <PasswordInput
      placeholder="Old Password"
      label=" Old Password"
      description="Password must include at least one letter, number and special character"
      withAsterisk/>
        
        <PasswordInput
      placeholder="New Password"
      label="New Password"
      description="Password must include at least one letter, number and special character"
      withAsterisk/>
         <PasswordInput
      placeholder="Confrim Password"
      label="Confirm Password"
      description="Password must include at least one letter, number and special character"
      withAsterisk/>
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
  )
};
