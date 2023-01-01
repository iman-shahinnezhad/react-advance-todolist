import styled from "styled-components";
import { PageType } from "../../types/page.type";

export const PageContainer = styled.div<PageType>`
  width: 100%;
  display: ${(props) => props.display};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  min-height: 100vh;
  padding: 50px;
`;
