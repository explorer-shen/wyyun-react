import styled from 'styled-components'

export const AppHeaderWrapper = styled.div`
  font-size: 14px;
  height: 70px;
  background-color: #242424;
  border-bottom: 1px solid #000;

  .content {
    display: flex;
  }
`
export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;

  .logo {
    display: block;
    width: 176px;
    height: 70px;
    background-position: 0 0;
    text-indent: -9999px;
  }
  .titleList {
    display: flex;
    .listItem {
      width: 84px;
      height: 70px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;

      .active .icon {
        position: absolute;
        display: inline-block;
        width: 12px;
        height: 7px;
        bottom: -1px;
        left: 50%;
        transform: translate(-50%, 0);
        background-position: -226px 0;
      }

      a {
        color: #ccc;
        font-size: 14px;
        text-decoration: none;
        height: 70px;
        width: 94px;
        text-align: center;
        line-height: 70px;
        position: relative;

        .hot-icon {
          position: absolute;
          top: 30%;
          right: -20px;
          background-position: -190px 0;
          width: 28px;
          height: 19px;
        }
      }
      &:hover {
        background-color: black;
        cursor: pointer;
        a {
          color: white;
        }
      }
    }
  }
`

export const HeaderRight = styled.div`
  display: flex;
  margin-left: 60px;
  align-items: center;

  .search {
    width: 150px;
    height: 32px;
    border-radius: 20px;
    input::-webkit-input-placeholder {
      font-size: 12px;
    }
  }
  .center {
    margin-left: 10px;
    background-color: black;
    color: #ccc;
    border: 1px solid #4f4f4f;
    &:hover {
      border: 1px solid #ccc;
      color: white;
    }
  }
  .login {
    margin-left: 10px;
    &:hover {
      color: #ccc;
    }
  }
`
