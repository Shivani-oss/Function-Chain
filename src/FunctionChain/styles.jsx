import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 235px);
  gap: 150px;
  padding: 30px;
  justify-content: center;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 235px);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  width: 235px;
  height: 251px;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 16px;
  background-color: #fff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 16px;
  color: #a5a5a5;
  text-align: start;
`;

export const Label = styled.label`
  font-size: 14px;
  color: #666;
  margin-bottom: 4px;
`;

export const Input = styled.input`
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #ffffff;
  color: #000000;
  width: 93%;
  margin-bottom: 16px;

  &:focus {
    outline: none;
    border: 2px solid #ffc267;
    box-shadow: 0 0 5px #ffc267;
  }
`;

export const Dropdown = styled.select`
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
  color: #666;
  width: 100%;
`;

export const IOContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: auto;
`;

export const IOText = styled.span`
  font-size: 12px;
  color: #888;
`;

export const RadioButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px; /* Space between the radio button and label */
`;

export const InitialInput = styled.input`
  position: absolute;
  width: 90px;
  height: 40px;
  top: 250px;
  left: 330px;
  gap: 0px;
  border-radius: 15px;
  border: 2px solid #ffc267;
  opacity: 1;
  background: #ffffff;
  padding-left: 10px;
  font-size: 16px;
  color: #000;
  text-align: start;

  &:focus {
    outline: none;
    border: 2px solid #ffc267;
    box-shadow: 0 0 5px #ffc267;
  }

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const InputText = styled.div`
  position: absolute;
  width: 105px;
  height: 22px;
  top: 220px;
  left: 330px;
  gap: 0px;
  border-radius: 14px;
  opacity: 0.8;
  background: #e29a2d;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
`;

export const OutputText = styled.div`
  position: absolute;
  width: 105px;
  height: 22px;
  top: 220px;
  right: 290px;
  gap: 0px;
  border-radius: 14px;
  opacity: 0.8;
  background: #4CAF79;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
`;

export const RadioButton = styled.input.attrs({ type: 'radio' })`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 2px solid #66A3FF;
  background-color: #fff;
  position: relative;
  appearance: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:checked {
    background-color: #66A3FF;
    border: 2px solid #66A3FF;
  }
`;

export const Output = styled.input`
  position: absolute;
  width: 90px;
  height: 40px;
  top: 250px;
  right: 290px;
  gap: 0px;
  border-radius: 15px;
  border: 2px solid #4CAF79;
  opacity: 1;
  background: #ffffff;
  padding-left: 10px;
  font-size: 16px;
  color: #000;
  text-align: start;

  &:focus {
    outline: none;
    border: 2px solid #4CAF79;
    box-shadow: 0 0 5px #4CAF79;
  }

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
