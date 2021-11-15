import styled from 'styled-components'

export const RightListWrapper = styled.div`
  .top-img {
    height: 126px;
    background-position: 0 0;
    padding: 20px;
    .top-button {
      background-position: 0 -195px;
      display: block;
      width: 100px;
      height: 31px;
      line-height: 31px;
      text-align: center;
      color: #fff;
      text-shadow: 0 1px 0 #8a060b;
      margin: 20px auto;
      text-decoration: none;
      &:hover {
        background-position: -110px -195px;
      }
    }
  }
  .singer {
    margin-top: 20px;
    margin-left: 15px;
    margin-right: 15px;

    .singer-content {
      background: #fafafa;
      .button {
        margin-left: 25px;
        font-weight: bold;
      }
      img {
        width: 62px;
        height: 62px;
      }
    }
    .singer-content-item {
      margin-top: 20px;
      margin-bottom: 20px;
      border: 1px solid #e9e9e9;
      position: relative;
      .singer-content-name {
        position: absolute;
        top: 20px;
        left: 80px;
        font-weight: bold;
        font-size: 14px;
      }
    }
    .singer-header {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid;
      .singer-info {
        font-weight: bold;
      }
      .chrek-info {
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`
