import React from "react";
import { Container, IconContainer, Icon, CardName, TotalNumber } from "./styles";

type Props = {
    name: string
    total: number
}

const Card: React.FC<Props> = ({name, total}) => {
	return (
		<>
		  <Container>
              <IconContainer>
                <Icon></Icon>
                <CardName>{name}</CardName>
              </IconContainer>
              <TotalNumber>{total}</TotalNumber>
          </Container>
		</>
	);
};
export default Card;
