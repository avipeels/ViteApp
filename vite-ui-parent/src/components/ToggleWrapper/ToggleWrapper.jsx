import { Toggle } from '@sapphireui/toggle';
import styled from 'styled-components';
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`
export default function ToggleWrapper() {
  return (
    <StyledWrapper>
      <Toggle size="md" />
      <Toggle size="lg" />
    </StyledWrapper>
  )
}
