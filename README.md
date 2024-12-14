# Function Chain App

This project demonstrates a chain of mathematical functions connected in a fixed order, allowing users to input and modify equations. The app validates inputs and provides real-time results as the equations are applied in sequence.

## Features

1. **5 Cards Representing Functions**: The app displays 5 cards, each representing a function. These functions are visually linked using connected lines to indicate their sequential execution.  
2. **Input Fields for Mathematical Equations**: Each function card contains an input field where users can enter or modify the mathematical equation for that function.  
3. **Equation Validation**: The equations in the input fields only accept basic arithmetic operations: Addition (`+`), Subtraction (`-`), Multiplication (`*`), Division (`/`), Exponentiation (`**`). In addition, parentheses (`()`) are allowed in the addition equations to control the order of operations.  
4. **Fixed Execution Order**: The functions are executed in the following fixed order: Function 1 → Function 2 → Function 4 → Function 5 → Function 3.  
5. **Input and Output**: The app provides a final input field to show the output value with all functions applied in sequence.


---

## Getting Started

To run this project locally, follow the steps below:

### Prerequisites

- Node.js (version 14 or above)
- npm (Node Package Manager)

### Clone the Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

```

### Install the dependencies
```bash
npm install
```

### Run the Development Server
```bash
npm run dev
```

This will start the app, and you can access it in your browser at http://localhost:5173
