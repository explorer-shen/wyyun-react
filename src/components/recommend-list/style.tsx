import styled from 'styled-components'

export const RecommendListHeaderWrapper = styled.div`
  width: 225px;
  height: 500px;
  padding-top: 50px;
  .header {
    padding-left: 20px;
    position: relative;
    .icon {
      position: absolute;
      top: 35px;
      display: inline-block;
      width: 25px;
      height: 30px;
    }
    .collect-icon {
      left: 140px;

      background-position: -300px -205px;
      &:hover {
        background-position: -300px -235px;
        cursor: pointer;
      }
    }
    .play-icon {
      left: 110px;

      background-position: -267px -205px;
      &:hover {
        background-position: -267px -235px;
        cursor: pointer;
      }
    }
    .header-name {
      position: absolute;
      font-weight: bold;
      font-size: 14px;
      display: inline-block;
      top: 10px;
      left: 110px;
      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
    img {
      width: 80px;
      height: 80px;
    }
  }
  .content-list {
    padding-left: 30px;
    padding-top: 26px;
    font-size: 13px;
    .cherk-all {
      margin-left: 110px;
      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }

    .list-text {
      margin-bottom: 11.5px;
      position: relative;
      &:hover {
        cursor: pointer;
        .hover-div {
          display: inline-block;
          position: absolute;
          left: 110px;
          .hover-play {
            display: inline-block;
            width: 17px;
            height: 17px;
            background-position: -267px -268px;
          }
          .hover-add {
            display: inline-block;
            width: 17px;
            height: 17px;
            background-position: 0px -698px;
          }
          .hover-collect {
            display: inline-block;
            width: 17px;
            height: 17px;
            background-position: -297px -268px;
          }
        }
        .hover-icon {
          margin-left: 5px;
          &:hover {
            cursor: pointer;
          }
        }
      }

      .first {
        color: #c10d0c;
      }
      .list-name {
        display: inline-block;
        margin-left: 10px;
        width: 90px;
        line-height: 12px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        &:hover {
          cursor: pointer;
          text-decoration: underline;
        }
      }
      .list-name {
        display: inline-block;
      }
    }
  }
`
