import { ContextModalProps } from '@mantine/modals';
// import { ModalProductCard } from '..';
import { Product } from '@/type';
import { Container, Text } from '@mantine/core';

export const ProductModalContainer = ({innerProps }: ContextModalProps<{ modalBody: JSX.Element,product:Product}>) => {
  console.log(innerProps)
     return(<Container>
             <Text>
              Test Modal
             </Text>
          </Container>)
}
    
    




export const ModalContainer = {
    ProductModalContainer,
    /* ...other modals */
  };
  declare module '@mantine/modals' {
    export interface MantineModalsOverride {
      modals: typeof ModalContainer;
    }
  }