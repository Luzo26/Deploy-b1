import styled from "styled-components";

export const StyledContactForm = styled.div`
  width: 350px;
  font-family: Lato, sans-serfif;
  color: #002868;
  margin-top: 0px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width:400px) and (max-width:768px) {
    margin-top: 250px;
  }

  h1 {
    color: #002868;
  }
  
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 18px;
    input {
      width: 95%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 69, 180, 1);
      }
    }
    textarea {
      max-width: 95%;
      min-width: 95%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 69, 180, 1);
      }
    }
    label {
      margin-top: 1rem;
    }
    input[type="submit"] {
      margin-top: 2rem;
      width: fit-content;
      padding: 0px 35px 0px 35px;
      cursor: pointer;
      background: rgba(0, 69, 180, 1);
      color: white;
      border: none;
      border-radius: 50px;
      font-size: 16px;
      &:hover {
        transition: all 0.2s ease-in-out;
        background: rgba(251, 51, 51, 1);
      }
    }
  }
`;