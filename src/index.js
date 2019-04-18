import app from "./app";

const port = process.env.PORT || 80;

export default app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
