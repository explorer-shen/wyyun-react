import styled from 'styled-components'

export const DiscoverWrapper = styled.div`
  background-color: #c20c0c;
  border-bottom: 1px solid #a40011;
  height: 30px;
  .list {
    display: flex;
    padding-left: 152px;
    padding-top: 5px;
    .item {
      a {
        color: #fff;
        padding: 0px 13px;
        margin-left: 40px;
        &:hover {
          display: block;
          height: 20px;
          border-radius: 20px;
          background-color: #9b0909;
          text-decoration: none;
        }
      }
      .active {
        display: block;
        height: 20px;
        border-radius: 20px;
        background-color: #9b0909;
      }
    }
  }
`
