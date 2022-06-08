import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 50px 150px;
  .nodata {
    color: #16b7c1;
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
  }
`;
export const Table = styled.table`
  border: 1px solid #f3f4f5;
  width: 100%;
  color: #313e47;
  font-size: var(--appTableFontSize);
  background: white;

  div.turncated {
    text-overflow: ellipsis;
    width: calc(98%);
    white-space: nowrap;
    overflow: hidden;
    text-align: center;
    margin: 0 5px;
  }
`;
Table.Head = styled.thead`
  height: 40px;
  background: #eee;
  flex-wrap: nowrap;
`;

Table.Tr = styled.tr`
  padding: 0 15px;
  min-height: ${({ filter, openfilter }) =>
    filter && openfilter
      ? '40px !important'
      : filter && !openfilter
      ? '0px !important'
      : '40px !important'};
  width: 100%;
  height: ${({ filter, openfilter }) =>
    filter && openfilter
      ? '40px !important'
      : filter && !openfilter
      ? '0px !important'
      : 'fit-content'};

  background: ${({ index }) => (index % 2 === 0 ? 'white' : '#f1f3f8')};
  cursor: ${({ hoverable }) => hoverable && 'pointer'};

  &:hover {
    background: ${({ hoverable }) =>
      hoverable && 'var(--appTableRowHoverColor)'};
  }
  .upper {
    text-transform: uppercase;
  }
`;

Table.Th = styled.th`
  min-width: 60px;
  width: ${({ action }) => (action ? '180px' : '325px')};
  position: relative;
  border: 1px solid #f9f9f9;
  margin-right: ${({ last }) => last && '10px'};
  justify-content: ${({ filter }) => filter && 'center'};
  height: ${({ filter, openfilter }) =>
    filter && openfilter
      ? '40px !important'
      : filter && !openfilter
      ? '0px !important'
      : '40px'};
  &:last-child {
    width: 180px;
  }
`;

export const Input = styled.input`
  height: 32px;
  background: '#FFFFFF';
  color: #000100;
  border: 1px #d8d9dd solid;
  border-radius: 2px;
  font-size: 16px;
  outline: none;
`;
export const FilterInput = styled.tr`
  width: 100%;
  align-items: center;
  grid-gap: 6px;
  padding: 0 0 0 50px;
`;

Table.Body = styled.tbody`
  width: 100%;
  height: 100%;
`;

Table.Td = styled.td`
  padding: ${({ parent }) => (parent ? '0px' : '1px 5px')};
  position: relative;
  width: ${({ width }) => (width ? width : '100px')};
  min-width: 60px;
  max-width: 100px;
  min-height: 40px;
  height: ${({ count, scrollable }) =>
    count ? `${(count + 1) * 40}px` : scrollable ? '60px' : '40px'};
  margin: 0px auto;
  z-index: ${({ zindex }) => zindex && 50};
  overflow-x: ${({ scrollable }) => scrollable && 'auto'};
  text-align: center;

  div.turncated {
    width: calc(95%);
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    text-align: center;
  }
`;
