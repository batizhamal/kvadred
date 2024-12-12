import {PropsWithChildren} from 'react';
import styled from 'styled-components';

interface ScrollBlockProps extends PropsWithChildren {
  className?: string;
}

const StyledScroll = styled.div`
    flex: 1 1 auto;
    width: 100%;
    height: 100%;
    overflow: auto;
    z-index: 1;
`;

function ScrollBlock(props: ScrollBlockProps) {
  const {className = '', children} = props;

  return <StyledScroll className={className}>{children}</StyledScroll>;
}

export default ScrollBlock;
