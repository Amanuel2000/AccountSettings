import { rem, Button, Card, Group, PasswordInput, Text } from "@mantine/core";

export const Password = () => {
  return (
    <>
      <Card
        withBorder
        shadow="md"
        radius="md"
        sx={{ width: "400px", height: "100%" }}>
        <Card.Section
          withBorder
          inheritPadding
          py="xs"
          sx={(theme) => ({ backgroundColor: theme.colors.gray[0] })}>
          <Group position="apart">
            <Text weight={500}>Change Password</Text>
          </Group>
        </Card.Section>

        <PasswordInput
          placeholder="Old Password"
          label=" Old Password"
          description="Password must include at least one letter, number and special character"
          withAsterisk
        />

        <PasswordInput
          placeholder="New Password"
          label="New Password"
          withAsterisk
        />
        <PasswordInput
          placeholder="Confrim Password"
          label="Confirm Password"
          withAsterisk
        />

        <br />
        <Button>Submit</Button>
      </Card>
    </>
  );
};
