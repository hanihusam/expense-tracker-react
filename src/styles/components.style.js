import styled from "styled-components";

export const Container = styled.div`
  margin: 30px auto;
  width: 350px;
`;

export const IncExpContainer = styled.div`
  background-color: #fff;
  box-shadow: var(--box-shadow);
  padding: 20px;
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  & > div {
    flex: 1;
    text-align: center;
  }
  & > div:first-of-type {
    border-right: 1px solid #dedede;
  }
`;

export const Money = styled.p`
  font-size: 20px;
  letter-spacing: 1px;
  margin: 5px 0;
  &.minus {
    color: #f54f74;
  }
  &.plus {
    color: #40b3a2;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  background-color: #9c88ff;
  box-shadow: var(--box-shadow);
  color: #fff;
  border: 0;
  display: block;
  font-size: 16px;
  margin: 10px 0 30px;
  padding: 10px;
  width: 100%;
  &:focus {
    outline: 0;
  }
`;

export const DeleteButton = styled.button`
  cursor: pointer;
  background-color: #e74c3c;
  border: 0;
  color: #fff;
  font-size: 20px;
  line-height: 20px;
  padding: 2px 5px;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(-100%, -50%);
  opacity: 0;
  transition: opacity 0.3s ease;
  &:focus {
    outline: 0;
  }
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: 40px;
  & li {
    background-color: #fff;
    box-shadow: var(--box-shadow);
    color: #333;
    display: flex;
    justify-content: space-between;
    position: relative;
    padding: 10px;
    margin: 10px 0;
  }
  & li.minus {
    border-right: 5px solid #f54f74;
  }
  & li.plus {
    border-right: 5px solid #40b3a2;
  }
  & li:hover ${DeleteButton} {
    opacity: 1;
  }
`;
