import { Box,   Card,   Grid, Group,   Text  } from "@mantine/core";
import { useUserStyle } from "./style";
 
export const OrderPage = () => {

  const { classes } = useUserStyle();

  return(
      
    
     <Box className={classes.content}>
    
     <Grid gutter={6} gutterXs="md" gutterMd="xl" gutterXl={50} >
    
      <Grid.Col span={5}><div><Text sx={{ color: '#00ECE5', fontSize: '1.1rem', lineHeight: 1.4 }} ></Text> </div>
       
    
      
       </Grid.Col>
            <Grid.Col span={7}>  
            <Card shadow="sm" padding="lg" radius="md" withBorder>

<Card.Section >
<Text weight={700} style={{fontWeight: "bold"}}>Order History</Text>
</Card.Section>

<Group  mt="md" mb="xs" sx={{alignItems: 'flex-start'}}>
<Card.Section >
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

  
</Box>
 
 
  )
};
