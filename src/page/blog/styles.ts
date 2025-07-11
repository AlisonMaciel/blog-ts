import styled, { keyframes } from "styled-components";

const cardAnimation = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }

  to {
    transform: translateY(0);    
    opacity: 1;
  } 
`

const blogAnimation = keyframes`
  from {
    opacity: 0;
  }

  to {  
    opacity: 1;
  } 
`

const cardsAnimation = keyframes`
  from { 
    transform: translateY(100px);
    opacity: 0; 
  }

  to {      
    transform: translateY(0);    
    opacity: 1;
  }
`

export const BlogContainer = styled.div`
  width: 100%;
  height: 100%;
  animation: ${blogAnimation} 1000ms ease-in-out;

  section:nth-child(2) { 
    animation: ${cardAnimation} 700ms ease-in-out;
    width: 54rem;
    min-height: 13.25rem;
    display: flex;
    align-items: center;
    gap: 2rem;
    margin: -80px auto 0;
    background: ${props => props.theme['base-profile']};
    box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    padding: 2rem 2rem 2rem 2.5rem;

    >img {
      height: 9.25rem;
      width: 9.25rem;
      border-radius: 8px;
    }

    .findOutMore {
      display: flex;
      align-items: center;
      justify-content: space-between;

      h1 {
        font-weight: 700;
        font-size: 1.5rem;
        line-height: 130%;
        color: ${props => props.theme['base-title']};
      }

      .separetor {
        a {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          line-height: 160%;
          text-transform: uppercase;
          font-weight: 700;
          text-decoration: none;
          color: ${props => props.theme['blue']};
          font-size: 0.75rem;
          border-bottom: 1px solid transparent;
          transition: border 350ms linear;
        }

        a:hover {
          border-bottom: 1px solid ${props => props.theme['blue']};
        }

        img:hover {
          cursor: pointer;
        }
      }
    }

    .blog {
      p {
        line-height: 160%;
        color: ${props => props.theme['base-text']};
        margin: 8px 0px 1.5rem;
        text-align: left;
      }
    }

    .info {
      display: flex;
      justify-content: left;
      flex-wrap: wrap;
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

`
export const SearchForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 54rem;
  margin: 72px auto 48px;

  div {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: space-between;
    margin-bottom: 0.7rem;
    width: 100%;

    strong {
      font-weight: 500;
      font-size: 1.12rem;
      line-height: 160%;
      color: ${props => props.theme['base-subtitle']};
    }

    span {
      font-size: 0.87rem;
      line-height: 160%;
      color: #7B96B2;
    }
  }

  input {
    width: 100%;
    padding: 12px 1rem;
    line-height: 160%;
    background-color: ${props => props.theme['base-input']};
    border: 1px solid ${props => props.theme['base-border']};
    border-radius: 8px;
  }

  button {
    background: ${props => props.theme['base-profile']};
    border: none;
    padding: 16px;
    border-radius: 8px;
    color: ${props => props.theme['base-input']};
    cursor: pointer;
    transition: background-color 0.2s ease-in;
  }

  button:hover {
    background: #3D81C7;
  }

  input::placeholder {
    color: ${props => props.theme['base-label']};
  }
`

export const SectionArticle = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;  
  width: 54rem;
  margin: 0 auto 50px;
  animation: ${cardsAnimation} 900ms ease-in-out;
  article {
    background: #112131;
    border-radius: 10px;
    padding: 2rem;
    transition: background-color 0.5s, border 0.4s ease-in;
    border: 1px solid transparent;
    cursor: pointer;
    
    a {
      text-decoration: none;
    }

    .separetor {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 1rem;

      strong {
        font-weight: 500;
        font-size: 1.25rem;
        line-height: 160%;
        color: ${props => props.theme['base-title']};
      }

      span {
        font-size: 0.87rem;
        line-height: 220%;
        white-space: nowrap;
        color: #7B96B2; 
      }
    }

    p {
      margin-top: 1.25rem;
      line-height: 160%;
      color: ${props => props.theme['base-text']};
      text-align: left;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }

  article:hover {
    background:rgb(22, 43, 65);
    border: 1px solid ${props => props.theme['blue']};
  }
`










