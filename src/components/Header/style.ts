import {
  createStyles,
  rem,
} from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';
export const useHeaderStyle = createStyles((theme) => {
 const scroll = useWindowScroll()


return {
  header: {
    padding: theme.spacing.sm,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[0],
    borderBottom: `${rem(1)} solid ${theme.colorScheme === 'dark' ? 'transparent' : theme.colors.gray[4]
      }`,
    // marginBottom: rem(120),
    maxWidth: "100%",
    [theme.fn.smallerThan('sm')]: {
      padding: 0,
    },
  },

  mainSection: {
    padding: "3px 10px",
    maxWidth: "100%",
    width: "100%",
    height: "100%",
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
    justifyContent: 'space-between'
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    height: "100%",
    maxWidth:"7rem",
    // flex: 1,
    [theme.fn.smallerThan('md')]: {
      maxWidth:"3rem",

      // flex: 2,
    },
  },
  logoImg: {
    width: scroll[0].y < 200?'100px':'50px',
    [theme.fn.smallerThan('md')]: {
      maxWidth:"50px",

      // flex: 2,
    },
  },
  midcontainer: {
    display: "flex",
    alignItems: "center",
    flexFlow:"column",
    // padding:"10px",
    width: "100%",
    height: "100%",
    gap:0,
    [theme.fn.smallerThan('sm')]: {
      // flex: 5,
    },
  },
  searchContainer: {
    display: "flex",
    alignItems: "end",
    justifyContent: "end",
    width: "100%",
    height: "100%",
    [theme.fn.smallerThan('md')]: {
      // flex: 2,
      justifyContent: "center",
    },
  },
  tabsContainer: {
    display: scroll[0].y < 200?"flex":"none",
    justifyContent: "end",
    width: "100%",
    height: "100%",
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },

  },



  navContainer: {
    display: "flex",
    alignItems: "start",
    justifyContent: "end",
    width: "100%",
    height: "100%",
    maxWidth:"15rem",
    minWidth:"7rem",

    // flex: 1.3,
    [theme.fn.smallerThan('md')]: {
      // flex: 2,
      maxWidth:"7rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    [theme.fn.smallerThan('sm')]: {
      // flex: 2,
      maxWidth:"5rem",
      minWidth:"5rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  navHolder: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "7px"
  },
  
  tabsCategoryContainer: {
    display: scroll[0].y < 200?"flex":"none",
    justifyContent: "start",
    alignItems:"center",
    width: "100%",
    height: "100%",
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
   
  },


}

});
