import { createStyles, Container, Title, Text, rem } from '@mantine/core';
import { IconConfucius, IconWorldBolt } from '@tabler/icons-react';
import { IconError404 } from '@tabler/icons-react';
import { Link, isRouteErrorResponse, useRouteError } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: rem(80),
    paddingBottom: rem(80),
  },

  inner: {
    position: 'relative',
  },

  content: {
    paddingTop: rem(220),
    position: 'relative',
    zIndex: 1,
    display:'flex',
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection:'column',
    alignItems:'center',

    [theme.fn.smallerThan('sm')]: {
      paddingTop: rem(120),
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    textAlign: 'center',
    fontWeight: 900,
    fontSize: rem(38),

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(32),
    },
  },

  description: {
    maxWidth: rem(540),
    margin: 'auto',
    marginTop: theme.spacing.xl,
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
  },
}));

export function ErrorHandler() {
  const { classes } = useStyles();
  const error = useRouteError();

  if (isRouteErrorResponse(error) && error.status === 401) 
  return (
    <Container className={classes.root}>
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>Error</Title>
          <IconError404 size={100} />

          <Text color="dimmed" size="lg" align="center" className={classes.description}>
            Page you are trying to open does not exist. You may have mistyped the address, or the
            page has been moved to another URL. If you think this is an error contact support.
          </Text>
          
          <Link to="/" style={{
                width:'200px',
                height:'100px',
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'column',
                textDecoration: 'none',
                backgroundColor:'primary',
            }}>Return To Main Page</Link>
        </div>
      </div>
    </Container>
  );
  if (isRouteErrorResponse(error) && error.status === 501) 
  return (
    <Container className={classes.root}>
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>Error</Title>
          <IconWorldBolt size={100} />

          <Text color="dimmed" size="lg" align="center" className={classes.description}>
            Some Error occurred on the website
          </Text>
          
          <Link to="/" style={{
                width:'200px',
                height:'100px',
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'column',
                textDecoration: 'none',
                backgroundColor:'primary',
            }}>Return To Main Page</Link>
        </div>
      </div>
    </Container>
  );
  return (
    <Container className={classes.root}>
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>Error</Title>
          <IconConfucius size={100} />

          <Text color="dimmed" size="lg" align="center" className={classes.description}>
            Some Error occurred
          </Text>
          
          <Link to="/" style={{
                width:'200px',
                height:'100px',
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'column',
                textDecoration: 'none',
                backgroundColor:'primary',
            }}>Return To Main Page</Link>
        </div>
      </div>
    </Container>
  );
}