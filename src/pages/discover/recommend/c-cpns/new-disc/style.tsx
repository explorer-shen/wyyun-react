import styled from 'styled-components'

export const NewDiscWrapper = styled.div`
  position: relative;
  .item {
    display: flex;
    height: 180px;
    padding: 28px;
    background-color: #f5f5f5;
    margin-top: 30px;
    border: 1px solid #d3d3d3;
  }
  .icony {
    display: inline-block;
    width: 20px;
    height: 17px;
    position: absolute;
    top: 140px;
    cursor: pointer;
    &:hover {
      background-color: #ccc;
    }
  }
  .left-icon {
    background-position: -260px -75px;
  }
  .right-icon {
    background-position: -300px -75px;
    right: 10px;
  }
`
