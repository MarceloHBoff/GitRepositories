import styled from 'styled-components';

const Container = styled.div`
  max-width: 700px;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.6);
  padding: 30px;
  margin: 80px auto;

  h1 {
    font-size: 25px;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;

    svg {
      margin-right: 15px;
    }
  }
`;

export default Container;
