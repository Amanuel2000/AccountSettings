import { Box, Button, Container, Input, Text} from "@mantine/core";
import {IconCalendarHeart, IconPhone, IconAt,   IconUser, IconLocation,  IconList } from '@tabler/icons-react';
import { useUserAccountStyle } from "./style";
 

export const UserAccount = () => {
  const { classes } = useUserAccountStyle();

  return(
    
     <Container className={classes.content}>
         
        <Text >
            User Account
            
        </Text>
       
        <div>
            <img style={{width:"40px", height:"40px", borderRadius: "50%"}}
              src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
              alt=""
           
            />
             <div>
        <Text style={{fontSize:"20px", fontWeight: "bold"}}>Abebe Kebde</Text>
        </div> 
        <Text >Software Engineer</Text>

        </div>
        <br /><br />
        <div  style={{display: "flex", flexDirection: "column"}}> 

            <div><Text style={{gap:"10px"}}> <IconUser/> AbeKebe</Text> </div>
            
            <div><Text > <IconCalendarHeart/> 12, July 1992</Text> </div>
            <div><Text > <IconPhone/> +123456789</Text> </div>
            <div><Text > <IconAt/> abe@test.com</Text> </div>
            <div><Text  > <IconLocation/> Addis Ababa, Ethiopia</Text> </div>
            <div><Text  > <IconList/> Order History</Text> </div>
            <br />
            <Button >Edit</Button>
        
            
         </div>

     </Container>
     
  )
};
