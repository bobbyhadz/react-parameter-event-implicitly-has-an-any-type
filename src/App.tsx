function App() {
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    console.log(event.target.value);
    console.log(event.target);
  };

  return (
    <div>
      <input onChange={handleChange} type="text" id="message" />
    </div>
  );
}

export default App;
