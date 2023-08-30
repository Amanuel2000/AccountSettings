import { Image, Table } from "@mantine/core";
import { useUserStyle } from "./style";
import {
  Button,
  Badge,
  rem,
  Box,
  Card,
  Group,
  Text,
  Avatar,
} from "@mantine/core";

export const Order = () => {
  const { classes } = useUserStyle();

  const elements = [
    {
      image: 6,
      name: "Diclo-Denk Retard (Diclofenac)",
      date: "02 August 23",
      desc: "long established fact.",
      status: "Pending",
    },
    {
      image: 6,
      name: "Diclo-Denk Retard (Diclofenac)",
      date: "02 August 23",
      desc: "long established fact.",
      status: "Pending",
    },
    {
      image: 6,
      name: "Diclo-Denk Retard (Diclofenac)",
      date: "02 August 23",
      desc: "long established fact.",
      status: "Pending",
    },
    {
      image: 6,
      name: "Diclo-Denk Retard (Diclofenac)",
      date: "02 August 23",
      desc: "long established fact.",
      status: "Pending",
    },
  ];
  const rows = elements.map((element) => (
    <tr key={element.name}>
      <td>
        <Group spacing="sm">
          <img
            style={{ width: "40px", height: "40px", borderRadius: "50%" }}
            src="https://order-microservice.che-meds.com/product/Imageviewer/1316"
            alt=""
          />
        </Group>
      </td>
      <td>{element.name}</td>
      <td>{element.date}</td>
      <td>{element.desc}</td>
      <td>
        <Badge
          variant="gradient"
          gradient={{ from: "#eb6ec0", to: "#ec8c69", deg: 35 }}>
          Pending
        </Badge>
      </td>
      <td>
        <Button sx={{ borderRadius: "5px" }}>Order Again</Button>
      </td>
      <td>
        <Button color="red" sx={{ borderRadius: "5px" }}>
          Remove Order
        </Button>
      </td>
    </tr>
  ));

  return (
    <>
      <Box>
        <Card withBorder shadow="md" radius="md">
          <Card.Section
            withBorder
            inheritPadding
            py="xs"
            sx={(theme) => ({
              backgroundColor: theme.colors.gray[0],
            })}>
            <Group position="apart">
              <Text weight={500}>Order History</Text>
            </Group>
          </Card.Section>

          <Table>
            <thead>
              <tr>
                <th>Product Image</th>
                <th>Product Name</th>
                <th>Ordered Date</th>
                <th>Description</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </Table>
        </Card>
      </Box>
    </>
  );
};
