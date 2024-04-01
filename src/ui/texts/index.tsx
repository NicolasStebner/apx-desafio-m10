import {styled} from "styled-components"

export const Title = styled.h1`
  font-size: 48px;
  margin: 0;
`

export const Subtitle = styled.h2`
  font-size: 32px;
  margin: 0;
`

export const LargeTextBold = styled.h3`
  font-size: 20px;
`;

export const LargeText = styled(LargeTextBold)`
  font-weight: normal;
  margin: 0;
`

export const BodyTextBold = styled.h4`
  font-size: 16px;
`;

export const BodyText = styled(BodyTextBold)`
  font-weight: normal;
`

export const TinyText = styled.h5`
  font-size: 12px;
  font-weight: normal;
`