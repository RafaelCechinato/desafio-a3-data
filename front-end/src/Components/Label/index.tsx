import styled from 'styled-components';

interface LabelProps {
    children: any
    size: string
    color: string
    className?: string
}

const Label = styled.label<LabelProps>`
  display: flex;
  align-items: flex-start;
  width: 100%;
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  ${(props) => props.className?props.className:""}
`;

function LabelComponent({children,size,color, className}: LabelProps) {
  return (
    <Label size={size} color={color} className={className}>
      {children}
    </Label>
  )
}

export default LabelComponent
