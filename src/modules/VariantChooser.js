function VariantChooser(key, text, clickFunction) {
  return (
    <li key={key} onClick={() => clickFunction(key)}>
      {text}
    </li>
  );
}

export default VariantChooser;
