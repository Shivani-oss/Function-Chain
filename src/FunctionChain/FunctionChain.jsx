import React, { useState, useEffect } from 'react';
import {
  Container,
  CardGrid,
  Card,
  Title,
  Label,
  Input,
  Dropdown,
  IOContainer,
  IOText,
  RadioButtonContainer,
  InitialInput,
  InputText,
  OutputText,
  RadioButton,
  Output,
} from './styles';

const FunctionChain = () => {
  const [initialValue, setInitialValue] = useState(2); // Initial value for 'x'
  const [functions, setFunctions] = useState([
    { id: 1, equation: 'x*2', next: 2 },
    { id: 2, equation: '2*x+4', next: 4 },
    { id: 3, equation: 'x**2+20', next: null },
    { id: 4, equation: 'x-2', next: 5 },
    { id: 5, equation: 'x/2', next: 3 },
  ]);
  const [finalOutput, setFinalOutput] = useState(0);

  useEffect(() => {
    const calculateChain = () => {
      let x = parseFloat(initialValue);
      const visited = new Set();
      let currentFunction = functions.find((func) => func.id === 1);

      while (currentFunction && !visited.has(currentFunction.id)) {
        visited.add(currentFunction.id);
        try {
          x = eval(currentFunction.equation.replace(/x/g, x));
        } catch {
          setFinalOutput('Error');
          return;
        }
        currentFunction = functions.find(
          (func) => func.id === currentFunction.next
        );
      }

      if (!currentFunction && visited.size === functions.length) {
        setFinalOutput(x);
      }
    };

    calculateChain();
  }, [initialValue, functions]);

  const isValidEquation = (equation) => {
    const regex = /^[\d+\-*/^().\sx]*$/;
    if (!regex.test(equation)) return false;
    return true;
  };

  const handleEquationChange = (id, newEquation) => {
    if (isValidEquation(newEquation)) {
      setFunctions((prevFunctions) =>
        prevFunctions.map((func) =>
          func.id === id ? { ...func, equation: newEquation } : func
        )
      );
    } else {
      alert(
        'Invalid equation! Please use only basic arithmetic operators and exponents (**).'
      );
    }
  };

  return (
    <Container>
      <InputText>
        <span style={{ color: 'white' }}>Initial value of X</span>
      </InputText>

      <InitialInput
        type="number"
        value={initialValue}
        onChange={(e) => setInitialValue(e.target.value)}
        placeholder="Enter initial value"
      />

      <CardGrid>
        {functions.map((func) => (
          <Card
            key={func.id}
            gridRow={func.gridRow}
            gridColumn={func.gridColumn}
          >
            <Title>Function: {func.id}</Title>
            <div>
              <Label>Equation</Label>
              <Input
                type="text"
                className="text"
                value={func.equation}
                onChange={(e) => handleEquationChange(func.id, e.target.value)}
              />
            </div>
            <div>
              <Label>Next Function</Label>
              <Dropdown disabled>
                <option>{`Function ${func.next || 'None'}`}</option>
              </Dropdown>
            </div>
            <IOContainer>
              <RadioButtonContainer>
                <RadioButton />
                <IOText>input</IOText>
              </RadioButtonContainer>

              <RadioButtonContainer>
                <IOText>output</IOText>
                <RadioButton />
              </RadioButtonContainer>
            </IOContainer>
          </Card>
        ))}

        <OutputText>
          <span style={{ color: 'white' }}>Final Output Y</span>
        </OutputText>

        <Output value={finalOutput} placeholder="" readOnly />
      </CardGrid>
    </Container>
  );
};

export default FunctionChain;
