import styled, { keyframes } from "styled-components";

const loadingPage = keyframes`
  to {
    transform: rotate(360deg);
  }

`

const contentPost = keyframes`
  from {opacity: 0}
  to {opacity: 1}
`     

export const PostContainer = styled.div`
  width: 100%;
  height: 100%;
  animation: ${contentPost} 700ms ease-in;

  section {
    width: 54rem;
    min-height: 13.25rem;
    gap: 2rem;
    margin: -80px auto 0;
    background: ${props => props.theme['base-profile']};
    box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    padding: 2rem 2rem 2rem 2.5rem;

    .navigationMenu {
      display: flex;
      align-items: center;
      justify-content: space-between;

      span {
        display: flex;
        gap: 0.5rem;

        a {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          line-height: 160%;
          text-transform: uppercase;
          text-decoration: none;
          font-weight: 700;
          color: ${props => props.theme['blue']};
          font-size: 0.75rem;
          border-bottom: 1px solid transparent;
          transition: border 350ms linear;
        }

        a:hover {
          border-bottom: 1px solid ${props => props.theme['blue']};
        }

        svg {
          color: ${props => props.theme['blue']};
        }
      }
    }

    .title {
      h2 {
        font-weight: 700;     
        font-size: 1.5rem;    
        line-height: 130%;
        margin-top: 1.25rem ;
        color: #${props => props.theme['base-title']};
      }
    }

    .info {
      display: flex;
      justify-content: left;
      flex-wrap: wrap;
      margin-top: 0.8rem;
      gap: 1.5rem;

      span {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: ${props => props.theme['base-span']};

      img {
        height: 18px;
        width: 18px;
      }
    }
  }
  }

  main {
    width: 54rem;
    margin: 40px auto;
  }

`
export const LoadingPage = styled.div`
  height: 4.62rem;
  width: 4.62rem;
  border: 5px solid ${props => props.theme['blue']};
  border-top: 5px solid ${props => props.theme['base-subtitle']};
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50% -50%);
  animation: ${loadingPage} 1000ms infinite linear;
`  