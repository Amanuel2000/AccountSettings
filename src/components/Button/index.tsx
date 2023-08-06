
import {
  Button,ButtonProps,
  ActionIcon,ActionIconProps
} from "@mantine/core";
import { createPolymorphicComponent } from "@mantine/core";
import styled from "@emotion/styled";
// import { FC } from "react";

// const _StyledButton = styled(Button)`
//   width: 100%;
//   border-width: 0.125rem;
//   color: ${({ theme }) =>
//     theme.colorScheme === "dark" ? theme.white : theme.black};
// `;

export const CustomButton = createPolymorphicComponent<"button", ButtonProps>(
  styled(Button)`
  width: 100%;
  border-width: 0.125rem;
  color: ${({ theme }) =>
    theme.colorScheme === "dark" ? theme.white : theme.black};
`
);
export const CustomActionIcon = createPolymorphicComponent<"button", ActionIconProps>(
  styled(ActionIcon)`
  width: 100%;
  border-width: 0.125rem;
  color: ${({ theme }) =>
    theme.colorScheme === "dark" ? theme.white : theme.black};
`
);

// export const CustomButtonn: FC = () => {
//   return (
//     <StyledButton variant="filled" color="green.5" radius="md">
//       This is styled button
//     </StyledButton>
//   );
// };

// const _StyledActionIcon = styled(ActionIcon)`
//   width: 100%;
//   border-width: 0.125rem;
//   color: ${({ theme }) =>
//     theme.colorScheme === "dark" ? theme.white : theme.black};
// `;


// export const CustomActionIcon: FC = () => {
//   return (
//     <StyledActionIcon variant="filled" color="green.5" radius="md">
//       This is styled button
//     </StyledActionIcon>
//   );
// };

// export const CustomeButton = ({ ...props }: { [key: string]: any }) => (
//   <Button
//     mt="xl"
//     sx={(theme) => ({
//       borderRadius: 3,
//       [theme.fn.largerThan("sm")]: {
//         width: `calc(${theme.spacing.xl} * 15)`,
//       },
//     })}
//     {...props}
//   >
//     {props.children}
//   </Button>
// );
// export const CustomIconButton = ({ ...props }: { [key: string]: any }) => (
//   <ActionIcon
//     mt="xl"
//     sx={(theme) => ({
//       borderRadius: 3,
//       [theme.fn.largerThan("sm")]: {
//         width: `calc(${theme.spacing.xl} * 15)`,
//       },
//     })}
//     {...props}
//   >
//     {props.children}
//   </ActionIcon>
// );

// CustomButton.tsx
