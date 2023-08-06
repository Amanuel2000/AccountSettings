import { Group, Header, Box} from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import { useHeaderStyle } from "./style";

import { Link } from "react-router-dom";

export function HeaderComponent() {
  const { classes } = useHeaderStyle();
  const [
    { y:scrollY }
  ] = useWindowScroll();

  
  return (
    <Header height={{ base: 50, md: scrollY > 200 ? 50 : 120 }}>
      <Box className={classes.mainSection}>
        <Group className={classes.logoContainer}>
          <Link to="/">
            <img src={"/images/Che_Logo.png"} className={classes.logoImg} />
          </Link>
        </Group>

        <Group className={classes.midcontainer}>
          <Box className={classes.tabsContainer}>
          </Box>

          <Box className={classes.searchContainer}>
          </Box>

          <Box className={classes.tabsCategoryContainer}>
          </Box> 
        </Group>

        <Group className={classes.navContainer}>
          <Group className={classes.navHolder}>

          </Group>
        </Group>
      </Box>
    </Header>
  );
}
