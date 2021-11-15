import styled from 'styled-components'

export const HotRecommendHWrapper = styled.div`
  background-position: -225px -156px;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 10px;
  border-bottom: 2px solid #c10d0c;
  .left {
    margin-left: 30px;
    display: flex;
    align-items: center;
    .title {
      &:hover {
        cursor: pointer;
      }
    }
    .items {
      display: flex;
      margin-left: 10px;
      .item {
        margin-right: 10px;
        margin-left: 10px;
        &:hover {
          text-decoration: underline;
          cursor: pointer;
        }
      }
    }
  }
  .right {
    display: flex;
    align-items: center;
    .moreButton {
      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
    .icon {
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-left: 4px;
      background-position: 0 -240px;
    }
  }
`
