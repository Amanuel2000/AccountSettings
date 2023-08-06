import {
    createStyles,
  } from '@mantine/core';
export const useContentStyle = createStyles((theme) => ({
  root:{

  },
  body:{
    minHeight:"100vh",
    maxWidth:"100%",
    width:"100%",
    padding:"0",
    margin:"0",
    },
    main:{
      width:"100%",
      [theme.fn.largerThan("sm")]: {
        paddingBottom:0
     },
    }

  
  }));