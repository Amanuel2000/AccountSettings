import { Box, Flex, MediaQuery } from "@mantine/core";
import { AppShell } from "@mantine/core";
import { FooterComponent, HeaderComponent } from "@components";
import {  NavLink, Outlet } from "react-router-dom";
import { useContentStyle } from "./style";
import { Footer } from "@mantine/core";
import { IconHome, IconPhoneOutgoing, IconPhotoPlus,  IconUserCircle } from "@tabler/icons-react";
import { Suspense } from "react";
import { FallBackPage } from "@/pages";
import { ScrollRestoration } from "react-router-dom";

export function AppContainer() {
  const { classes } = useContentStyle();
  return (
    <AppShell
      classNames={classes}
      header={
        <HeaderComponent

        />
      }
      // navbar={
      //     <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
      //       <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }} >
      //         <Text>Application sidebar</Text>
      //       </Aside>
      //     </MediaQuery>
      //   }
      children={
        <>
          <Box
            sx={() => ({
              width: "100%",
              maxWidth: "100%",
              height: "100%",
              minHeight: "100%",
              background: "transparent",
            })}
          >
            <ScrollRestoration/>
            <Suspense fallback={<FallBackPage/>}>
               <Outlet />
            </Suspense>          
            <FooterComponent
              links={[
                {
                  label: "Contact Us",
                  link: "/",
                },
                {
                  label: "Privacy",
                  link: "/",
                },
                {
                  label: "Blog",
                  link: "/",
                },
              ]}
            />
          </Box>
        </>
      }
      footer={
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <Footer height={60}    >
            <Flex align="center" justify='space-around' 
                        sx={() => ({
                          width: "100%",
                          maxWidth: "100%",
                          height: "100%",
                          minHeight: "100%",
                          borderRadius:'5px',

                        })}
            >
            <NavLink
                    className='shadow-xl'
                    to="/"    
                    style={({ isActive }:{isActive:boolean}) =>({
                      width:"2.5rem",
                      height:"2.5rem",
                      borderRadius:'50%',
                      display:'flex',
                      alignItems:'center',
                      justifyContent:'center',
                      boxShadow: 
                      isActive?
                      '0px 0px 10px -6px inset':
                      'rgba(0, 0, 0, 0.2) 0px 18px 33px -5px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, -36.95) -7px 11px 8px 21px inset'
                    })}
                  >
                    <IconHome size="1.2rem" color="#38d9a9" />
            </NavLink>
            <NavLink
                    to="/perscription/upload"
                    style={({ isActive }:{isActive:boolean}) =>({
                      width:"2.5rem",
                      height:"2.5rem",
                      borderRadius:'50%',
                      display:'flex',
                      alignItems:'center',
                      justifyContent:'center',
                      boxShadow: 
                      isActive?
                      '0px 0px 10px -6px inset':
                      'rgba(0, 0, 0, 0.2) 0px 18px 33px -5px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, -36.95) -7px 11px 8px 21px inset'
                    })}
                  >
                    <IconPhotoPlus size="1.2rem" color="#38d9a9" />
            </NavLink>
            <NavLink
                    to="/"
                    style={({ isActive }:{isActive:boolean}) =>({
                      width:"2.5rem",
                      height:"2.5rem",
                      borderRadius:'50%',
                      display:'flex',
                      alignItems:'center',
                      justifyContent:'center',
                      boxShadow: 
                      isActive?
                      '0px 0px 10px -6px inset':
                      'rgba(0, 0, 0, 0.2) 0px 18px 33px -5px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, -36.95) -7px 11px 8px 21px inset'
                    })}
                  >
                    <IconUserCircle size="1.2rem" color="#38d9a9" />
            </NavLink>
            <NavLink
                    to="/"
                    style={({ isActive }:{isActive:boolean}) =>({
                      width:"2.5rem",
                      height:"2.5rem",
                      borderRadius:'50%',
                      display:'flex',
                      alignItems:'center',
                      justifyContent:'center',
                      boxShadow: 
                      isActive?
                      '0px 0px 10px -6px inset':
                      'rgba(0, 0, 0, 0.2) 0px 18px 33px -5px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, -36.95) -7px 11px 8px 21px inset'
                    })}
                  >
                    <IconPhoneOutgoing size="1.2rem" color="#38d9a9" />
            </NavLink>
            </Flex>
          </Footer>
        </MediaQuery>
      }
    />
  );
}
