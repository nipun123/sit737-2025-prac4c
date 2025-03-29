const express = require('express');
const app = express();
const winston = require('winston');

app.use(express.json());

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'calculator-microservice' },
  transports: [
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
    new winston.transports.File({ filename: 'logs/error.log', level:
          'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' }),
  ], });

app.get('/add', (req, res) => {
  const { num1, num2 } = req.query;
  const operation = "add";

  if (!num1 || !num2) {
    return res.status(400).json({ error: "Both num1 and num2 are required." });
  }

  const n1 = parseFloat(num1);
  const n2 = parseFloat(num2);

  logger.log({
    level: 'info',
    message: `New ${operation} operation requested: ${num1} ${operation}
 ${num2}`,
  });

  if (isNaN(n1) || isNaN(n2)) {
    return res.status(400).json({ error: "Invalid numbers." });
  }

  const result = n1 + n2;
  res.json({ result });
});


app.get('/subtract', (req, res) => {
  const { num1, num2 } = req.query;

  if (!num1 || !num2) {
    return res.status(400).json({ error: "Both num1 and num2 are required." });
  }

  const n1 = parseFloat(num1);
  const n2 = parseFloat(num2);

  if (isNaN(n1) || isNaN(n2)) {
    return res.status(400).json({ error: "Invalid numbers." });
  }

  const result = n1 - n2;
  res.json({ result });
});


app.get('/multiply', (req, res) => {
  const { num1, num2 } = req.query;

  if (!num1 || !num2) {
    return res.status(400).json({ error: "Both num1 and num2 are required." });
  }

  const n1 = parseFloat(num1);
  const n2 = parseFloat(num2);

  if (isNaN(n1) || isNaN(n2)) {
    return res.status(400).json({ error: "Invalid numbers." });
  }

  const result = n1 * n2;
  res.json({ result });
});


app.get('/divide', (req, res) => {
  const { num1, num2 } = req.query;

  if (!num1 || !num2) {
    return res.status(400).json({ error: "Both num1 and num2 are required." });
  }

  const n1 = parseFloat(num1);
  const n2 = parseFloat(num2);

  if (isNaN(n1) || isNaN(n2)) {
    return res.status(400).json({ error: "Invalid numbers." });
  }

  if (n2 === 0) {
    return res.status(400).json({ error: "Cannot divide by zero." });
  }

  const result = n1 / n2;
  res.json({ result });
});

app.get('/power', (req, res) => {
  const { base, exponent } = req.query;
  if (!base || !exponent) return res.status(400).json({ error: "Both base and exponent are required." });

  const b = parseFloat(base);
  const e = parseFloat(exponent);
  if (isNaN(b) || isNaN(e)) return res.status(400).json({ error: "Invalid numbers." });

  res.json({ result: Math.pow(b, e) });
});


app.get('/sqrt', (req, res) => {
  const { num } = req.query;
  if (!num) return res.status(400).json({ error: "Number is required." });

  const n = parseFloat(num);
  if (isNaN(n)) return res.status(400).json({ error: "Invalid number." });
  if (n < 0) return res.status(400).json({ error: "Cannot compute square root of a negative number." });

  res.json({ result: Math.sqrt(n) });
});

app.get('/modulo', (req, res) => {
  const { num1, num2 } = req.query;
  if (!num1 || !num2) return res.status(400).json({ error: "Both num1 and num2 are required." });

  const n1 = parseFloat(num1);
  const n2 = parseFloat(num2);
  if (isNaN(n1) || isNaN(n2)) return res.status(400).json({ error: "Invalid numbers." });
  if (n2 === 0) return res.status(400).json({ error: "Cannot compute modulo by zero." });

  res.json({ result: n1 % n2 });
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});