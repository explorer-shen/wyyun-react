import styled from 'styled-components'

export const HotPlayerWrapper = styled.div`
  padding: 20px;
  .header {
    font-weight: bold;
    border-bottom: 1px solid;
  }
  .content-item {
    margin-top: 15px;
    width: 208px;
    position: relative;
    .name {
      position: absolute;
      color: #000;
      display: inline-block;
      margin-left: 10px;
      font-size: 13px;
    }
    .position {
      width: 150px;
      top: 20px;
      position: absolute;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      display: inline-block;
      margin-left: 10px;
      font-size: 11px;
    }
    img {
      width: 40px;
      height: 40px;
    }
  }
`
