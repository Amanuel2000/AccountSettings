import { useForm } from "@mantine/form";
import {
  rem,
  Button,
  Card,
  Group,
  NativeSelect,
  Select,
  Text,
  TextInput,
} from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import { DateTimePicker } from "@mantine/dates";
import { Textarea } from "@mantine/core";

export const Users = () => {
  const form = useForm({
    initialValues: {
      firstName: "Abebe  ",
      lastName: "Kebede",
      email: "Kebdede@gmail.com",
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  return (
    <>
      <Card withBorder shadow="md" radius="md" sx={{ width: "400px" }}>
        <Card.Section
          withBorder
          inheritPadding
          py="xs"
          sx={(theme) => ({ backgroundColor: theme.colors.gray[0] })}>
          <Group position="apart">
            <Text weight={500}>User Update</Text>
          </Group>
        </Card.Section>

        <TextInput
          withAsterisk
          label="First Name"
          placeholder="First Name"
          {...form.getInputProps("firstName")}
        />
        <TextInput
          withAsterisk
          label="Last Name"
          placeholder="Last Name"
          {...form.getInputProps("lastName")}
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
          data={["Male", "Female"]}
          rightSection={<IconChevronDown size="1rem" />}
          rightSectionWidth={40}
        />

        <TextInput
          withAsterisk
          label="Nationality"
          description=" must include character and a word"
          placeholder="nationality"
          {...form.getInputProps("nationality")}
        />
      </Card>
      <br />
      <br />
      <Card withBorder shadow="sm" radius="md" sx={{ width: "400px" }}>
        <Card.Section
          withBorder
          inheritPadding
          py="xs"
          sx={(theme) => ({ backgroundColor: theme.colors.gray[0] })}>
          <Group position="apart">
            <Text weight={500}>User Address</Text>
          </Group>
        </Card.Section>

        <Select
          label="Country"
          placeholder="Select your country"
          data={[
            { value: "react", label: "React" },
            { value: "ng", label: "Angular" },
            { value: "svelte", label: "Svelte" },
            { value: "vue", label: "Vue" },
          ]}
        />
        <Select
          label="City"
          placeholder="Select your City"
          data={[
            { value: "react", label: "React" },
            { value: "ng", label: "Angular" },
            { value: "svelte", label: "Svelte" },
            { value: "vue", label: "Vue" },
          ]}
        />
        <TextInput
          withAsterisk
          label="Phone Number"
          placeholder="phone number"
          {...form.getInputProps("phone number")}
        />

        <TextInput
          withAsterisk
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps("email")}
        />

        <Textarea
          label="Physical Location"
          placeholder="Enter you location"
          autosize
          minRows={2}
          maxRows={4}
        />
        <br />
        <Button>Save</Button>
      </Card>
    </>
  );
};
