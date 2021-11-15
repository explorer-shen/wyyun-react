import styled from 'styled-components'
import downloadImg from '@/assets/img/download.png'

interface iprops {
  bgImage?: string
}
export const TopBannerWrapper = styled.div`
  background: url(${(props: iprops) => props.bgImage}) center center/6000px;
  display: flex;
  justify-content: center;
  position: relative;
  .left-carousel {
    width: 700px;
    height: 285px;
    position: relative;
    .tabControl {
      color: white;
      .left-control {
        position: absolute;
        top: 40%;
        left: -50px;
      }
      .right-control {
        position: absolute;
        top: 40%;
        right: -300px;
      }
      svg {
        display: block;
        width: 37px;
        height: 64px;
        cursor: pointer;
        &:hover {
          background-color: rgba(0, 0, 0, 0.1);
        }
      }
    }
    img {
      width: 700px;
      height: 285px;
    }
  }
  .right-download {
    background: url('${downloadImg}');
    width: 250px;
    height: 285px;
    position: relative;
    cursor: pointer;

    .download-text {
      position: absolute;
      color: #8d8d8d;
      width: 250px;
      top: 250px;
      left: 10px;
    }
  }
`
