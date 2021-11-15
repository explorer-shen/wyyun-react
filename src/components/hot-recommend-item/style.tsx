import styled from 'styled-components'

interface iprops {
  size: number
}
export const HotrecommendItemWrapper = styled.div`
  position: relative;
  margin-top: 20px;
  margin-bottom: 60px;
  .cover {
    background-position: 0px 0px;
    width: ${(props: iprops) => props.size}px;
    height: ${(props: iprops) => props.size}px;
    position: relative;
    z-index: 2;
  }
  img {
    width: ${(props: iprops) => props.size}px;
    height: ${(props: iprops) => props.size}px;
    position: absolute;
    z-index: 1;
  }

  .bottom-shadow {
    width: ${(props: iprops) => props.size}px;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.4);
    border-top: 0.5px solid black;
    top: 115px;
    height: 25px;
    z-index: 3;
    .count {
      position: absolute;
      top: 4px;
      color: #ccc;
      left: 30px;
    }
    .icon {
      position: absolute;
      top: 4px;
      left: 10px;
      width: 30px;
      height: 20px;
      display: block;
      background-position: 0px -20px;
    }
    .icon-play {
      position: absolute;
      top: 4px;
      left: 110px;
      width: 20px;
      height: 20px;
      display: block;
      background-position: 0px -0px;
      &:hover {
        background-position: 0px -60px;
        cursor: pointer;
      }
    }
    .text {
      position: absolute;
      top: 30px;
      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }
`
