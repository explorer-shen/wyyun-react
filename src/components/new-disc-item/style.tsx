import styled from 'styled-components'

interface iprops {
  size: number
}

export const NewDiscItemWrapper = styled.div`
  width: 118px;
  position: relative;
  display: inline-block;
  margin-right: 6px;
  &:hover {
    cursor: pointer;
    .icon {
      position: absolute;
      top: 80px;
      left: 80px;
      width: 20px;
      height: 20px;
      display: block;
      background-position: 0px -0px;
    }
  }

  .covor {
    top: 0;
    background-position: 0 -570px;
    position: absolute;
    width: 118px;
    height: ${(props: iprops) => props.size}px;
  }
  .name {
    width: ${(props: iprops) => props.size}px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .artist {
    color: #666;
    width: ${(props: iprops) => props.size}px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  img {
    width: ${(props: iprops) => props.size}px;
    height: ${(props: iprops) => props.size}px;
  }
`
