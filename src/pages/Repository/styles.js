import styled from 'styled-components';

export const Loading = styled.div`
  color: #fff;
  font-size: 50px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Owner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    margin: 20px;
    color: #00bb55;
    justify-content: center;
    text-decoration: none;
  }

  img {
    width: 120px;
    border-radius: 50%;
  }

  h1 {
    margin-top: 20px;
  }

  p {
    margin-top: 15px;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }
`;

export const IssueList = styled.ul`
  list-style: none;
  margin-top: 30px;
  padding-top: 30px;
  border-top: 1px solid #ccc;

  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #ccc;
    border-radius: 15px;

    & + li {
      margin-top: 10px;
    }

    img {
      width: 36px;
      border-radius: 50%;
      border: 1px solid #555;
    }

    div {
      flex: 1;
      margin-left: 15px;

      strong {
        font-size: 16px;

        a {
          text-decoration: none;
          color: #333;

          &:hover {
            color: #00bb55;
          }
        }

        span {
          background: #7159c1;
          color: #333;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 600;
          height: 20px;
          padding: 4px;
          margin: 15px;
        }
      }

      p {
        font-size: 12px;
        color: #666;
      }
    }
  }
`;

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px;

  button {
    background: #00bb55;
    color: #333;
    border: 0;
    border-radius: 10px;
    line-height: 1.6;
    width: 100px;
    padding: 5px;
    &:disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }
  }
`;

// export const IssueFilter = styled.button``;

export const IssueFilter = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 15px;
  button {
    border-radius: 4px;
    outline: 0;
    border: 0;
    padding: 8px;
    margin: 0 0.25rem;
    &:nth-child(${props => props.active + 1}) {
      background: #576574;
      color: white;
    }
  }
`;
