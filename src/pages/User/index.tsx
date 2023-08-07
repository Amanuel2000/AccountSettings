import { Button, Box, Container, NativeSelect, Select, Text, TextInput, Textarea, SimpleGrid  } from "@mantine/core";
import { useUserStyle } from "./style";
import {   IconChevronDown,  } from "@tabler/icons-react";
import { useForm } from "@mantine/form";
import { DateTimePicker } from '@mantine/dates';

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
      
    <Container className={classes.content}>
      
  
    <SimpleGrid 
    cols={2}
    spacing="lg"
    breakpoints={[
      { maxWidth: '62rem', cols: 3, spacing: 'md' },
      { maxWidth: '48rem', cols: 2, spacing: 'sm' },
      { maxWidth: '36rem', cols: 1, spacing: 'sm' },
    ]}>
            <div>
            User Update
        <Box sx={{ border: '1px solid teal', padding: '10px' ,borderRadius: '5px', alignItems: 'flex-end'}} 
        >
           
      <TextInput
          withAsterisk
          label="First Name"
          placeholder="firstname"
          {...form.getInputProps('firstname')}
        />
        
        <TextInput
          withAsterisk
          label="Last Name"
          description=" must include character and a word"
          placeholder="last name"
          {...form.getInputProps('last name')}
        />
         
         <DateTimePicker
         withAsterisk
      valueFormat="DD MMM YYYY hh:mm A"
      label="Birth Date"
      description=" must select the date month and year of the birthdate"
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
          description=" must include character and a word"
          placeholder="nationality"
          {...form.getInputProps('nationality')}
        />
      
     
        </Box>
        </div>
        <div>
     <Text>User Address</Text>
   <Box sx={{ border: '1px solid teal', padding: '10px' ,borderRadius: '5px'}}
         >
          
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
          label="Phone Number"
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
         
   
        </Box>
        </div>
    <div> 
        <br />
    <Button>
      Update
    </Button>
    </div>
            
                       
 
    </SimpleGrid> 
</Container>
     
    

     
  )
};
