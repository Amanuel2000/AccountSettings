import { Group, ActionIcon} from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
import { useFooterStyle } from './style'
import { FooterCenteredProps } from '@/type'
import { Link } from 'react-router-dom';


export function FooterComponent({ links }: FooterCenteredProps) {
  const { classes } = useFooterStyle();
  const items = links.map((link) => (
    <Link
      color="dimmed"
      key={link.label}
      to={link.link}
      style={{ lineHeight: 1 ,fontSize:"12px"}}
    >
      {link.label}
    </Link>
  ));

  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
        <img src={"/images/Che_Logo.png"} className={classes.logoImg} />


        <Group className={classes.links}>{items}</Group>

        <Group spacing="xs" position="right" noWrap>
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandTwitter size="1.05rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandYoutube size="1.05rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandInstagram size="1.05rem" stroke={1.5} />
          </ActionIcon>
        </Group>
      </div>
    </div>
  );
}

