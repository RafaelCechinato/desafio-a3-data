import styled from 'styled-components';

interface LabelProps {
    children: string
    size: string
    color: string
}

const Label = styled.label<LabelProps>`
  display: flex;
  align-items: flex-start;
  width: 100%;
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
`;

function LabelComponent({children,size,color}: LabelProps) {
  return (
    <Label size={size} color={color}>
        {children}
    </Label>
  )
}

export default LabelComponent
